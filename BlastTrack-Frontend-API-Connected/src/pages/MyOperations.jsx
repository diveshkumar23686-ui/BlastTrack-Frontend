import { useEffect,useState } from "react";
import PageHeader from "../components/PageHeader";
import StatusBadge from "../components/StatusBadge";
import Icon from "../components/Icon";
import { operationsApi } from "../services/api";
export default function MyOperations(){const [rows,setRows]=useState([]),[error,setError]=useState("");useEffect(()=>{operationsApi.list().then(r=>setRows(r.data)).catch(e=>setError(e?.response?.data?.message||"Could not load operations."))},[]);return <div><PageHeader eyebrow="WORKER VIEW" title="My Operations" description="View-only access to relevant completed operation records."/>{error&&<div className="notice"><Icon name="shield"/><span>{error}</span></div>}<section className="panel table-panel"><div className="table-wrap"><table><thead><tr><th>Operation</th><th>Date</th><th>Location</th><th>Safety</th><th>Status</th></tr></thead><tbody>{rows.map(x=><tr key={x.id}><td><strong className="primary-text">{x.id}</strong></td><td>{x.date}</td><td>{x.location}</td><td><StatusBadge>{x.safety}</StatusBadge></td><td><StatusBadge>{x.status}</StatusBadge></td></tr>)}</tbody></table></div></section></div>}
