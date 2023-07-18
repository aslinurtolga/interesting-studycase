import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

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

  const handlePostClick = (postId) => {
    router.push(`/post/${postId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="flex justify-center text-4xl font-bold text-blue-500 mb-4">
        Posts
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => handlePostClick(post.id)}
          >
            <h2 className="text-2xl font-semibold text-blue-800">
              {post.title}
            </h2>
            <p className="text-[#A76F6F]">{post.body}</p>
            <p className="text-blue-500 underline">View Details</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
