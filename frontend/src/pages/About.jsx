import { Link } from "react-router-dom";
import "../styles/About.css";

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-content">
                        <h1>About Teazy Tech</h1>
                        <p>
                            Empowering educators with cutting-edge technology
                            knowledge and tools
                        </p>
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
                                We’re here to guide you with Edtech tools and
                                tips that will make your teaching easier,
                                learning fun, and help you connect with today’s
                                digital learners.
                            </p>
                        </div>
                        <div className="vision-card">
                            <h2>Our Vision</h2>
                            <p>
                                Helping teachers feel confident, supported, and
                                ready to teach with tech, one simple step at a
                                time.
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
                                src="/images/workshopPhotos/IMG_8138.jpg"
                                alt="Teazy Tech founders"
                            />
                        </div>
                        <div className="our-story-text">
                            <h2>Our Story</h2>
                            <p>
                                Princess Natasha Momoh has always been deeply
                                passionate about education. But her heart broke
                                when she saw how far behind many schools were in
                                using technology, especially in Africa.
                            </p>
                            <p>
                                In 2022, she led a research project to truly
                                listen to teachers&apos; thoughts on technology.
                                The results were eye-opening. Many teachers
                                described tech as confusing, time-consuming and
                                even threatening: “It&apos;s too hard to use,”
                                “It&apos;s replacing us,” “How does this help my
                                students?” These weren&apos;t just passing
                                comments, they were honest concerns shared by
                                over 70% of K–12 teachers in Nigeria.That&apos;s
                                when Teazy Tech was born.
                            </p>
                            <p>
                                What started as a few online post grew into
                                hands-on workshops, personal support, and a
                                growing community for Educators. Today, Teazy
                                Tech is training over 200 teachers for free,
                                giving them the tools and confidence to bring
                                Edtech into their classrooms.We&apos;re just
                                getting started and we&apos;d love for you to
                                join us on this journey.
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
                        <p>
                            The principles that guide everything we do at Teazy
                            Tech
                        </p>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <div
                                className="value-icon"
                                style={{
                                    backgroundColor: "rgba(47, 111, 204, 0.1)",
                                }}
                            >
                                <i
                                    className="fas fa-lightbulb"
                                    style={{ color: "var(--primary-blue)" }}
                                ></i>
                            </div>
                            <h3>Innovation</h3>
                            <p>
                                We continuously explore and embrace new
                                technologies and methodologies to provide
                                cutting-edge solutions for educators.
                            </p>
                        </div>
                        <div className="value-card">
                            <div
                                className="value-icon"
                                style={{
                                    backgroundColor: "rgba(68, 187, 164, 0.1)",
                                }}
                            >
                                <i
                                    className="fas fa-hands-helping"
                                    style={{ color: "var(--secondary-teal)" }}
                                ></i>
                            </div>
                            <h3>Accessibility</h3>
                            <p>
                                We believe educational technology should be
                                accessible to all teachers, regardless of their
                                technical background or resources.
                            </p>
                        </div>
                        <div className="value-card">
                            <div
                                className="value-icon"
                                style={{
                                    backgroundColor: "rgba(233, 79, 55, 0.1)",
                                }}
                            >
                                <i
                                    className="fas fa-chalkboard-teacher"
                                    style={{ color: "var(--secondary-red)" }}
                                ></i>
                            </div>
                            <h3>Practicality</h3>
                            <p>
                                We focus on practical, implementable solutions
                                that address real classroom challenges and
                                enhance the teaching experience.
                            </p>
                        </div>
                        <div className="value-card">
                            <div
                                className="value-icon"
                                style={{
                                    backgroundColor: "rgba(35, 52, 99, 0.1)",
                                }}
                            >
                                <i
                                    className="fas fa-users"
                                    style={{
                                        color: "var(--primary-dark-blue)",
                                    }}
                                ></i>
                            </div>
                            <h3>Community</h3>
                            <p>
                                We foster a supportive community where educators
                                can share experiences, challenges, and successes
                                in their technology journey.
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
                        <p>
                            The passionate educators and technology experts
                            behind Teazy Tech
                        </p>
                    </div>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="team-member-image">
                                <img
                                    src="/images/workshopPhotos/IMG_8138.jpg"
                                    alt="Team member"
                                />
                            </div>
                            <h3>Princess Natasha Momoh</h3>
                            <p className="team-member-role">Founder & CEO</p>
                            <p className="team-member-bio">
                                Former high school teacher with 15 years of
                                experience and a Ph.D. in Educational
                                Technology.
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
                                    src="/images/Teazy Tech Volunteers/Adaobi Onyishi.JPG"
                                    alt="Team member"
                                />
                            </div>
                            <h3>Adaobi Onyishi</h3>
                            <p className="team-member-role">
                                Field Representative
                            </p>
                            <p className="team-member-bio">
                                Our representative
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
                                    src="/images/Teazy Tech Volunteers/Ridwan Aboki.JPG"
                                    alt="Team member"
                                />
                            </div>
                            <h3>Ridwan Olalere</h3>
                            <p className="team-member-role">
                                Training Facilitator
                            </p>
                            <p className="team-member-bio">
                                Curriculum specialist with expertise in
                                integrating technology into diverse subjects.
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
                                    src="/images/Teazy Tech Volunteers/Emmanuel Clement.jpg"
                                    alt="Team member"
                                />
                            </div>
                            <h3>Emmanuel Clement</h3>
                            <p className="team-member-role">
                                Video Content Creator
                            </p>
                            <p className="team-member-bio">
                                Our professional Video content creator,
                                versatile with various modern media editing
                                skills
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
                                    src="/images/Teazy Tech Volunteers/Chelsea Julius.jpg"
                                    alt="Team member"
                                />
                            </div>
                            <h3>Chelsea Julius</h3>
                            <p className="team-member-role">
                                Business Assistant and Community Manager
                            </p>
                            <p className="team-member-bio">
                                Chelsea julius is the secondary overseer of the
                                business aspects of our communities.
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
                        <p>
                            How Teazy Tech is transforming education through
                            technology
                        </p>
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
                        <p>
                            Organizations we collaborate with to enhance
                            educational technology
                        </p>
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
                        <p>
                            Become part of our community of educators
                            transforming teaching through technology.
                        </p>
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
    );
};

export default About;
