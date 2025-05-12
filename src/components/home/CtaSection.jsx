import { Link } from "react-router-dom"

const CtaSection = () => {
  return (
    <section className="section cta">
      <div className="container">
        <div className="cta-content text-center">
          <h2>Ready to Transform Your Teaching?</h2>
          <p>
            Join thousands of educators who are enhancing their teaching methods with Teazy Tech's resources and
            services.
          </p>
          <div className="cta-buttons">
            <Link to="/services" className="btn btn-accent">
              Get Started Today
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection 