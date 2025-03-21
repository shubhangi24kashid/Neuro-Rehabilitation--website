import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/MedicalForm.css"; // Ensure this file exists


const MedicalForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    bloodType: "",
    allergies: "",
    medicalConditions: "",
    emergencyContact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Medical Form Data:", formData);
    alert("Medical details saved successfully!");
    
    // Redirect to the homepage after form submission
    navigate("/");
  };

  return (
    <div className="medical-form-container">
      <h2>Medical Information</h2>
      <form className="medical-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <select name="bloodType" value={formData.bloodType} onChange={handleChange} required>
          <option value="">Select Blood Type</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <input
          type="text"
          name="allergies"
          placeholder="Allergies (if any)"
          value={formData.allergies}
          onChange={handleChange}
        />
        <input
          type="text"
          name="medicalConditions"
          placeholder="Medical Conditions (if any)"
          value={formData.medicalConditions}
          onChange={handleChange}
        />
        <input
          type="text"
          name="emergencyContact"
          placeholder="Emergency Contact"
          value={formData.emergencyContact}
          onChange={handleChange}
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default MedicalForm;
