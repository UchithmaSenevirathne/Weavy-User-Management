import { useState } from "react";
import api from "../api";

const UpdateUser = () => {
  const [formData, setFormData] = useState({
    uid: "",
    name: "",
    email: "",
    nickname: "",
    phone_number: "",
    picture: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!formData.uid) {
      alert("User UID is required to update details.");
      return;
    }
    try {
      await api.put(`/${formData.uid}`, formData);
      alert("User updated successfully!");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user.");
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <input type="text" name="uid" placeholder="UID (Required)" onChange={handleChange} required />
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="text" name="nickname" placeholder="Nickname" onChange={handleChange} />
      <input type="text" name="phone_number" placeholder="Phone Number" onChange={handleChange} />
      <input type="text" name="picture" placeholder="Profile Picture URL" onChange={handleChange} />
      <button type="submit">Update User</button>
    </form>
  );
};

export default UpdateUser;
