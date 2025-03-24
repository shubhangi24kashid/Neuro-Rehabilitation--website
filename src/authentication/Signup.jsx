import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase"; // Import Firestore database
import { doc, setDoc } from "firebase/firestore"; // Firestore functions
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css"; // Ensure CSS file exists

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to handle signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // Reset errors before signup attempt

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // Firebase user object

      // Store user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email, // Store user email
        uid: user.uid, // Store UID
        createdAt: new Date() // Store account creation time
      });

      // Redirect to medical form page after signup
      navigate("/medical-form");
    } catch (error) {
      setError(error.message || "Failed to create an account. Try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Signup</h2>
        {error && <p className="error-message">{error}</p>}
        
        <form onSubmit={handleSignup} className="signup-form">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-button">Signup</button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <a href="/login" className="login-link">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
