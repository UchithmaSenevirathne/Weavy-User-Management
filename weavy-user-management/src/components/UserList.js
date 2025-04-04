import { useEffect, useState } from "react";
import api from "../api";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.uid}>
          {user.name} ({user.email}) - {user.nickname}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
