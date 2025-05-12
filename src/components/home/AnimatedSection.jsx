import { useEffect, useRef } from 'react'

// Enhanced AnimatedSection with multiple animation styles
const AnimatedSection = ({ 
  children, 
  animation = 'fade-up', // default animation
  delay = 0, 
  duration = 800,
  threshold = 0.1,
  className = '' 
}) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: threshold
    };
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        // Add animation class when element enters viewport
        if (entry.isIntersecting) {
          const element = entry.target;
          // First remove any existing animation classes
          element.classList.remove('animated-visible');
          
          // Force a reflow to restart the animation
          void element.offsetWidth;
          
          // Add animation class with delay
          setTimeout(() => {
            element.classList.add('animated-visible');
          }, delay);
        } else {
          // Remove animation class when element exits viewport
          entry.target.classList.remove('animated-visible');
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay, threshold]);
  
  // Apply the specific animation class based on the animation prop
  const animationClass = `animated-${animation}`;
  const durationStyle = { '--animation-duration': `${duration}ms` };
  
  return (
    <div 
      ref={sectionRef} 
      className={`animated-section ${animationClass} ${className}`}
      style={durationStyle}
    >
      {children}
    </div>
  );
};

export default AnimatedSection; 