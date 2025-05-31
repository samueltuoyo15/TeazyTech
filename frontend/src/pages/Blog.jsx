import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import "../styles/Blog.css"

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([])
  const [categories, setCategories] = useState(["All Categories"])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPostsAndCategories = async () => {
      try {
        const postsResponse = await axios.get(`${import.meta.env.VITE_BACKEND_DOMAIN}/api/admin/posts`)
        const publishedPosts = postsResponse.data.filter(post => post.status === "published")
        
        const uniqueCategories = ["All Categories", ...new Set(publishedPosts.map(post => post.category))]
        
        setBlogPosts(publishedPosts)
        setCategories(uniqueCategories)
      } catch (err) {
        console.error("Error fetching data:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchPostsAndCategories()
  }, [])

  const trackPostView = async (postId, e) => {
    e.preventDefault()
    
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_DOMAIN}/api/posts/${postId}/view`)
      navigate(`/blog/${postId}`)
    } catch (error) {
      console.error("Error tracking view:", error)
      navigate(`/blog/${postId}`)
    }
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const handleSearch = (e) => {
    e.preventDefault()
   console.log("Searching for:", searchQuery)
  }

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const recentPosts = blogPosts.slice(0, 3)

  if (loading) {
    return (
      <div className="blog-page">
        <section className="blog-hero">
          <div className="container">
            <div className="blog-hero-content">
              <h1>Loading Blog...</h1>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <h1>Blog</h1>
            <p>Insights, tips, and resources for educational technology</p>
          </div>
        </div>
      </section>

      <section className="section blog-content">
        <div className="container">
          <div className="blog-layout">
            <div className="blog-main">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <div key={post.id} className="blog-post-card">
                    <div className="blog-post-image">
                      <img src={post.thumbnail} alt={post.title} />
                      <div className="blog-post-category">{post.category}</div>
                    </div>
                    <div className="blog-post-content">
                      <div className="blog-post-meta">
                        <span className="blog-post-date">{post.published_date}</span>
                        <span className="blog-post-author">By Admin</span>
                        <span className="blog-post-views">{post.views || 0} views</span>
                      </div>
                      <h2>{post.title}</h2>
                      <p>{post.excerpt}</p>
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="blog-post-link"
                        onClick={(e) => trackPostView(post.id, e)}
                      >
                        Read More <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-posts">
                  <h3>No posts found</h3>
                  <p>Try adjusting your search or category filter</p>
                </div>
              )}

              {filteredPosts.length > 0 && (
                <div className="blog-pagination">
                  <button className="pagination-btn active">1</button>
                  <button className="pagination-btn">2</button>
                  <button className="pagination-btn">3</button>
                  <button className="pagination-btn pagination-next">
                    Next <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              )}
            </div>

            <div className="blog-sidebar">
              <div className="sidebar-widget search-widget">
                <h3>Search</h3>
                <form className="search-form" onSubmit={handleSearch}>
                  <input 
                    type="text" 
                    placeholder="Search blog posts..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>

              <div className="sidebar-widget categories-widget">
                <h3>Categories</h3>
                <ul className="category-list">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className={category === selectedCategory ? "active" : ""}
                        onClick={(e) => {
                          e.preventDefault()
                          handleCategoryChange(category)
                        }}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {recentPosts.length > 0 && (
                <div className="sidebar-widget recent-posts-widget">
                  <h3>Recent Posts</h3>
                  <div className="recent-posts">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="recent-post">
                        <div className="recent-post-image">
                          <img src={post.thumbnail} alt={post.title} />
                        </div>
                        <div className="recent-post-content">
                          <h4>
                            <Link to={`/blog/${post.id}`} onClick={(e) => trackPostView(post.id, e)}>
                              {post.title}
                            </Link>
                          </h4>
                          <div className="recent-post-date">{post.published_date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="sidebar-widget subscribe-widget">
                <h3>Subscribe</h3>
                <p>Get the latest educational technology updates directly to your inbox.</p>
                <form className="subscribe-form">
                  <input type="email" placeholder="Your email address" required />
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
            <h2>Want to Contribute?</h2>
            <p>
              Share your educational technology expertise with our community. We welcome guest posts from educators and
              technology specialists.
            </p>
            <a href="/contact" className="btn btn-accent">
              Submit a Guest Post
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog