import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const PostDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const postData = await response.json();
        setPost(postData);
      } catch (error) {
        console.log("Error fetching post:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        );
        const commentsData = await response.json();
        setComments(commentsData);
      } catch (error) {
        console.log("Error fetching comments:", error);
      }
    };

    if (id) {
      fetchPost();
      fetchComments();
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg mb-4">{post.body}</p>

      <h2 className="text-2xl font-semibold mb-2">Comments</h2>
      <div className="grid grid-cols-1 gap-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">{comment.name}</h3>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetailPage;
