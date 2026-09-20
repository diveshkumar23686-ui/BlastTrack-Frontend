import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const titleMap = {
    "/dashboard": "Dashboard",
    "/operations": "Operations",
    "/workers": "Workers",
    "/equipment": "Equipment",
    "/safety-checks": "Safety Checks",
    "/locations": "Locations",
    "/documents": "Documents",
    "/reports": "Reports",
    "/profile": "My Profile",
    "/my-operations": "My Operations",
    "/my-safety": "Safety Records"
  };

  return (
    <div className="app-shell">
      <Sidebar mobileOpen={mobileOpen} closeMobile={() => setMobileOpen(false)} />
      <div className="main-shell">
        <Navbar title={titleMap[location.pathname] || "Operation Details"} onMenu={() => setMobileOpen(true)} />
        <main className="content"><Outlet /></main>
        <footer className="footer"><span>BlastTrack</span><span>Academic management interface • {user?.role}</span></footer>
      </div>
    </div>
  );
}
