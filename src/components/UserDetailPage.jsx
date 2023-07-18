import React, { useEffect, useState } from "react";
import Image from "next/image";

const UserDetailPage = ({ userId }) => {
  // Define states to monitor albums and upload status
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the function that brings the albums
    const fetchAlbums = async () => {
      try {
        // fetch albums from API
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
        );
        const albumData = await response.json();
        // Sets albums to state and updates the upload status
        setAlbums(albumData);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching albums: ", error);
      }
    };
    // using the useEffect hook, the fetchAlbums function is executed when the component is loaded
  });

  return <div>UserDetailPage</div>;
};

export default UserDetailPage;
