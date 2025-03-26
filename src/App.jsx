import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import MedicalForm from "./pages/MedicalForm";
import Home from "./pages/Home";
import Questionnaire from "./components/Questionnaire";

function App() {
  // Check if the user has completed the signup process (Medical + Questionnaire)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);

  useEffect(() => {
    // Fetch authentication status from localStorage (or backend API)
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.isAuthenticated) {
      setIsAuthenticated(true);
      setIsFirstTimeUser(!user.hasCompletedForms);
    }
  }, []);

  return (
    <Routes>
      {/* Home should always be the default route */}
      <Route path="/" element={<Home />} />

      {/* Authentication Routes */}
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/signup"
        element={isAuthenticated ? <Navigate to="/" /> : <Signup />}
      />

      {/* First-time Signup Flow */}
      <Route
        path="/medical-form"
        element={isFirstTimeUser ? <MedicalForm /> : <Navigate to="/" />}
      />
      <Route
        path="/questionnaire"
        element={isFirstTimeUser ? <Questionnaire /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
