import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Icon from "./Icon";

const officer = [
  ["Dashboard", "/dashboard", "grid"],
  ["Operations", "/operations", "layers"],
  ["Workers", "/workers", "users"],
  ["Equipment", "/equipment", "box"],
  ["Safety Checks", "/safety-checks", "shield"],
  ["Locations", "/locations", "pin"],
  ["Documents", "/documents", "file"],
  ["Reports", "/reports", "chart"],
];
const worker = [
  ["Dashboard", "/dashboard", "grid"],
  ["My Profile", "/profile", "user"],
  ["My Operations", "/my-operations", "layers"],
  ["Safety Records", "/my-safety", "shield"],
  ["Equipment", "/equipment", "box"],
  ["Documents", "/documents", "file"],
];

export default function Sidebar({ mobileOpen, closeMobile }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const items = user?.role === "Officer" ? officer : worker;

  const signOut = () => { logout(); navigate("/login", { replace: true }); };

  return <>
    <div className={`mobile-overlay ${mobileOpen ? "show" : ""}`} onClick={closeMobile} />
    <aside className={`sidebar ${mobileOpen ? "open" : ""}`}>
      <div className="brand" onClick={() => navigate("/dashboard")}>
        <div className="brand-mark"><span className="brand-mark-inner">B</span></div>
        <div><div className="brand-name">BlastTrack</div><div className="brand-sub">Operations & Safety</div></div>
      </div>
      <div className="workspace-label">WORKSPACE</div>
      <nav className="side-nav">
        {items.map(([label, to, icon]) => <NavLink key={to} to={to} onClick={closeMobile} className={({isActive}) => `side-link ${isActive ? "active" : ""}`}><Icon name={icon} /><span>{label}</span></NavLink>)}
      </nav>
      <div className="sidebar-bottom">
        <div className="sidebar-user">
          <div className="avatar">{user?.name?.charAt(0) || "D"}</div>
          <div><strong>{user?.name}</strong><small>{user?.role}</small></div>
        </div>
        <button className="logout-link" onClick={signOut}><Icon name="logout" /><span>Logout</span></button>
      </div>
    </aside>
  </>;
}
