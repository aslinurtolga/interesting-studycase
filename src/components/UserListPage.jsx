import React, { useEffect, useState } from "react";
import UserDetailPage from "./UserDetailPage";

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const userData = await response.json();
        setUsers(userData);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="flex justify-center text-4xl font-bold mb-8">Users</h1>
      <div className="grid grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => handleUserClick(user.id)}
          >
            <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
            <p className="text-purple-700">Email: {user.email}</p>
            <p className="text-green-500">City: {user.address.city}</p>
          </div>
        ))}
      </div>

      {selectedUserId && <UserDetailPage userId={selectedUserId} />}
    </div>
  );
};

export default UserListPage;
