import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Blog.css";

const ViewBlog = () => {
  console.log("[ViewBlog] Component mounting");
  const { id } = useParams();
  console.log("[ViewBlog] Post ID from URL:", id);

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("[useEffect] Starting data fetch");
    const fetchData = async () => {
      try {
        console.log("[fetchData] Attempting view tracking");
        try {
          const viewResponse = await axios.post(
            `${import.meta.env.VITE_BACKEND_DOMAIN}/api/posts/${id}/view`,
            {}, 
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: true
            }
          );
          console.log("[fetchData] View tracking success:", viewResponse.data);
        } catch (viewError) {
          console.warn("[fetchData] View tracking failed:", {
            status: viewError.response?.status,
            message: viewError.message,
            config: viewError.config
          });
        }

        console.log("[fetchData] Fetching post data");
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_DOMAIN}/api/admin/posts/${id}`,
          {
            timeout: 5000,
            headers: { "Content-Type": "application/json" }
          }
        );
        console.log("[fetchData] Post data response:", response.data);

        if (!response.data) {
          console.error("[fetchData] Empty response data");
          throw new Error("Post data missing");
        }

        if (response.data.status !== "published") {
          console.error("[fetchData] Post not published:", response.data.status);
          throw new Error("Post not available");
        }
        
        console.log("[fetchData] Setting post data");
        setPost({
          title: response.data.title || "Untitled Post",
          published_date: response.data.published_date || "",
          views: response.data.views || 0,
          thumbnail: response.data.thumbnail || "/placeholder-image.jpg",
          category: response.data.category || "Uncategorized",
          content: response.data.content || "<p>Content not available</p>"
        });
      } catch (err) {
        console.error("[fetchData] Error loading post:", {
          message: err.message,
          response: err.response?.data,
          stack: err.stack
        });
        setError(err.response?.data?.message || err.message || "Failed to load post");
      } finally {
        console.log("[fetchData] Finished loading attempt");
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      console.log("[useEffect] Cleanup");
    };
  }, [id]);

  console.log("[ViewBlog] Current state:", { loading, error, post });

  if (loading) {
    console.log("[ViewBlog] Rendering loading state");
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
    console.log("[ViewBlog] Rendering error state:", error);
    return (
      <div className="blog-page">
        <section className="blog-hero">
          <div className="container">
            <div className="blog-hero-content">
              <h1>Error Loading Post</h1>
              <p>{error}</p>
              <button 
                className="btn btn-accent"
                onClick={() => {
                  console.log("[ViewBlog] Reload button clicked");
                  window.location.reload();
                }}
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
    console.log("[ViewBlog] Rendering post not found state");
    return (
      <div className="blog-page">
        <section className="blog-hero">
          <div className="container">
            <div className="blog-hero-content">
              <h1>Post Not Found</h1>
              <p>The requested blog post could not be found.</p>
              <a 
                href="/blog" 
                className="btn btn-accent"
                onClick={() => console.log("[ViewBlog] Back to Blog clicked")}
              >
                Back to Blog
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  console.log("[ViewBlog] Rendering post:", post);
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <h1>{post.title}</h1>
            <div className="blog-post-meta">
              <span className="blog-post-date">{post.published_date}</span>
              <span className="blog-post-author">By Teazy</span>
              <span className="blog-post-views">{post.views} views</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section blog-content">
        <div className="container">
          <div className="blog-layout">
            <div className="blog-main">
              <article className="single-blog-post">
                <div className="single-post-image">
                  <img 
                    src={post.thumbnail} 
                    alt={post.title}
                    onError={(e) => {
                      console.warn("[ViewBlog] Image load failed, using fallback");
                      e.target.src = '/placeholder-image.jpg';
                    }}
                  />
                  <div className="blog-post-category">{post.category}</div>
                </div>
                
                <div className="single-post-content">
                  <h2>{post.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
              </article>
            </div>

            <div className="blog-sidebar">
              <div className="sidebar-widget categories-widget">
                <h3>Categories</h3>
                <ul className="category-list">
                  <li>
                    <a 
                      href={`/blog?category=${encodeURIComponent(post.category)}`}
                      onClick={() => console.log("[ViewBlog] Category link clicked")}
                    >
                      {post.category}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="sidebar-widget subscribe-widget">
                <h3>Subscribe</h3>
                <p>Get updates directly to your inbox</p>
                <form 
                  className="subscribe-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log("[ViewBlog] Subscribe form submitted");
                  }}
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section blog-cta">
        <div className="container">
          <div className="blog-cta-content text-center">
            <h2>Enjoyed This Article?</h2>
            <p>Explore more insights in our blog collection</p>
            <a 
              href="/blog" 
              className="btn btn-accent"
              onClick={() => console.log("[ViewBlog] Back to Blog CTA clicked")}
            >
              Back to Blog
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewBlog;