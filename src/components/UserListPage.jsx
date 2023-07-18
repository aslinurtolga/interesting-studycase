import React, { useEffect, useState } from "react";

const UserListPage = () => {
  // state definitions
  const [user, setUsers] = useState([]);
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


  return <div>UserListPage</div>;
};

export default UserListPage;
