import { Link } from "react-router-dom"
import "../styles/Blog.css"

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential EdTech Tools Every Teacher Should Know",
      excerpt:
        "Discover the must-have technology tools that can transform your classroom experience and engage students in new ways.",
      image: "/images/blog1.png",
      category: "Tools",
      date: "June 15, 2023",
      author: "Sarah Williams",
      authorRole: "Educational Technology Specialist",
    },
    {
      id: 2,
      title: "How to Create Engaging Virtual Lessons",
      excerpt:
        "Learn strategies for designing online lessons that keep students motivated and engaged throughout the learning process.",
      image: "/images/blog2.png",
      category: "Teaching Strategies",
      date: "May 28, 2023",
      author: "James Chen",
      authorRole: "Chief Technology Officer",
    },
    {
      id: 3,
      title: "Accessibility in EdTech: Making Learning Inclusive",
      excerpt:
        "Explore how to ensure your digital teaching materials are accessible to all students, regardless of their abilities.",
      image: "/images/blog3.png",
      category: "Accessibility",
      date: "May 10, 2023",
      author: "Maria Rodriguez",
      authorRole: "Head of Curriculum",
    },
    {
      id: 4,
      title: "The Future of AI in Education",
      excerpt:
        "Discover how artificial intelligence is reshaping education and what teachers need to know to stay ahead of the curve.",
      image: "/images/blog4.png",
      category: "Trends",
      date: "April 22, 2023",
      author: "David Okafor",
      authorRole: "Professional Development Director",
    },
    {
      id: 5,
      title: "Building Digital Literacy in Elementary Students",
      excerpt:
        "Practical strategies for introducing technology skills to young learners in meaningful and age-appropriate ways.",
      image: "/images/blog5.png",
      category: "Digital Literacy",
      date: "April 5, 2023",
      author: "Jennifer Martinez",
      authorRole: "Elementary Education Specialist",
    },
    {
      id: 6,
      title: "Balancing Screen Time in the Digital Classroom",
      excerpt: "How to effectively integrate technology while maintaining a healthy balance for student wellbeing.",
      image: "/images/blog6.png",
      category: "Wellbeing",
      date: "March 18, 2023",
      author: "Michael Johnson",
      authorRole: "Educational Psychologist",
    },
  ]

  const categories = [
    "All Categories",
    "Tools",
    "Teaching Strategies",
    "Accessibility",
    "Trends",
    "Digital Literacy",
    "Wellbeing",
  ]

  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <h1>Blog</h1>
            <p>Insights, tips, and resources for educational technology</p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section blog-content">
        <div className="container">
          <div className="blog-layout">
            {/* Main Content */}
            <div className="blog-main">
              {blogPosts.map((post) => (
                <div key={post.id} className="blog-post-card">
                  <div className="blog-post-image">
                    <img 
                      src={post.id === 1 ? "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" : 
                           post.id === 2 ? "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" :
                           post.id === 3 ? "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" :
                           post.id === 4 ? "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80" :
                           post.id === 5 ? "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" :
                           "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} 
                      alt={post.title} 
                    />
                    <div className="blog-post-category">{post.category}</div>
                  </div>
                  <div className="blog-post-content">
                    <div className="blog-post-meta">
                      <span className="blog-post-date">{post.date}</span>
                      <span className="blog-post-author">By {post.author}</span>
                    </div>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`} className="blog-post-link">
                      Read More <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="blog-pagination">
                <button className="pagination-btn active">1</button>
                <button className="pagination-btn">2</button>
                <button className="pagination-btn">3</button>
                <button className="pagination-btn pagination-next">
                  Next <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="blog-sidebar">
              {/* Search */}
              <div className="sidebar-widget search-widget">
                <h3>Search</h3>
                <div className="search-form">
                  <input type="text" placeholder="Search blog posts..." />
                  <button type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="sidebar-widget categories-widget">
                <h3>Categories</h3>
                <ul className="category-list">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#" className={index === 0 ? "active" : ""}>
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="sidebar-widget recent-posts-widget">
                <h3>Recent Posts</h3>
                <div className="recent-posts">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="recent-post">
                      <div className="recent-post-image">
                        <img 
                          src={post.id === 1 ? "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" : 
                               post.id === 2 ? "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" :
                               "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} 
                          alt={post.title} 
                        />
                      </div>
                      <div className="recent-post-content">
                        <h4>
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h4>
                        <div className="recent-post-date">{post.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subscribe */}
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

      {/* CTA Section */}
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
