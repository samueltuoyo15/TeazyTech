import { Link } from "react-router-dom"
import "../styles/Services.css"

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Our Services</h1>
            <p>Comprehensive solutions to enhance your teaching with technology</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-overview">
        <div className="container">
          <div className="services-overview-content">
            <div className="services-overview-text">
              <h2>How We Help Educators</h2>
              <p>
                At Teazy Tech, we offer a range of services designed to meet the needs of educators at all technology
                proficiency levels. Whether you're just starting your educational technology journey or looking to
                enhance your existing digital teaching methods, we have solutions tailored for you.
              </p>
              <p>
                Our approach focuses on practical, implementable strategies that address real classroom challenges and
                enhance the teaching and learning experience.
              </p>
            </div>
            <div className="services-overview-image">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Teachers in a workshop" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section main-services">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Core Services</h2>
            <p>Comprehensive solutions to enhance your teaching with technology</p>
          </div>

          <div className="service-item">
            <div className="service-item-content">
              <div className="service-item-text">
                <div className="service-icon" style={{ backgroundColor: "rgba(47, 111, 204, 0.1)" }}>
                  <i className="fas fa-chalkboard-teacher" style={{ color: "var(--primary-blue)" }}></i>
                </div>
                <h3>Professional Development</h3>
                <p>
                  Our professional development programs are designed to meet educators where they are in their
                  technology journey. From introductory workshops to advanced masterclasses, we provide hands-on
                  training that builds confidence and competence in using educational technology.
                </p>
                <ul className="service-features">
                  <li>Customized training programs for schools and districts</li>
                  <li>Hands-on workshops with practical classroom applications</li>
                  <li>Ongoing support and follow-up coaching</li>
                  <li>Both in-person and virtual options available</li>
                </ul>
                <Link to="/services/professional-development" className="btn btn-primary">
                  Learn More
                </Link>
              </div>
              <div className="service-item-image">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Professional Development" 
                />
              </div>
            </div>
          </div>

          <div className="service-item reverse">
            <div className="service-item-content">
              <div className="service-item-text">
                <div className="service-icon" style={{ backgroundColor: "rgba(68, 187, 164, 0.1)" }}>
                  <i className="fas fa-laptop-code" style={{ color: "var(--secondary-teal)" }}></i>
                </div>
                <h3>Technology Integration</h3>
                <p>
                  We help educators seamlessly integrate technology into their curriculum in ways that enhance learning
                  outcomes. Our approach focuses on using technology as a tool to support pedagogical goals, not as an
                  end in itself.
                </p>
                <ul className="service-features">
                  <li>Curriculum mapping for technology integration</li>
                  <li>Tool selection guidance based on learning objectives</li>
                  <li>Development of blended and hybrid learning models</li>
                  <li>Assessment strategies for technology-enhanced learning</li>
                </ul>
                <Link to="/services/technology-integration" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
              <div className="service-item-image">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Technology Integration" 
                />
              </div>
            </div>
          </div>

          <div className="service-item">
            <div className="service-item-content">
              <div className="service-item-text">
                <div className="service-icon" style={{ backgroundColor: "rgba(233, 79, 55, 0.1)" }}>
                  <i className="fas fa-pencil-ruler" style={{ color: "var(--secondary-red)" }}></i>
                </div>
                <h3>Digital Content Creation</h3>
                <p>
                  Create engaging, interactive digital learning materials that captivate students and enhance
                  comprehension. Our content creation services help you develop materials that align with your
                  curriculum goals while leveraging the power of multimedia.
                </p>
                <ul className="service-features">
                  <li>Interactive lesson design and development</li>
                  <li>Video production for instructional content</li>
                  <li>Creation of digital assessments and activities</li>
                  <li>Accessibility compliance for all digital materials</li>
                </ul>
                <Link to="/services/content-creation" className="btn btn-accent">
                  Learn More
                </Link>
              </div>
              <div className="service-item-image">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Digital Content Creation" 
                />
              </div>
            </div>
          </div>

          <div className="service-item reverse">
            <div className="service-item-content">
              <div className="service-item-text">
                <div className="service-icon" style={{ backgroundColor: "rgba(35, 52, 99, 0.1)" }}>
                  <i className="fas fa-users-cog" style={{ color: "var(--primary-dark-blue)" }}></i>
                </div>
                <h3>Strategic Planning</h3>
                <p>
                  Develop a comprehensive educational technology strategy for your school or district. Our strategic
                  planning services help administrators make informed decisions about technology investments,
                  implementation timelines, and professional development needs.
                </p>
                <ul className="service-features">
                  <li>Technology needs assessment and gap analysis</li>
                  <li>Development of multi-year technology plans</li>
                  <li>Budget planning and resource allocation guidance</li>
                  <li>Evaluation frameworks for measuring impact</li>
                </ul>
                <Link to="/services/strategic-planning" className="btn btn-primary">
                  Learn More
                </Link>
              </div>
              <div className="service-item-image">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                  alt="Strategic Planning" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section services-testimonials">
        <div className="container">
          <div className="section-header text-center">
            <h2>What Our Clients Say</h2>
            <p>Feedback from educators who have transformed their teaching with our services</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "The professional development workshops from Teazy Tech completely transformed how our teachers
                  approach technology. The hands-on, practical approach meant that everyone left with skills they could
                  immediately implement in their classrooms."
                </p>
              </div>
              <div className="testimonial-author">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Principal" 
                />
                <div>
                  <h4>Dr. Robert Chen</h4>
                  <p>Principal, Westlake High School</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "The strategic planning service helped our district make informed decisions about our technology
                  investments. The Teazy Tech team took the time to understand our unique needs and developed a plan
                  that aligned perfectly with our educational goals."
                </p>
              </div>
              <div className="testimonial-author">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" 
                  alt="Superintendent" 
                />
                <div>
                  <h4>Jennifer Martinez</h4>
                  <p>Superintendent, Oakridge School District</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "As a teacher who was intimidated by technology, I found the content creation services invaluable. Not
                  only did they create amazing digital lessons for my science class, but they taught me how to make my
                  own going forward."
                </p>
              </div>
              <div className="testimonial-author">
                <img 
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Teacher" 
                />
                <div>
                  <h4>Michael Johnson</h4>
                  <p>Science Teacher, Riverdale Middle School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section services-process">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Process</h2>
            <p>How we work with you to implement educational technology solutions</p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="process-number">1</div>
              <div className="process-content">
                <h3>Assessment</h3>
                <p>
                  We begin by understanding your current technology landscape, teaching goals, and specific challenges
                  through surveys, interviews, and observations.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-number">2</div>
              <div className="process-content">
                <h3>Planning</h3>
                <p>
                  Based on the assessment, we develop a customized plan that addresses your specific needs, timeline,
                  and budget constraints.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-number">3</div>
              <div className="process-content">
                <h3>Implementation</h3>
                <p>
                  We deliver the agreed-upon services, whether that's training, content creation, or strategic planning,
                  with a focus on practical application.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-number">4</div>
              <div className="process-content">
                <h3>Support</h3>
                <p>
                  Our relationship doesn't end with delivery. We provide ongoing support to ensure successful adoption
                  and address any challenges that arise.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-number">5</div>
              <div className="process-content">
                <h3>Evaluation</h3>
                <p>
                  We help you measure the impact of the implemented solutions and make adjustments as needed to ensure
                  optimal results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section services-faq">
        <div className="container">
          <div className="section-header text-center">
            <h2>Frequently Asked Questions</h2>
            <p>Answers to common questions about our services</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>How are your services priced?</h3>
              <p>
                Our services are priced based on scope, duration, and specific requirements. We offer standard packages
                as well as custom solutions. Contact us for a detailed quote based on your needs.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you offer virtual services?</h3>
              <p>
                Yes, all of our services can be delivered virtually. We use interactive online platforms to ensure
                engaging and effective remote delivery of workshops, coaching, and consultations.
              </p>
            </div>

            <div className="faq-item">
              <h3>How long does implementation typically take?</h3>
              <p>
                Implementation timelines vary based on the scope of services. A basic workshop can be completed in a
                day, while comprehensive strategic planning might span several months. We'll provide a detailed timeline
                during the planning phase.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can you work with our existing technology?</h3>
              <p>
                Absolutely. We specialize in helping educators maximize the technology they already have. Our approach
                focuses on practical applications of available tools before recommending new investments.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you offer services for specific subject areas?</h3>
              <p>
                Yes, we can tailor our services to specific subject areas. We have specialists in STEM, humanities,
                languages, and arts who understand the unique technology needs of each discipline.
              </p>
            </div>

            <div className="faq-item">
              <h3>What if we need ongoing support?</h3>
              <p>
                We offer various support options, from email assistance to regular coaching sessions. Many clients opt
                for a maintenance plan that provides continuous support and regular check-ins to ensure successful
                implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section services-cta">
        <div className="container">
          <div className="services-cta-content text-center">
            <h2>Ready to Transform Your Teaching?</h2>
            <p>
              Contact us today to discuss how our services can help you enhance your teaching with educational
              technology.
            </p>
            <div className="services-cta-buttons">
              <Link to="/contact" className="btn btn-accent">
                Schedule a Consultation
              </Link>
              <Link to="/resources" className="btn btn-outline">
                Explore Free Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
