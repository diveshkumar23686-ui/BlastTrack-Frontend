import { useAuth } from "../context/AuthContext";
import PageHeader from "../components/PageHeader";
import Icon from "../components/Icon";
export default function Profile(){
 const {user}=useAuth();
 return <div><PageHeader eyebrow="ACCOUNT" title="My Profile" description="Demo account information for the current session."/><div className="profile-layout"><section className="panel profile-card-large"><div className="profile-cover"></div><div className="profile-avatar">{user.name[0]}</div><div className="profile-main"><h2>{user.name}</h2><StatusBadge>{user.role}</StatusBadge><p>Demo account • {user.id}</p></div></section><section className="panel"><div className="panel-head"><div><h2>Account details</h2><p>Read-only demo information</p></div></div><div className="detail-list"><div className="detail-row"><span>Name</span><strong>{user.name}</strong></div><div className="detail-row"><span>Role</span><strong>{user.role}</strong></div><div className="detail-row"><span>Account ID</span><strong>{user.id}</strong></div><div className="detail-row"><span>Access</span><strong>{user.role==="Officer"?"Management":"View only"}</strong></div></div></section></div></div>;
}
function StatusBadge({children}){return <span className="badge badge-info"><span className="badge-dot"/>{children}</span>}
