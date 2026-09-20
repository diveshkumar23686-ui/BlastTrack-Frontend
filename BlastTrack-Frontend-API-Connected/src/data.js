export const demoOperations = [
  { id:"OP-2026-014", date:"18 Sep 2026", location:"Site Alpha", officer:"Demo Officer", workers:8, safety:"Passed", status:"Completed", remarks:"Completed record submitted for academic demonstration." },
  { id:"OP-2026-013", date:"16 Sep 2026", location:"Site North", officer:"A. Sharma", workers:6, safety:"Passed", status:"Completed", remarks:"Administrative record verified." },
  { id:"OP-2026-012", date:"12 Sep 2026", location:"Site East", officer:"R. Thakur", workers:5, safety:"Needs Review", status:"Completed", remarks:"Follow-up document review pending." },
  { id:"OP-2026-011", date:"09 Sep 2026", location:"Site Central", officer:"P. Verma", workers:7, safety:"Passed", status:"Completed", remarks:"All required records attached." },
  { id:"OP-2026-010", date:"05 Sep 2026", location:"Site West", officer:"A. Sharma", workers:4, safety:"Pending", status:"Completed", remarks:"Safety record awaiting administrative review." }
];
export const demoWorkers = [
  {id:"WRK-001", name:"Aman Kumar", employee:"EMP-1041", designation:"Field Worker", contact:"+91 98XXXXXX21", joining:"12 Jan 2025", status:"Active"},
  {id:"WRK-002", name:"Rohit Sharma", employee:"EMP-1048", designation:"Technician", contact:"+91 97XXXXXX63", joining:"21 Feb 2025", status:"Active"},
  {id:"WRK-003", name:"Neeraj Thakur", employee:"EMP-1052", designation:"Field Worker", contact:"+91 96XXXXXX10", joining:"04 Mar 2025", status:"Active"},
  {id:"WRK-004", name:"Karan Singh", employee:"EMP-1070", designation:"Supervisor", contact:"+91 95XXXXXX84", joining:"18 Jun 2024", status:"Inactive"}
];
export const demoEquipment = [
  {id:"EQ-101", name:"Safety Kit A", category:"Safety", condition:"Good", assigned:"Aman Kumar", inspection:"14 Sep 2026", maintenance:"14 Dec 2026", status:"Assigned"},
  {id:"EQ-102", name:"Communication Unit B", category:"Communication", condition:"Good", assigned:"Rohit Sharma", inspection:"11 Sep 2026", maintenance:"11 Dec 2026", status:"Assigned"},
  {id:"EQ-103", name:"Monitoring Unit C", category:"Monitoring", condition:"Serviceable", assigned:"—", inspection:"09 Sep 2026", maintenance:"09 Nov 2026", status:"Available"},
  {id:"EQ-104", name:"Site Equipment D", category:"General", condition:"Review required", assigned:"—", inspection:"01 Sep 2026", maintenance:"01 Oct 2026", status:"Maintenance"}
];
export const demoSafety = [
  {id:"SC-214", operation:"OP-2026-014", date:"18 Sep 2026", inspector:"Demo Officer", status:"Passed", remarks:"Record complete."},
  {id:"SC-213", operation:"OP-2026-013", date:"16 Sep 2026", inspector:"A. Sharma", status:"Passed", remarks:"Administrative review complete."},
  {id:"SC-212", operation:"OP-2026-012", date:"12 Sep 2026", inspector:"R. Thakur", status:"Needs Review", remarks:"Document review required."},
  {id:"SC-211", operation:"OP-2026-011", date:"09 Sep 2026", inspector:"P. Verma", status:"Passed", remarks:"Record complete."}
];
export const demoLocations = [
  {id:"LOC-01", site:"Site Alpha", area:"North Block", status:"Active", remarks:"Primary demonstration location."},
  {id:"LOC-02", site:"Site North", area:"Sector B", status:"Active", remarks:"Record location."},
  {id:"LOC-03", site:"Site East", area:"East Block", status:"Review", remarks:"Administrative review pending."}
];
export const demoDocuments = [
  {name:"Operation_Report_OP-2026-014.pdf", operation:"OP-2026-014", by:"Demo Officer", date:"18 Sep 2026", type:"Operation Report"},
  {name:"Site_Photo_OP-2026-014.jpg", operation:"OP-2026-014", by:"Demo Officer", date:"18 Sep 2026", type:"Site Photograph"},
  {name:"Safety_Record_OP-2026-013.pdf", operation:"OP-2026-013", by:"A. Sharma", date:"16 Sep 2026", type:"Safety Document"},
  {name:"Operation_Report_OP-2026-012.pdf", operation:"OP-2026-012", by:"R. Thakur", date:"12 Sep 2026", type:"Operation Report"}
];
