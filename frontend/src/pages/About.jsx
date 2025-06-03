import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../styles/About.css";

const About = () => {
       useEffect(() => {
            window.scroll({ top: 0,left: 0, behaviour: "smooth" })
        }, [])
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
                            src="/images/Mastercard Foundation Edtech Conference/IMG_6449.jpg"
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
                                Our mission is to build teachers that are
                                equipped with the knowledge of educational
                                technology, so that they can thrive in this
                                digital age. By arming teachers with the right
                                Edtech tools, we aim to ease the teaching
                                process and create a truly engaging/memorable
                                learning enviroment for students.
                            </p>
                        </div>
                        <div className="vision-card">
                            <h2>Our Vision</h2>
                            <p>
                                To become the go-to for teachers around the
                                world who want to transform the teaching and
                                learning process with educational technology.
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
                                Princess Natasha has always been passionate about education and its advancement. In 2022, she carried out a research to analyze the concerns of Nigerian teachers to integrate technology into their teaching and learning process. The results from this study birthed Teazy Tech and changed the way she empatized with teachers. She noticed a gap in the system- teachers were under trained, misinformed, and wrongfully scared of technology integration because of perceived difficulty, but with Teazy Tech she and the solid Teazy Tech team have been able to bridge that gap. 

                            </p>
                            <p>
                                Teazy Tech is an acronym for Teach Easy Technology, we are an EdTech company dedicated to helping teachers transition from the traditional ways of teaching (teacher centered, chalk and black board, etc) to the use of more digital pedagogies. Since our inception, we have prioritzed the growth of educators through the development of customized resources, courses, and comprehensive training programs. We were born out a necessity not a want because we believe that teachers play an indispensable role in education, so we must demystify educational technology. 

                            </p>
                            <p>
                                Today, we are building a community of teachers that want to make a difference in their classrooms and change the education space with EdTech. We partner with private institutions, individual teachers, and government institutions in a bid to reach more teachers one training and resource at a time. We are primarily impact driven. 
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
                                    backgroundColor: "rgba(233, 79, 55, 0.1)",
                                }}
                            >
                                <i
                                    className="fas fa-chalkboard-teacher"
                                    style={{ color: "var(--secondary-red)" }}
                                ></i>
                            </div>
                            <h3>Empowerment</h3>
                            <p>
                                We believe in the transformational power of a
                                tech-equipped teacher, so we strive to equip
                                teachers with the latest Edtech skills and
                                tools.
                            </p>
                        </div>

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
                                Staying at the fore-front of educational
                                technology developments and digital pedagogies
                                is our priority. So we are constantly seeking
                                new ways to improve the teaching and learning
                                process with digital innovations.
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
                                Our training and resources materials are
                                accessible and affordable to all teachers,
                                regardless of their locations.
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
                                Support and community cannot be side-lined when
                                it comes to educators. We believe in building a
                                supportive and strong community of educators who
                                are focused on growing together and improving
                                their crafts.
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
                                    src="/images/Teazy Tech Volunteers/princessMomoh.jpg"
                                    alt="Team member"
                                />
                            </div>
                            <h3>Princess Natasha Balogun Momoh</h3>
                            <p className="team-member-role">Founder & CEO</p>
                            <p className="team-member-bio">
                                Learning Designer and Educator with over 5 years
                                of experience in the professional EdTech space.
                            </p>
                            <div className="team-member-social">
                                <a href="#" aria-label="LinkedIn">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                              
                            </div>
                        </div>

                        <div className="team-member">
                            <div className="w-full h-[250px] overflow-hidden">
                                <img
                                    className="object-center w-full h-full object-cover transition-transform duration-500"
                                    src="/images/Teazy Tech Volunteers/Chelsea front picture.jpg"
                                    alt="Team member"
                                />
                            </div>
                            <h3>Chelsea Julius</h3>
                            <p className="team-member-role">
                                Business Assistant and Community Manager
                            </p>
                            <p className="team-member-bio">
                                Business assistant and secondary overseer of
                                TEAZY Tech’s general operations.
                            </p>
                            <div className="team-member-social">
                                <a href="#" aria-label="LinkedIn">
                                    <i className="fab fa-linkedin-in"></i>
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
                                Company representative, promoting Teazy Tech’s
                                products and services.
                            </p>
                            <div className="team-member-social">
                                <a href="#" aria-label="LinkedIn">
                                    <i className="fab fa-linkedin-in"></i>
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
                              
                            </div>
                        </div>

                        <div className="team-member">
                            <div className="w-full h-[250px] overflow-hidden">
                                <img
                                    className="object-center w-full h-full object-cover transition-transform duration-500"
                                    src="/images/Teazy Tech Volunteers/IMG_3556.JPG"
                                    alt="Team member"
                                />
                            </div>
                            <h3>Adetola</h3>
                            <p className="team-member-role">
                                Social Media Manager
                            </p>
                            <p className="team-member-bio">
                                volunteer social media manager and content
                                creator.
                            </p>
                            <div className="team-member-social">
                                <a href="#" aria-label="LinkedIn">
                                    <i className="fab fa-linkedin-in"></i>
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
                            <div className="impact-number">1000+</div>
                            <p>Teachers Trained</p>
                        </div>
                        <div className="impact-stat">
                            <div className="impact-number">60+</div>
                            <p>Schools Partnered</p>
                        </div>
                        <div className="impact-stat">
                            <div className="impact-number">20,000+</div>
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
                                src="https://cdn.worldvectorlogo.com/logos/dell-2.svg"
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
