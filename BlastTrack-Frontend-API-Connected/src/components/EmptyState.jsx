import Icon from "./Icon";
export default function EmptyState({ title = "No records found", text = "Try changing your search or filters." }) {
  return <div className="empty-state"><div className="empty-icon"><Icon name="file" size={25} /></div><h3>{title}</h3><p>{text}</p></div>;
}
