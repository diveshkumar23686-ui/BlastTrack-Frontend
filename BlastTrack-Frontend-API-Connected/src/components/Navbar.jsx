import { useAuth } from "../context/AuthContext";
import Icon from "./Icon";

export default function Navbar({ title, onMenu }) {
  const { user } = useAuth();
  return <header className="topbar">
    <div className="topbar-left"><button className="mobile-menu icon-btn" onClick={onMenu}><Icon name="menu" /></button><div className="crumb"><span>Workspace</span><b>/</b><strong>{title}</strong></div></div>
    <div className="topbar-right">
      <button className="icon-btn notification"><Icon name="bell" /><span className="notify-dot" /></button>
      <div className="profile-mini"><div className="avatar small">{user?.name?.charAt(0) || "D"}</div><div className="profile-text"><strong>{user?.name}</strong><span>{user?.role}</span></div></div>
    </div>
  </header>;
}
