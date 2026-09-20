import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Icon from "../components/Icon";

export default function Login() {
  const { user, loginDemo, loading } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => { if (user) navigate("/dashboard", { replace: true }); }, [user, navigate]);

  const enter = async (role) => {
    setError("");
    try { await loginDemo(role); navigate("/dashboard"); }
    catch (err) { setError(err?.response?.data?.message || "Could not connect to the backend."); }
  };

  return <div className="login-page">
    <div className="login-visual">
      <div className="login-grid" /><div className="login-orbit orbit-one" /><div className="login-orbit orbit-two" />
      <div className="login-visual-content">
        <div className="brand login-brand"><div className="brand-mark"><span className="brand-mark-inner">B</span></div><div><div className="brand-name">BlastTrack</div><div className="brand-sub">Operations & Safety</div></div></div>
        <div className="hero-copy"><div className="eyebrow light">INDUSTRIAL RECORD MANAGEMENT</div><h1>One workspace for completed operations, people and safety records.</h1><p>Organize administrative records in a clean, structured interface built for academic demonstration.</p></div>
        <div className="visual-stats"><div><strong>01</strong><span>Operations</span></div><div><strong>02</strong><span>Safety records</span></div><div><strong>03</strong><span>Documents</span></div></div>
      </div>
    </div>
    <div className="login-panel"><div className="login-card">
      <div className="mobile-login-brand"><div className="brand-mark"><span className="brand-mark-inner">B</span></div><strong>BlastTrack</strong></div>
      <div className="login-head"><div className="eyebrow">WELCOME</div><h2>Choose demo access</h2><p>Use a role below to enter the academic demonstration workspace. No password is required.</p></div>
      {error && <div className="notice"><Icon name="shield"/><span>{error}</span></div>}
      <div className="demo-buttons">
        <button className="demo-role officer" disabled={loading} onClick={() => enter("Officer")}><span className="role-icon"><Icon name="shield" /></span><span><strong>{loading ? "Connecting..." : "Login as Officer"}</strong><small>Manage records and reports</small></span><Icon name="arrow" size={20} /></button>
        <button className="demo-role worker" disabled={loading} onClick={() => enter("Worker")}><span className="role-icon"><Icon name="user" /></span><span><strong>{loading ? "Connecting..." : "Login as Worker"}</strong><small>View assigned information</small></span><Icon name="arrow" size={20} /></button>
      </div>
      <div className="demo-note"><Icon name="check" /><span>Session is authenticated by the BlastTrack API and stored locally.</span></div>
      <div className="login-footer">BlastTrack • College DBMS Project</div>
    </div></div>
  </div>;
}
