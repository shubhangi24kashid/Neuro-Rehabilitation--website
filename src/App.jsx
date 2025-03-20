
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
