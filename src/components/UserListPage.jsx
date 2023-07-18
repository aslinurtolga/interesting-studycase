import React, { useEffect, useState } from "react";

const UserListPage = () => {
  // state definitions
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // function that brings users
    const getUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const userData = await response.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };
    // calling the fetch users function
    getUsers();
  }, []);

  if (loading) {
    // if it is in the loading state
    return <div>Loading...</div>;
  }

  // if users are loaded

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="flex justify-center text-4xl font-bold text-blue-500 mb-4">
        Users
      </h1>
      {users.map((user) => (
        <div
          key={user.id}
          className="mb-4 bg-gray-100 p-4 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-semibold text-purple-700">
            {user.name}
          </h3>
          <p className="text-pink-800">Email: {user.email}</p>
          <p className="text-green-500">City: {user.address.city}</p>
        </div>
      ))}
    </div>
  );
};

export default UserListPage;
