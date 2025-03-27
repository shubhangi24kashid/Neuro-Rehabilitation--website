import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import MedicalForm from "./pages/MedicalForm";
import Home from "./pages/Home";
import Questionnaire from "./components/Questionnaire";

const LOCAL_STORAGE_USER_KEY = "user";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasCompletedForms, setHasCompletedForms] = useState(false);
  const [hasCompletedQuestionnaire, setHasCompletedQuestionnaire] = useState(false);
  const navigate = useNavigate();

  // Utility function to load user data, memoized for stability
  const loadUserData = useCallback(() => {
    const userData = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    if (userData) {
      const user = JSON.parse(userData);
      setIsAuthenticated(user.isAuthenticated || false);
      setHasCompletedForms(user.hasCompletedForms || false);
      setHasCompletedQuestionnaire(user.hasCompletedQuestionnaire || false);

      // Redirect to medical form only if conditions are met
      const currentPath = window.location.pathname;
      if (user.isAuthenticated && !user.hasCompletedForms && currentPath !== "/signup" && currentPath !== "/login") {
        navigate("/medical-form");
      }
    } else {
      setIsAuthenticated(false);
    }
  }, [navigate]);

  // Load user data when the component mounts
  useEffect(() => {
    loadUserData();
  }, [loadUserData]);

  // Helper function to restrict access for authenticated users
  const ProtectedRoute = ({ condition, redirectTo, children }) => {
    return condition ? children : <Navigate to={redirectTo} />;
  };

  // Helper function to restrict access for unauthenticated users
  const PublicRoute = ({ condition, redirectTo, children }) => {
    return !condition ? children : <Navigate to={redirectTo} />;
  };

  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<Home />} />

      {/* Public Routes - Accessible only when not authenticated */}
      <Route
        path="/login"
        element={
          <PublicRoute condition={!isAuthenticated} redirectTo="/">
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute condition={!isAuthenticated} redirectTo="/">
            <Signup />
          </PublicRoute>
        }
      />

<Route
  path="/medical-form"
  element={
    <MedicalForm
      setIsAuthenticated={setIsAuthenticated}
      setHasCompletedForms={setHasCompletedForms}
    />
  }
/>
         <Route
        path="/questionnaire"
        element={
          <ProtectedRoute
            condition={isAuthenticated && hasCompletedForms && !hasCompletedQuestionnaire}
            redirectTo="/"
          >
            <Questionnaire />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
