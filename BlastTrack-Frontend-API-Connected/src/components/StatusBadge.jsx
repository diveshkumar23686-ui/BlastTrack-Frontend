export default function StatusBadge({ children, tone }) {
  const value = String(children || "").toLowerCase();
  let cls = tone || "neutral";
  if (!tone) {
    if (["passed", "available", "completed", "active", "clear"].includes(value)) cls = "success";
    else if (["pending", "assigned", "needs review"].includes(value)) cls = "warning";
    else if (["maintenance", "inactive", "rejected"].includes(value)) cls = "danger";
    else if (["in progress"].includes(value)) cls = "info";
  }
  return <span className={`badge badge-${cls}`}><span className="badge-dot" />{children}</span>;
}
