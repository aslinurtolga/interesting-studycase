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
        console.log(response); // İsteğin yanıtını kontrol etmek için
        const albumData = await response.json();
        console.log(albumData); // Alınan veriyi kontrol etmek için
        // Sets albums to state and updates the upload status
        setAlbums(albumData);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching albums: ", error);
      }
    };
    // using the useEffect hook, the fetchAlbums function is executed when the component is loaded
    fetchAlbums();
  }, [userId]);

  // checking the loading status, if loading, the message "Loading..." is displayed
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">User Albums</h1>
      {albums.map((album) => (
        <div key={album.id} className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">{album.title}</h3>
          <div className="grid grid-cols-4 gap-4">
            {album.photos.map((photo) => (
              <div key={photo.id} className="rounded-lg overflow-hidden">
                <Image
                  src={photo.url}
                  alt={photo.title}
                  width={200}
                  height={200}
                />
                <p className="text-center mt-2">{photo.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserDetailPage;
