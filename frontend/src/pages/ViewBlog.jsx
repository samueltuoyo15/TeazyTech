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
        try {
          await axios.post(`${import.meta.env.VITE_BACKEND_DOMAIN}/api/posts/${id}/view`);
        } catch (viewError) {
          console.error("View tracking failed:", viewError);
       }

        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_DOMAIN}/api/admin/posts/${id}`
        );

        if (response.data.status !== "published") {
          throw new Error("Post not found or not published");
        }
        
        setPost(response.data);
      } catch (err) {
        console.error("Error:", err);
        setError(err.message || "An error occurred while loading the post");
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
              <h1>Error</h1>
              <p>{error}</p>
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
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <h1>{post.title}</h1>
            <div className="blog-post-meta">
              <span className="blog-post-date">{post.published_date}</span>
              <span className="blog-post-author">By Admin</span>
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
                <div className="single-post-image">
                  <img src={post.thumbnail} alt={post.title} />
                  <div className="blog-post-category">{post.category}</div>
                </div>
                
                <div className="single-post-content">
                  <h2>{post.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                <div className="post-tags">
                  {post.tags &&
                    post.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                </div>
              </article>
            </div>

            <div className="blog-sidebar">
              <div className="sidebar-widget categories-widget">
                <h3>Categories</h3>
                <ul className="category-list">
                  <li>
                    <a href="#">{post.category}</a>
                  </li>
                </ul>
              </div>

              <div className="sidebar-widget subscribe-widget">
                <h3>Subscribe</h3>
                <p>
                  Get the latest educational technology updates directly to your
                  inbox.
                </p>
                <form className="subscribe-form">
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
            <p>Explore more insights and tips in our blog collection.</p>
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