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



  return <div>PostDetailPage</div>;
};

export default PostDetailPage;
