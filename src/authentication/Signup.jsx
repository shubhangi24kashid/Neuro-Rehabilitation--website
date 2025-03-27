import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, doc, setDoc } from "../authentication/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user info in Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        hasCompletedForms: false, // Mark user as a first-time user
      });

      // Update localStorage
      localStorage.setItem("user", JSON.stringify({ isAuthenticated: true, hasCompletedForms: false }));

      // Redirect to Medical Form
      navigate("/medical-form");
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Signup failed!");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
