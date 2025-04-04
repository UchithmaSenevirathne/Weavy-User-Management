import { useState } from "react";
import api from "../api";

const DeleteUser = () => {
  const [uid, setUid] = useState("");

  const handleDelete = async () => {
    if (!uid) {
      alert("Please enter a UID to delete.");
      return;
    }
    try {
      await api.delete(`/${uid}`);
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user.");
    }
  };

  return (
    <div>
      <input type="text" placeholder="Enter UID" onChange={(e) => setUid(e.target.value)} />
      <button onClick={handleDelete}>Delete User</button>
    </div>
  );
};

export default DeleteUser;
