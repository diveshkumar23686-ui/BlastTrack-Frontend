import Icon from "./Icon";

export default function StatCard({ title, value, note, icon, accent = "blue" }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${accent}`}><Icon name={icon} size={21} /></div>
      <div className="stat-content">
        <div className="stat-title">{title}</div>
        <div className="stat-value">{value}</div>
        {note && <div className="stat-note">{note}</div>}
      </div>
    </div>
  );
}
