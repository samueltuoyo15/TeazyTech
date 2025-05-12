import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import "../../styles/Home.css"

const HeroSection = () => {
  const heroRef = useRef(null);
  const [countedUp, setCountedUp] = useState(false);
  const [yearsCount, setYearsCount] = useState(0);
  const [teachersCount, setTeachersCount] = useState(0);
  const [schoolsCount, setSchoolsCount] = useState(0);
  
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('loaded');
    }
    
    // Start the counter animation after the hero section loads
    const timer = setTimeout(() => {
      startCountUp();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const startCountUp = () => {
    if (countedUp) return;
    
    const yearsTarget = 10;
    const teachersTarget = 500;
    const schoolsTarget = 50;
    const duration = 2000; // 2 seconds
    const steps = 40; // Number of steps to reach the target
    const interval = duration / steps;
    
    let currentStep = 0;
    
    const counter = setInterval(() => {
      currentStep += 1;
      const progress = currentStep / steps;
      
      setYearsCount(Math.floor(progress * yearsTarget));
      setTeachersCount(Math.floor(progress * teachersTarget));
      setSchoolsCount(Math.floor(progress * schoolsTarget));
      
      if (currentStep === steps) {
        setYearsCount(yearsTarget);
        setTeachersCount(teachersTarget);
        setSchoolsCount(schoolsTarget);
        setCountedUp(true);
        clearInterval(counter);
      }
    }, interval);
    
    return () => clearInterval(counter);
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg-gradient"></div>
      <div className="hero-bg-pattern"></div>
      <div className="hero-bg-dots"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">Educational Technology Partner</div>
          <h1 className="hero-heading">
            Empowering Educators with Technology
          </h1>
          <p className="hero-description">
            Cutting-edge tools enabling teachers to elevate their methods and connect with today's tech-savvy learners.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">
              Explore Services
            </Link>
            <Link to="/resources" className="btn btn-outline">
              Resources
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">{yearsCount}+</span>
              <span className="hero-stat-label">Years</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">{teachersCount}+</span>
              <span className="hero-stat-label">Teachers</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">{schoolsCount}+</span>
              <span className="hero-stat-label">Schools</span>
            </div>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Teacher using educational technology" 
              className="hero-image"
            />
          </div>
          <div className="hero-floating-element hero-float-1">
            <i className="fas fa-laptop"></i>
            <span>Modern Learning</span>
          </div>
          <div className="hero-floating-element hero-float-2">
            <i className="fas fa-chalkboard-teacher"></i>
            <span>Expert Training</span>
          </div>
        </div>
      </div>
      <div className="hero-shapes">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>
    </section>
  )
}

export default HeroSection 