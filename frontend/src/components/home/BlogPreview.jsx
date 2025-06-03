import { Link } from "react-router-dom"

const BlogPreview = () => {
  return (
    <section className="section blog-preview">
      <div className="container">
        <div className="section-header text-center">
          <h2>Latest from Our Blog</h2>
          <p>Insights and tips for educational technology</p>
        </div>
        <div className="blog-preview-grid">
          <div className="blog-card">
            <div className="blog-card-image">
              <img 
                src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" 
                alt="Blog post" 
              />
            </div>
            <div className="blog-card-content">
              <div className="blog-card-date">June 15, 2023</div>
              <h3>10 Essential EdTech Tools Every Teacher Should Know</h3>
              <p>Discover the must-have technology tools that can transform your classroom experience...</p>
              <Link to="/blog" className="blog-card-link">
                Read More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="blog-preview-cta text-center">
          <Link to="/blog" className="btn btn-primary">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview 