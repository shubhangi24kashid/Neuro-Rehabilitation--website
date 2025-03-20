// src/components/LogoutButton.js
import { useAuth } from "../context/AuthContext";

const LogoutButton = () => {
  const { logout } = useAuth();
  return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;
