import { useEffect, useRef } from 'react'
import "../../styles/Home.css"
import AnimatedSection from './AnimatedSection'

const TestimonialsSection = () => {
  const testimonialRefs = useRef([]);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('testimonial-visible');
        } else {
          entry.target.classList.remove('testimonial-visible');
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    testimonialRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });
    
    return () => {
      testimonialRefs.current.forEach(el => {
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
            <p>Hear from teachers who have transformed their classrooms with Teazy Tech</p>
          </div>
          
          <div className="testimonials-alt-container">
            <div 
              className="testimonial-alt-item testimonial-right"
              ref={(el) => addToRefs(el, 0)}
            >
              <div className="testimonial-alt-image">
                <img 
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Sarah Johnson" 
                />
              </div>
              <div className="testimonial-alt-content">
                <h3>Sarah Johnson</h3>
                <p className="testimonial-alt-position">High School Science Teacher</p>
                <div className="testimonial-alt-text">
                  <p>"Teazy Tech's workshops completely changed how I approach technology in my classroom. My students are more engaged than ever, and I feel confident using new digital tools. The training was practical and immediately applicable to my curriculum."</p>
                </div>
              </div>
            </div>
            
            <div 
              className="testimonial-alt-item testimonial-left"
              ref={(el) => addToRefs(el, 1)}
            >
              <div className="testimonial-alt-content">
                <h3>Michael Rodriguez</h3>
                <p className="testimonial-alt-position">Elementary School Teacher</p>
                <div className="testimonial-alt-text">
                  <p>"As someone who was intimidated by technology, Teazy Tech provided the perfect step-by-step guidance I needed. Now I'm creating digital lessons my students love! The personalized support made all the difference in my confidence level."</p>
                </div>
              </div>
              <div className="testimonial-alt-image">
                <img 
                  src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Michael Rodriguez" 
                />
              </div>
            </div>
            
            <div 
              className="testimonial-alt-item testimonial-right"
              ref={(el) => addToRefs(el, 2)}
            >
              <div className="testimonial-alt-image">
                <img 
                  src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Jennifer Williams" 
                />
              </div>
              <div className="testimonial-alt-content">
                <h3>Jennifer Williams</h3>
                <p className="testimonial-alt-position">Middle School Principal</p>
                <div className="testimonial-alt-text">
                  <p>"The personalized support from Teazy Tech helped our entire department modernize our curriculum. Their understanding of both education and technology makes all the difference. Our teachers now collaborate more effectively using the tools we learned."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}

export default TestimonialsSection 