import { Routes, Route } from "react-router-dom";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import MedicalForm from "./pages/MedicalForm";
import Home from "./pages/Home";
import Questionnaire from "./components/Questionnaire";
 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/medical-form" element={<MedicalForm />} />
      <Route path="/questionnaire" element={<Questionnaire />} />
    </Routes>
  );
}

export default App;
