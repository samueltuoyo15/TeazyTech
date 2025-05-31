import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ViewBlog = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // View tracking (removed for simplicity)
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_DOMAIN}/api/admin/posts/${id}`,
          {
            headers: { "Content-Type": "application/json" }
          }
        );

        if (!response.data || response.data.status !== "published") {
          throw new Error("Post not available");
        }
        
        setPost(response.data);
      } catch (err) {
        setError(err.message || "Failed to load post");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  // SIMPLEST POSSIBLE RENDER - JUST THE TITLE
  return (
    <div style={{
      padding: '20px',
      backgroundColor: 'white',
      color: 'black',
      fontSize: '24px'
    }}>
      <p>TEST RENDER - POST TITLE: {post.title || 'No Title'}</p>
    </div>
  );
};

export default ViewBlog;