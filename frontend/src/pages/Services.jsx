import { Link } from "react-router-dom";
import "../styles/Services.css";

const Services = () => {
    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="container">
                    <div className="services-hero-content">
                        <h1>Our Services</h1>
                        <p>
                            Edtech solutions designed to simplify classroom
                            teaching today
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="section services-overview">
                <div className="container">
                    <div className="services-overview-content">
                        <div className="services-overview-text">
                            <h2>How We Help You Thrive</h2>
                            <p>
                                At Teazy Tech, we are here to support you no
                                matter where you are on your journey to
                                educational technology integration. Beyond
                                providing personal workshops and training
                                sessions for teachers, we also partner with private, public and
                                governmental institutions to improve technology
                                integration and position you for success on a
                                global scale.
                            </p>
                        </div>
                        <div className="services-overview-image">
                            <img
                                src="/images/Gallery Kaduna Training/IMG_6147.jpg"
                                alt="Group photo"
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
                        <p>
                            Comprehensive solutions to enhance your teaching
                            with technology
                        </p>
                    </div>

                    <div className="service-item">
                        <div className="service-item-content">
                            <div className="service-item-text">
                                <div
                                    className="service-icon"
                                    style={{
                                        backgroundColor:
                                            "rgba(47, 111, 204, 0.1)",
                                    }}
                                >
                                    <i
                                        className="fas fa-chalkboard-teacher"
                                        style={{ color: "var(--primary-blue)" }}
                                    ></i>
                                </div>
                                <h3>Professional Development</h3>
                                <p>
                                    Our professional development programs are
                                    designed to meet educators where they are in
                                    their technology journey. From introductory
                                    workshops to advanced masterclasses, we
                                    provide hands-on training that builds
                                    confidence and competence in using
                                    educational technology.
                                </p>
                                <ul className="service-features">
                                    <li>
                                        Customized training programs for schools
                                        and districts
                                    </li>
                                    <li>
                                        Hands-on workshops with practical
                                        classroom applications
                                    </li>
                                    <li>
                                        Ongoing support and follow-up coaching
                                    </li>
                                    <li>
                                        Both in-person and virtual options
                                        available
                                    </li>
                                </ul>
                                <Link
                                    to="/services/professional-development"
                                    className="btn btn-primary"
                                >
                                    Learn More
                                </Link>
                            </div>
                            <div className="service-item-image">
                                <img
                                    src="/images/workshopPhotos/IMG_7521.jpg"
                                    alt="Professional Development"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="service-item reverse">
                        <div className="service-item-content">
                            <div className="service-item-text">
                                <div
                                    className="service-icon"
                                    style={{
                                        backgroundColor:
                                            "rgba(68, 187, 164, 0.1)",
                                    }}
                                >
                                    <i
                                        className="fas fa-laptop-code"
                                        style={{
                                            color: "var(--secondary-teal)",
                                        }}
                                    ></i>
                                </div>
                                <h3>Technology Integration</h3>
                                <p>
                                    We help educators seamlessly integrate
                                    technology into their curriculum in ways
                                    that enhance learning outcomes. Our approach
                                    focuses on using technology as a tool to
                                    support pedagogical goals, not as an end in
                                    itself.
                                </p>
                                <ul className="service-features">
                                    <li>
                                        Curriculum mapping for technology
                                        integration
                                    </li>
                                    <li>
                                        Tool selection guidance based on
                                        learning objectives
                                    </li>
                                    <li>
                                        Development of blended and hybrid
                                        learning models
                                    </li>
                                    <li>
                                        Assessment strategies for
                                        technology-enhanced learning
                                    </li>
                                </ul>
                                <Link
                                    to="/services/technology-integration"
                                    className="btn btn-secondary"
                                >
                                    Learn More
                                </Link>
                            </div>
                            <div className="service-item-image">
                                <img
                                    src="/images/Gallery Kaduna Training/watchingTv.jpg"
                                    alt="Technology Integration"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="service-item">
                        <div className="service-item-content">
                            <div className="service-item-text">
                                <div
                                    className="service-icon"
                                    style={{
                                        backgroundColor:
                                            "rgba(233, 79, 55, 0.1)",
                                    }}
                                >
                                    <i
                                        className="fas fa-pencil-ruler"
                                        style={{
                                            color: "var(--secondary-red)",
                                        }}
                                    ></i>
                                </div>
                                <h3>Instructional Content Design</h3>
                                <p>
                                    Create engaging, interactive digital
                                    learning materials that captivate students
                                    and enhance comprehension. Our content
                                    creation services help you develop materials
                                    that align with your curriculum goals while
                                    leveraging the power of multimedia.
                                </p>
                                <ul className="service-features">
                                    <li>
                                        Interactive lesson design and
                                        development
                                    </li>
                                    <li>
                                        Video production for instructional
                                        content
                                    </li>
                                    <li>
                                        Creation of digital assessments and
                                        activities
                                    </li>
                                    <li>
                                        Accessibility compliance for all digital
                                        materials
                                    </li>
                                </ul>
                                <Link
                                    to="/services/content-creation"
                                    className="btn btn-accent"
                                >
                                    Learn More
                                </Link>
                            </div>
                            <div className="service-item-image">
                                <img
                                    src="/images/crossedLegs.jpg"
                                    alt="Digital Content Creation"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="service-item reverse">
                        <div className="service-item-content">
                            <div className="service-item-text">
                                <div
                                    className="service-icon"
                                    style={{
                                        backgroundColor:
                                            "rgba(35, 52, 99, 0.1)",
                                    }}
                                >
                                    <i
                                        className="fas fa-users-cog"
                                        style={{
                                            color: "var(--primary-dark-blue)",
                                        }}
                                    ></i>
                                </div>
                                <h3>Strategic Planning</h3>
                                <p>
                                    Develop a comprehensive educational
                                    technology strategy for your school or
                                    district. Our strategic planning services
                                    help administrators make informed decisions
                                    about technology investments, implementation
                                    timelines, and professional development
                                    needs.
                                </p>
                                <ul className="service-features">
                                    <li>
                                        Technology needs assessment and gap
                                        analysis
                                    </li>
                                    <li>
                                        Development of multi-year technology
                                        plans
                                    </li>
                                    <li>
                                        Budget planning and resource allocation
                                        guidance
                                    </li>
                                    <li>
                                        Evaluation frameworks for measuring
                                        impact
                                    </li>
                                </ul>
                                <Link
                                    to="/services/strategic-planning"
                                    className="btn btn-primary"
                                >
                                    Learn More
                                </Link>
                            </div>
                            <div className="service-item-image">
                                <img
                                    src="/images/Gallery Ibadan Training/IMG_7739.jpg"
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
                        <p>
                            Feedback from educators who have transformed their
                            teaching with our services
                        </p>
                    </div>

                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>
                                    "Teazytech has become a quick go to platform
                                    for me, the short demos and introduction of
                                    important edtch tools that I never knew
                                    existed before now has made my work better
                                    as an educator. Teazy tech absolutely
                                    qualifies for every passionate teacher's
                                    companion. The demos and illustration videos
                                    are short and easy guides even for teachers
                                    that have no prior EdTech experience. With
                                    teazy tech I've come to appreciate that
                                    EdTech isn't as far fetched as I thought."
                                </p>
                            </div>
                            <div className="testimonial-author">
                                <img
                                    src="/images/Teazy tech teachers/wua msughve isaac.jpg"
                                    alt="amos happiness"
                                />
                                <div>
                                    <h4>Wua Msughve Issac</h4>
                                    <p>Teacher</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>
                                    "I am now a Canva 'Guru' in my school thanks
                                    to Teazy tech training a while back. I'm
                                    able to develop any resource for my lesson
                                    that I'm not able to find online myself and
                                    I'm working on creating my portfolio because
                                    I'm hoping to sell some of the educational
                                    resources I've been developing online. I'm
                                    sure it will be useful to others as well.
                                    Thanks so very much."
                                </p>
                            </div>
                            <div className="testimonial-author">
                                <img
                                    src="/images/Teazy tech teachers/Florence imhande.jpg"
                                    alt="Superintendent"
                                />
                                <div>
                                    <h4>FLorence Imhande</h4>
                                    <p>Teacher</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>
                                    "Teazy Tech has really helped me in my
                                    online teaching. Teazy Tech always sends
                                    some really amazing EdTech tools like
                                    Photomath that I never knew existed. The
                                    community is so engaging, and we're always
                                    sent resources to ease our work for free."
                                </p>
                            </div>
                            <div className="testimonial-author">
                                <img
                                    src="/images/Teazy tech teachers/abimbola adiodun akanbi.jpg"
                                    alt="Teacher"
                                />
                                <div>
                                    <h4>Abimbola Abiodun</h4>
                                    <p>Maths Teacher</p>
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
                        <p>
                            How we work with you to implement educational
                            technology solutions
                        </p>
                    </div>

                    <div className="process-steps">
                        <div className="process-step">
                            <div className="process-number">1</div>
                            <div className="process-content">
                                <h3>Assessment</h3>
                                <p>
                                    We begin by understanding your current
                                    technology landscape, teaching goals, and
                                    specific challenges through surveys,
                                    interviews, and observations.
                                </p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="process-number">2</div>
                            <div className="process-content">
                                <h3>Planning</h3>
                                <p>
                                    Based on the assessment, we develop a
                                    customized plan that addresses your specific
                                    needs, timeline, and budget constraints.
                                </p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="process-number">3</div>
                            <div className="process-content">
                                <h3>Implementation</h3>
                                <p>
                                    We deliver the agreed-upon services, whether
                                    that's training, content creation, or
                                    strategic planning, with a focus on
                                    practical application.
                                </p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="process-number">4</div>
                            <div className="process-content">
                                <h3>Support</h3>
                                <p>
                                    Our relationship doesn't end with delivery.
                                    We provide ongoing support to ensure
                                    successful adoption and address any
                                    challenges that arise.
                                </p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="process-number">5</div>
                            <div className="process-content">
                                <h3>Evaluation</h3>
                                <p>
                                    We help you measure the impact of the
                                    implemented solutions and make adjustments
                                    as needed to ensure optimal results.
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
                            <h3>Am I paying for the resources or guide?</h3>
                            <p>
                                No, majority of our resources and guides are
                                free for teachers and if they are paid, we
                                always make sure educators can afford it.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>
                                Can I get help with an Edtech that's not
                                mentioned here?
                            </h3>
                            <p>
                                Yes, join our community, and we&apos;ll support
                                you with any Edtech tool you&apos;re struggling
                                with, even if it&apos;s yet to be listed on our
                                platform.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>
                                Can my school become part of the physical
                                training?
                            </h3>
                            <p>
                                Yes, just send us an email with your
                                school&apos;s name and location, and we&apos;ll
                                plan a tailored physical training session that
                                fits your school&apos;s specific needs.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>Can you train my school privately?</h3>
                            <p>
                                Yes, we offer private training sessions for
                                schools that want to develop the educational
                                technology integration skills of their staff.
                                Send us an email for more information.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>
                                Are the Edtech tools for specific grades and
                                subject areas?
                            </h3>
                            <p>
                                Yes, we offer tools and recommendations tailored
                                to different grade levels and subject areas to
                                help you teach more effectively and confidently.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>
                                Can I still benefit from Teazy Tech even though
                                I&apos;m not tech-savvy at all?
                            </h3>
                            <p>
                                Yes, our trainings are beginner-friendly and
                                designed to help you grow at your own pace, so
                                you don&apos;t need to be a tech expert to get
                                started.
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>
                                How long does it take to see results in my
                                classroom?
                            </h3>
                            <p>
                                Many teachers notice improvements quickly. With
                                consistent use of our recommended tools and
                                strategies, you’ll start seeing more student
                                engagement and a smoother teaching experience
                                within weeks.
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
                            Contact us today to discuss how our services can
                            help you enhance your teaching with educational
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
    );
};

export default Services;
