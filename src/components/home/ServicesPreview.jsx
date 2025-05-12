import { Link } from "react-router-dom"

const ServicesPreview = () => {
  return (
    <section className="section services-preview">
      <div className="container">
        <div className="section-header text-center">
          <h2>Our Services</h2>
          <p>Comprehensive solutions to enhance your teaching with technology</p>
        </div>
        <div className="services-preview-grid">
          <div className="service-card">
            <img 
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Professional Development" 
            />
            <h3>Professional Development</h3>
            <p>Customized training programs for educators at all technology proficiency levels</p>
            <Link to="/services" className="service-link">
              Learn More <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="service-card">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Technology Integration" 
            />
            <h3>Technology Integration</h3>
            <p>Strategies for seamlessly incorporating technology into your curriculum</p>
            <Link to="/services" className="service-link">
              Learn More <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="service-card">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Digital Content Creation" 
            />
            <h3>Digital Content Creation</h3>
            <p>Tools and techniques for creating engaging digital learning materials</p>
            <Link to="/services" className="service-link">
              Learn More <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="services-preview-cta text-center">
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview 