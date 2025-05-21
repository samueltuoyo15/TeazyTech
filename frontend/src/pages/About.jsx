import { Link } from "react-router-dom"
import "../styles/About.css"

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Teazy Tech</h1>
            <p>Empowering educators with cutting-edge technology knowledge and tools</p>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="About Teazy Tech" 
              className="about-hero-image" 
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <h2>Our Mission</h2>
              <p>
                To equip teachers with the knowledge of educational technology, helping them thrive and adapt
                confidently within the modern, digital classroom.
              </p>
            </div>
            <div className="vision-card">
              <h2>Our Vision</h2>
              <p>
                To become the trusted global resource for teachers everywhere who are passionate about transforming the
                teaching and learning experience through innovative educational technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section our-story">
        <div className="container">
          <div className="our-story-content">
            <div className="our-story-image">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Teazy Tech founders" 
              />
            </div>
            <div className="our-story-text">
              <h2>Our Story</h2>
              <p>
                Teazy Tech was founded in 2018 by a group of passionate educators and technology specialists who
                recognized a growing gap between available educational technology and teachers' ability to effectively
                implement it in their classrooms.
              </p>
              <p>
                What began as a small workshop series for local schools has grown into a comprehensive platform serving
                educators worldwide. Our team combines decades of classroom experience with technical expertise to
                create practical, accessible solutions for teachers at all technology proficiency levels.
              </p>
              <p>
                Today, Teazy Tech continues to expand its offerings while maintaining its core mission: making
                educational technology approachable, practical, and transformative for every teacher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section values">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do at Teazy Tech</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon" style={{ backgroundColor: "rgba(47, 111, 204, 0.1)" }}>
                <i className="fas fa-lightbulb" style={{ color: "var(--primary-blue)" }}></i>
              </div>
              <h3>Innovation</h3>
              <p>
                We continuously explore and embrace new technologies and methodologies to provide cutting-edge solutions
                for educators.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon" style={{ backgroundColor: "rgba(68, 187, 164, 0.1)" }}>
                <i className="fas fa-hands-helping" style={{ color: "var(--secondary-teal)" }}></i>
              </div>
              <h3>Accessibility</h3>
              <p>
                We believe educational technology should be accessible to all teachers, regardless of their technical
                background or resources.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon" style={{ backgroundColor: "rgba(233, 79, 55, 0.1)" }}>
                <i className="fas fa-chalkboard-teacher" style={{ color: "var(--secondary-red)" }}></i>
              </div>
              <h3>Practicality</h3>
              <p>
                We focus on practical, implementable solutions that address real classroom challenges and enhance the
                teaching experience.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon" style={{ backgroundColor: "rgba(35, 52, 99, 0.1)" }}>
                <i className="fas fa-users" style={{ color: "var(--primary-dark-blue)" }}></i>
              </div>
              <h3>Community</h3>
              <p>
                We foster a supportive community where educators can share experiences, challenges, and successes in
                their technology journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section team">
        <div className="container">
          <div className="section-header text-center">
            <h2>Meet Our Team</h2>
            <p>The passionate educators and technology experts behind Teazy Tech</p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-member-image">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                  alt="Team member" 
                />
              </div>
              <h3>Dr. Sarah Williams</h3>
              <p className="team-member-role">Founder & CEO</p>
              <p className="team-member-bio">
                Former high school teacher with 15 years of experience and a Ph.D. in Educational Technology.
              </p>
              <div className="team-member-social">
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-image">
                <img 
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Team member" 
                />
              </div>
              <h3>James Chen</h3>
              <p className="team-member-role">Chief Technology Officer</p>
              <p className="team-member-bio">
                Software engineer with a passion for creating intuitive educational tools.
              </p>
              <div className="team-member-social">
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-image">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" 
                  alt="Team member" 
                />
              </div>
              <h3>Maria Rodriguez</h3>
              <p className="team-member-role">Head of Curriculum</p>
              <p className="team-member-bio">
                Curriculum specialist with expertise in integrating technology into diverse subjects.
              </p>
              <div className="team-member-social">
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-image">
                <img 
                  src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Team member" 
                />
              </div>
              <h3>David Okafor</h3>
              <p className="team-member-role">Professional Development Director</p>
              <p className="team-member-bio">
                Experienced trainer specializing in making technology accessible to all skill levels.
              </p>
              <div className="team-member-social">
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section impact">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Impact</h2>
            <p>How Teazy Tech is transforming education through technology</p>
          </div>
          <div className="impact-stats">
            <div className="impact-stat">
              <div className="impact-number">10,000+</div>
              <p>Teachers Trained</p>
            </div>
            <div className="impact-stat">
              <div className="impact-number">500+</div>
              <p>Schools Partnered</p>
            </div>
            <div className="impact-stat">
              <div className="impact-number">45+</div>
              <p>Countries Reached</p>
            </div>
            <div className="impact-stat">
              <div className="impact-number">200,000+</div>
              <p>Students Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section partners">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Partners</h2>
            <p>Organizations we collaborate with to enhance educational technology</p>
          </div>
          <div className="partners-grid">
            <div className="partner-logo">
              <img 
                src="https://cdn.worldvectorlogo.com/logos/google-1-1.svg" 
                alt="Partner logo" 
              />
            </div>
            <div className="partner-logo">
              <img 
                src="https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" 
                alt="Partner logo" 
              />
            </div>
            <div className="partner-logo">
              <img 
                src="https://cdn.worldvectorlogo.com/logos/apple-13.svg" 
                alt="Partner logo" 
              />
            </div>
            <div className="partner-logo">
              <img 
                src="https://cdn.worldvectorlogo.com/logos/samsung-6.svg" 
                alt="Partner logo" 
              />
            </div>
            <div className="partner-logo">
              <img 
                src="https://cdn.worldvectorlogo.com/logos/dell-2.svg" 
                alt="Partner logo" 
              />
            </div>
            <div className="partner-logo">
              <img 
                src="https://cdn.worldvectorlogo.com/logos/intel-2.svg" 
                alt="Partner logo" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta">
        <div className="container">
          <div className="about-cta-content text-center">
            <h2>Join Our Mission</h2>
            <p>Become part of our community of educators transforming teaching through technology.</p>
            <div className="about-cta-buttons">
              <Link to="/services" className="btn btn-primary">
                Explore Our Services
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
