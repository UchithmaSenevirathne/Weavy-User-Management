import { useState } from "react";
import api from "../api";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    uid: "",
    name: "",
    given_name: "",
    middle_name: "",
    family_name: "",
    nickname: "",
    email: "",
    phone_number: "",
    comment: "",
    picture: "",
    directory: "",
    metadata: {},
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/", formData);
      alert("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="uid" placeholder="UID (required)" onChange={handleChange} required />
      <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
      <input type="text" name="given_name" placeholder="Given Name" onChange={handleChange} />
      <input type="text" name="middle_name" placeholder="Middle Name" onChange={handleChange} />
      <input type="text" name="family_name" placeholder="Family Name" onChange={handleChange} />
      <input type="text" name="nickname" placeholder="Nickname" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="text" name="phone_number" placeholder="Phone Number" onChange={handleChange} />
      <input type="text" name="comment" placeholder="Comment" onChange={handleChange} />
      <input type="text" name="picture" placeholder="Profile Picture URL" onChange={handleChange} />
      <input type="text" name="directory" placeholder="Directory" onChange={handleChange} />
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUser;
