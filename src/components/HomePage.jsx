import Link from "next/link";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Posts</h1>
      <div className="grid grid-cols-1 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-800">
              {post.title}
            </h2>
            <p className="text-[#A76F6F]">{post.body}</p>
            <Link href={`/post/${post.id}`}>
              <a>View Details</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
