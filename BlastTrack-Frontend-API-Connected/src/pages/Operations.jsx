import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import TableToolbar from "../components/TableToolbar";
import StatusBadge from "../components/StatusBadge";
import Modal from "../components/Modal";
import Icon from "../components/Icon";
import { operationsApi } from "../services/api";

const initial = {id:"",date:"",location:"",officer:"",workers:"",equipment:"",safety:"Passed",status:"Completed",remarks:""};
export default function Operations() {
  const [rows,setRows]=useState([]),[search,setSearch]=useState(""),[safety,setSafety]=useState("All"),[open,setOpen]=useState(false),[form,setForm]=useState(initial),[mode,setMode]=useState("add"),[error,setError]=useState(""),[loading,setLoading]=useState(true);
  const navigate=useNavigate();
  const load=async()=>{setLoading(true);try{const {data}=await operationsApi.list({search,safety});setRows(data);setError("");}catch(e){setError(e?.response?.data?.message||"Could not load operations.");}finally{setLoading(false);}};
  useEffect(()=>{load();},[search,safety]);
  const filtered=useMemo(()=>rows,[rows]);
  const submit=async e=>{e.preventDefault();try{if(mode==="edit") await operationsApi.update(form.id,{...form,workers:Number(form.workers)||0});else await operationsApi.create({...form,workers:Number(form.workers)||0});setOpen(false);setForm(initial);await load();}catch(e){setError(e?.response?.data?.message||"Could not save operation.");}};
  const remove=async id=>{if(!window.confirm(`Delete ${id}?`))return;try{await operationsApi.remove(id);await load();}catch(e){setError(e?.response?.data?.message||"Could not delete operation.");}};
  return <div><PageHeader eyebrow="RECORDS" title="Completed Operations" description="Manage completed operation records and their administrative attachments." action={<button className="btn primary" onClick={()=>{setMode("add");setForm(initial);setOpen(true)}}><Icon name="plus"/> Add Operation</button>}/>
    <div className="notice"><Icon name="shield"/><span><strong>Academic demo:</strong> this page records completed operations only. It does not provide operational instructions, calculations, or procedures.</span></div>
    {error&&<div className="notice"><Icon name="shield"/><span>{error}</span></div>}
    <section className="panel table-panel"><TableToolbar search={search} setSearch={setSearch} placeholder="Search by operation, location or officer..."><select className="select" value={safety} onChange={e=>setSafety(e.target.value)}><option>All</option><option>Passed</option><option>Pending</option><option>Needs Review</option></select></TableToolbar>
      <div className="table-wrap"><table><thead><tr><th>Operation</th><th>Date</th><th>Location</th><th>Officer</th><th>Workers</th><th>Safety</th><th>Status</th><th></th></tr></thead><tbody>{loading?<tr><td colSpan="8">Loading...</td></tr>:filtered.map(r=><tr key={r.id}><td><strong className="primary-text">{r.id}</strong></td><td>{r.date}</td><td>{r.location}</td><td>{r.officer}</td><td>{r.workers}</td><td><StatusBadge>{r.safety}</StatusBadge></td><td><StatusBadge>{r.status}</StatusBadge></td><td><div className="row-actions"><button title="View" onClick={()=>navigate(`/operations/${r.id}`)}><Icon name="eye"/></button><button title="Edit" onClick={()=>{setMode("edit");setForm({...r});setOpen(true)}}><Icon name="edit"/></button><button title="Delete" onClick={()=>remove(r.id)}><Icon name="trash"/></button></div></td></tr>)}</tbody></table>{!loading&&filtered.length===0&&<div className="table-empty">No matching records.</div>}</div>
      <div className="table-foot"><span>{filtered.length} database records</span><span className="demo-label">Live API</span></div>
    </section>
    <Modal open={open} onClose={()=>setOpen(false)} title={mode==="edit"?"Edit Operation":"Add Completed Operation"} wide><form className="form-grid" onSubmit={submit}>{[["id","Operation ID","text"],["date","Operation Date","date"],["location","Location","text"],["officer","Responsible Officer","text"],["workers","Workers Involved","number"],["equipment","Equipment Used","text"]].map(([key,label,type])=><label key={key}>{label}<input type={type} value={form[key]??""} onChange={e=>setForm({...form,[key]:e.target.value})} required={!["officer","workers","equipment"].includes(key)}/></label>)}<label>Safety Check Status<select value={form.safety} onChange={e=>setForm({...form,safety:e.target.value})}><option>Passed</option><option>Pending</option><option>Needs Review</option></select></label><label>Completion Status<select value={form.status} onChange={e=>setForm({...form,status:e.target.value})}><option>Completed</option><option>In Progress</option></select></label><label className="full">Remarks<textarea rows="4" value={form.remarks||""} onChange={e=>setForm({...form,remarks:e.target.value})}/></label><div className="modal-actions full"><button type="button" className="btn secondary" onClick={()=>setOpen(false)}>Cancel</button><button className="btn primary" type="submit">Save Record</button></div></form></Modal>
  </div>;
}
