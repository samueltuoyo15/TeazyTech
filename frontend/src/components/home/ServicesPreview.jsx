import { Link } from "react-router-dom";

const ServicesPreview = () => {
    return (
        <section className="section services-preview">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Our Services</h2>
                    <p>
                        Comprehensive solutions to enhance your teaching with
                        technology
                    </p>
                </div>
                <div className="services-preview-grid">
                    <div className="service-card">
                        <img
                            src="/images/Gallery Ibadan Training/IMG_7742.jpg"
                            alt="Professional Development"
                        />
                        <h3>Professional Development</h3>
                        <p>
                            Customized training programs for educators at all
                            technology proficiency levels
                        </p>
                        <Link to="/services" className="service-link">
                            Learn More <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                    <div className="service-card">
                        <img
                            src="/images/Gallery Ibadan Training/IMG_7713.jpg"
                            alt="Technology Integration"
                        />
                        <h3>Technology Integration</h3>
                        <p>
                            Strategies for seamlessly incorporating technology
                            into your curriculum
                        </p>
                        <Link to="/services" className="service-link">
                            Learn More <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                    <div className="service-card">
                        <img
                            src="/images/Gallery Ibadan Training/IMG_7741.jpg"
                            alt="Digital Content Creation"
                        />
                        <h3>Instructional Content Design</h3>
                        <p>
                            Tools and techniques for creating engaging digital
                            learning materials
                        </p>
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
    );
};

export default ServicesPreview;
