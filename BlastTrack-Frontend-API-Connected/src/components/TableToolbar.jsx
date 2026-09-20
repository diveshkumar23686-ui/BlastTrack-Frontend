import Icon from "./Icon";
export default function TableToolbar({ search, setSearch, placeholder = "Search records...", children }) {
  return <div className="table-toolbar">
    <div className="search-box"><Icon name="search" size={18} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder={placeholder} /></div>
    <div className="toolbar-actions">{children}</div>
  </div>;
}
