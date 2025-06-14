import { useEffect, useRef, useState } from "react";
import "../../styles/Home.css";
import AnimatedSection from "./AnimatedSection";
import LazyImage from "../LazyImage";

const TestimonialsSection = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const itemRefs = useRef([]);

    const addToRefs = (el, index) => {
        if (el && !itemRefs.current.includes(el)) {
            itemRefs.current[index] = el;
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = itemRefs.current.indexOf(entry.target);
                        if (index !== -1 && !visibleItems.includes(index)) {
                            setVisibleItems((prev) => [...prev, index]);
                        }
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: "50px",
            }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            itemRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [visibleItems]);

    return (
        <section className="testimonials-section">
            <AnimatedSection animation="fade-up">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-badge">Testimonials</span>
                        <h2>What Educators Say About Us</h2>
                        <p>
                            Hear from teachers who have transformed their
                            classrooms with our EdTech solutions and training
                            programs.
                        </p>
                    </div>

                    <div className="testimonials-alt-container">
                        <div
                            className="testimonial-alt-item testimonial-right"
                            ref={(el) => addToRefs(el, 0)}
                        >
                            <div className="testimonial-alt-image">
                                <LazyImage
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
                            className={`testimonial-alt-item testimonial-left ${
                                visibleItems.includes(0)
                                    ? "testimonial-visible"
                                    : ""
                            }`}
                            ref={(el) => addToRefs(el, 1)}
                        >
                            <div className="testimonial-alt-content">
                                <h3>Amoatey Benjamin</h3>
                                <p className="testimonial-alt-position">
                                    Teacher(Educator)
                                </p>
                                <div className="testimonial-alt-text">
                                    <p>
                                        "I have been able to create beautiful
                                        presentations for my lessons using Canva
                                        and other tools I learned from Teazy
                                        Tech. My students are more engaged now,
                                        and I feel more confident in my teaching
                                        abilities. The training was practical
                                        and easy to follow."
                                    </p>
                                </div>
                            </div>
                            <div className="testimonial-alt-image">
                                <LazyImage
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
