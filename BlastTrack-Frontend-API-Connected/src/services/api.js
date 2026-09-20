import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  timeout: 10000,
  headers: { "Content-Type": "application/json" }
});

api.interceptors.request.use((config) => {
  try {
    const session = JSON.parse(localStorage.getItem("blasttrack_session") || "null");
    if (session?.token) config.headers.Authorization = `Bearer ${session.token}`;
  } catch {}
  return config;
});

export const authApi = {
  login: (payload) => api.post("/auth", payload)
};
export const operationsApi = {
  list: (params) => api.get("/operations", { params }),
  get: (id) => api.get(`/operations/${id}`),
  create: (data) => api.post("/operations", data),
  update: (id, data) => api.put(`/operations/${id}`, data),
  remove: (id) => api.delete(`/operations/${id}`)
};
export const workersApi = {
  list: (params) => api.get("/workers", { params }),
  create: (data) => api.post("/workers", data),
  update: (id, data) => api.put(`/workers/${id}`, data),
  remove: (id) => api.delete(`/workers/${id}`)
};
export const equipmentApi = {
  list: (params) => api.get("/equipment", { params }),
  create: (data) => api.post("/equipment", data),
  update: (id, data) => api.put(`/equipment/${id}`, data),
  remove: (id) => api.delete(`/equipment/${id}`)
};
export const safetyApi = {
  list: (params) => api.get("/safety-checks", { params }),
  create: (data) => api.post("/safety-checks", data),
  update: (id, data) => api.put(`/safety-checks/${id}`, data)
};
export const locationsApi = {
  list: (params) => api.get("/locations", { params }),
  create: (data) => api.post("/locations", data),
  update: (id, data) => api.put(`/locations/${id}`, data)
};
export const documentsApi = {
  list: (params) => api.get("/documents", { params })
};
export const reportsApi = {
  summary: (params) => api.get("/reports", { params }),
  exportCsv: (params) => api.get("/reports/export", { params, responseType: "blob" })
};

export default api;
