import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Operations from "./pages/Operations";
import OperationDetails from "./pages/OperationDetails";
import Workers from "./pages/Workers";
import Equipment from "./pages/Equipment";
import SafetyChecks from "./pages/SafetyChecks";
import Locations from "./pages/Locations";
import Documents from "./pages/Documents";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";
import MyOperations from "./pages/MyOperations";
import MySafety from "./pages/MySafety";

function Protected({ children, officerOnly = false }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (officerOnly && user.role !== "Officer") {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        element={
          <Protected>
            <AppLayout />
          </Protected>
        }
      >
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/operations/:id" element={<OperationDetails />} />
        <Route path="/workers" element={<Protected officerOnly><Workers /></Protected>} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/safety-checks" element={<SafetyChecks />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/reports" element={<Protected officerOnly><Reports /></Protected>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-operations" element={<MyOperations />} />
        <Route path="/my-safety" element={<MySafety />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
