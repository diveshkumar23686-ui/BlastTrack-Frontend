import { createContext, useContext, useMemo, useState } from "react";
import { authApi } from "../services/api";

const AuthContext = createContext(null);
const KEY = "blasttrack_session";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem(KEY)) || null; } catch { return null; }
  });
  const [loading, setLoading] = useState(false);

  const loginDemo = async (role) => {
    setLoading(true);
    try {
      const { data } = await authApi.login({ role });
      const session = { ...data.user, token: data.token };
      localStorage.setItem(KEY, JSON.stringify(session));
      setUser(session);
      return session;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(KEY);
    setUser(null);
  };

  const value = useMemo(() => ({ user, loginDemo, logout, loading }), [user, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() { return useContext(AuthContext); }
