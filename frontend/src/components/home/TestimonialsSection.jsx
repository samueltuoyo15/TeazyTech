import { useEffect, useRef } from "react";
import "../../styles/Home.css";
import AnimatedSection from "./AnimatedSection";

const TestimonialsSection = () => {
    const testimonialRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("testimonial-visible");
                } else {
                    entry.target.classList.remove("testimonial-visible");
                }
            });
        };

        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        );

        testimonialRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            testimonialRefs.current.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    const addToRefs = (el, index) => {
        if (el && !testimonialRefs.current.includes(el)) {
            testimonialRefs.current[index] = el;
        }
    };

    return (
        <section className="testimonials-section">
            <AnimatedSection direction="left">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-badge">Success Stories</span>
                        <h2>What Educators Say</h2>
                        <p>
                            Hear from teachers who have transformed their
                            classrooms with Teazy Tech
                        </p>
                    </div>

                    <div className="testimonials-alt-container">
                        <div
                            className="testimonial-alt-item testimonial-right"
                            ref={(el) => addToRefs(el, 0)}
                        >
                            <div className="testimonial-alt-image">
                                <img
                                    src="/images/Teazy tech teachers/Amos happiness.jpg"
                                    alt="Amos Happiness"
                                />
                            </div>
                            <div className="testimonial-alt-content">
                                <h3>Amos Happiness</h3>
                                <p className="testimonial-alt-position">
                                    Teacher(Educator)
                                </p>
                                <div className="testimonial-alt-text">
                                    <p>
                                        "Joining the Teazy Tech platform has
                                        been so helpful because I always receive
                                        updates on educational apps I really
                                        need, which helps me improve my teaching
                                        methods in terms of organizing my
                                        lessons, engaging in quizzes, and
                                        creating beautiful teaching aids. I now
                                        feel much bolder as an educator."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="testimonial-alt-item testimonial-left"
                            ref={(el) => addToRefs(el, 1)}
                        >
                            <div className="testimonial-alt-content">
                                <h3>Amoatey Benjamin</h3>
                                <p className="testimonial-alt-position">
                                    Ghanian Teacher
                                </p>
                                <div className="testimonial-alt-text">
                                    <p className="line-clamp-5">
                                        "Hi I am Mr. Amoatey Benjamin. A
                                        professional teacher with Ghana
                                        Education Service. My love for
                                        Professional Development led me to Teazy
                                        Tech Community, online in August 2024. I
                                        have received so much essential teaching
                                        resources from the community in the form
                                        of pictures, videos, facebook posts,
                                        ebooks and short courses.One Ebook
                                        dubbed Becoming a Tech Savvy, is one
                                        resource that has increased my joy for
                                        joining the Teazy Tech Community. All
                                        these resources have made teaching &
                                        learning outcomes so fruitful and
                                        positive. Thanks to TEAZY TECH. "
                                    </p>
                                </div>
                            </div>
                            <div className="testimonial-alt-image">
                                <img
                                    src="/images/Teazy tech teachers/amoatey Benjamin.jpg"
                                    alt="Amoatey Benjamin"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default TestimonialsSection;
