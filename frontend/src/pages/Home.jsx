import React from 'react'
import { Link } from "react-router-dom"
import "../styles/Home.css"

// Importing section components
import HeroSection from "../components/home/HeroSection"
import FeaturesSection from "../components/home/FeaturesSection"
import AboutPreview from "../components/home/AboutPreview"
import ServicesPreview from "../components/home/ServicesPreview"
import TestimonialsSection from "../components/home/TestimonialsSection"
import CtaSection from "../components/home/CtaSection"
import BlogPreview from "../components/home/BlogPreview"
import NewsletterSection from "../components/home/NewsletterSection"
import AnimatedSection from '../components/home/AnimatedSection'

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero with subtle fade-up animation */}
      <AnimatedSection animation="fade-up" duration={1000} threshold={0.05}>
        <HeroSection />
      </AnimatedSection>
      
      {/* Features with bouncy effect */}
      <AnimatedSection animation="bounce" duration={900} className="animated-features">
        <FeaturesSection />
      </AnimatedSection>
      
      {/* Services with slide from left effect */}
      <AnimatedSection animation="slide-left" duration={800} delay={200}>
        <ServicesPreview />
      </AnimatedSection>
      
      {/* Testimonials with rotating effect */}
      <AnimatedSection animation="slide-right" duration={800}>
        <TestimonialsSection />
      </AnimatedSection>
      
      {/* CTA with zoom in effect */}
      <AnimatedSection animation="zoom-in" duration={700} delay={100}>
        <CtaSection />
      </AnimatedSection>
      
      <BlogPreview />
      <NewsletterSection />
    </div>
  )
}

export default Home
