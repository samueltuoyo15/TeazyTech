import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Blog.css";

const ViewBlog = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.post(
          `${import.meta.env.VITE_BACKEND_DOMAIN}/api/posts/${id}/view`,
          {}, 
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true
          }
        ).catch(e => console.warn("View tracking failed:", e.message));

        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_DOMAIN}/api/admin/posts/${id}`,
          {
            headers: { "Content-Type": "application/json" }
          }
        );

        if (!response.data) {
          throw new Error("Post data missing");
        }

        if (response.data.status !== "published") {
          throw new Error("Post not published");
        }
        
        setPost({
          title: response.data.title || "Untitled Post",
          content: response.data.content || "<p>Content not available</p>",
          thumbnail: response.data.thumbnail || "",
          published_date: response.data.published_date || new Date().toISOString(),
          category: response.data.category || "Uncategorized",
          views: response.data.views || 0
        });
      } catch (err) {
        setError(err.response?.data?.message || err.message || "Failed to load post");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="blog-page">
        <section className="blog-hero">
          <div className="container">
            <div className="blog-hero-content">
              <h1>Loading Post...</h1>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-page">
        <section className="blog-hero">
          <div className="container">
            <div className="blog-hero-content">
              <h1>Error Loading Post</h1>
              <p>{error}</p>
              <button 
                className="btn btn-accent"
                onClick={() => window.location.reload()}
              >
                Try Again
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-page">
        <section className="blog-hero">
          <div className="container">
            <div className="blog-hero-content">
              <h1>Post Not Found</h1>
              <p>The requested blog post could not be found.</p>
              <a href="/blog" className="btn btn-accent">
                Back to Blog
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Safely parse HTML content
  const createMarkup = (html) => {
    try {
      return { __html: html || "" };
    } catch (e) {
      console.error("Error parsing HTML content:", e);
      return { __html: "<p>Error displaying content</p>" };
    }
  };

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <h1>{post.title || "Untitled Post"}</h1>
            <div className="blog-post-meta">
              <span className="blog-post-date">
                {post.published_date ? new Date(post.published_date).toLocaleDateString() : "No date"}
              </span>
              <span className="blog-post-category">{post.category || "Uncategorized"}</span>
              <span className="blog-post-views">{post.views || 0} views</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section blog-content">
        <div className="container">
          <div className="blog-layout">
            <div className="blog-main">
              <article className="single-blog-post">
                {(post.thumbnail || "").trim() && (
                  <div className="single-post-image">
                    <img 
                      src={post.thumbnail} 
                      alt={post.title || ""}
                      onError={(e) => {
                        e.target.src = '/placeholder-image.jpg';
                        e.target.style.display = 'block';
                      }}
                    />
                    <div className="blog-post-category">{post.category || ""}</div>
                  </div>
                )}
                
                <div className="single-post-content">
                  <div dangerouslySetInnerHTML={createMarkup(post.content)} />
                </div>
              </article>
            </div>

            <div className="blog-sidebar">
              <div className="sidebar-widget categories-widget">
                <h3>Categories</h3>
                <ul className="category-list">
                  <li>
                    <a href={`/blog?category=${encodeURIComponent(post.category || "")}`}>
                      {post.category || "Uncategorized"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section blog-cta">
        <div className="container">
          <div className="blog-cta-content text-center">
            <a href="/blog" className="btn btn-accent">
              Back to Blog
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewBlog;