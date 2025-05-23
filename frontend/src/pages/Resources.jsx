"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Resources.css";
import resourceData from "../lib/resourceData";

const Resources = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const categories = [
        { id: "all", name: "All Resources" },
        { id: "guides", name: "Guides & Tutorials" },
        { id: "webinars", name: "Webinars" },
        { id: "tools", name: "Tools & Templates" },
        { id: "research", name: "Research & Case Studies" },
    ];
    /*resource.id === 1 ? "https://images.unsplash.com/photo-1585247226801-bc613c441316?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" : 
                         resource.id === 2 ? "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" :
                         resource.id === 3 ? "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" :
                         resource.id === 4 ? "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80" :
                         resource.id === 5 ? "https://images.unsplash.com/photo-1594136976553-38728efd5b27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80" :
                         resource.id === 6 ? "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" :
                         resource.id === 7 ? "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" :
                         "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"*/

    const resources = [
        {
            id: 1,
            title: "Getting Started with Educational Technology",
            category: "guides",
            image: "/images/resource1.png",
            description:
                "A comprehensive guide for teachers new to educational technology.",
            type: "PDF Guide",
            date: "June 15, 2023",
        },
        {
            id: 2,
            title: "Creating Engaging Virtual Lessons",
            category: "webinars",
            image: "/images/resource2.png",
            description:
                "Learn strategies for designing online lessons that keep students motivated.",
            type: "Recorded Webinar",
            date: "May 28, 2023",
        },
        {
            id: 3,
            title: "Digital Assessment Tools",
            category: "tools",
            image: "/images/resource3.png",
            description:
                "Templates and tools for creating effective digital assessments.",
            type: "Template Pack",
            date: "May 10, 2023",
        },
        {
            id: 4,
            title: "Technology Integration in STEM Subjects",
            category: "research",
            image: "/images/resource4.png",
            description:
                "Case studies on successful technology integration in science and math classrooms.",
            type: "Research Report",
            date: "April 22, 2023",
        },
        {
            id: 5,
            title: "Interactive Whiteboard Basics",
            category: "guides",
            image: "/images/resource5.png",
            description:
                "Step-by-step tutorial on maximizing your interactive whiteboard.",
            type: "Video Tutorial",
            date: "April 5, 2023",
        },
        {
            id: 6,
            title: "Accessibility in Digital Learning",
            category: "webinars",
            image: "/images/resource6.png",
            description:
                "Ensuring your digital materials are accessible to all students.",
            type: "Recorded Webinar",
            date: "March 18, 2023",
        },
        {
            id: 7,
            title: "Classroom Management Apps",
            category: "tools",
            image: "/images/resource7.png",
            description:
                "A comparison of popular classroom management applications.",
            type: "Comparison Guide",
            date: "March 3, 2023",
        },
        {
            id: 8,
            title: "Impact of 1:1 Device Programs",
            category: "research",
            image: "/images/resource8.png",
            description:
                "Research on the effectiveness of one-to-one device programs in schools.",
            type: "Research Report",
            date: "February 15, 2023",
        },
    ];

    const filteredResources =
        activeCategory === "all"
            ? resourceData
            : resourceData.filter(
                  (resource) => resource.category === activeCategory
              );

    return (
        <div className="resources-page">
            {/* Hero Section */}
            <section className="resources-hero">
                <div className="container">
                    <div className="resources-hero-content">
                        <h1>Educational Resources</h1>
                        <p>
                            Practical tools, guides, and research to enhance
                            your teaching with technology
                        </p>
                    </div>
                </div>
            </section>

            {/* Resources Filter */}
            <section className="section resources-filter">
                <div className="container">
                    <div className="filter-tabs">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`filter-tab ${
                                    activeCategory === category.id
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Grid */}
            <section className="section resources-grid-section">
                <div className="container">
                    <div className="resources-grid">
                        {filteredResources.map((resource) => (
                            <a
                                key={resource.id}
                                href={resource.link}
                                target="_blank"
                            >
                                <div className="resource-card">
                                    <div className="resource-card-image">
                                        <img
                                            src={resource.image}
                                            alt={resource.title}
                                        />
                                        <div className="resource-type">
                                            {resource.type}
                                        </div>
                                    </div>
                                    <div className="resource-card-content">
                                        <div className="resource-date">
                                            {resource.date}
                                        </div>
                                        <h3>{resource.title}</h3>
                                        <p>{resource.description}</p>
                                        <button className="resource-link">
                                            Access Resource{" "}
                                            <i className="fas fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </a>
                        ))}

                        {filteredResources.length === 0 && (
                            <div className="no-resources">
                                <p>
                                    No resources found in this category. Please
                                    check back later.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Featured Resource */}
            <section className="section featured-resource">
                <div className="container">
                    <div className="featured-resource-content">
                        <div className="featured-resource-text">
                            <div className="featured-badge">
                                Featured Resource
                            </div>
                            <h2>The Complete Guide to Blended Learning</h2>
                            <p>
                                This comprehensive guide covers everything you
                                need to know about implementing blended learning
                                in your classroom, from technology setup to
                                curriculum design.
                            </p>
                            <ul className="featured-resource-details">
                                <li>
                                    <i className="fas fa-file-pdf"></i> 75-page
                                    PDF Guide
                                </li>
                                <li>
                                    <i className="fas fa-video"></i> 10
                                    Instructional Videos
                                </li>
                                <li>
                                    <i className="fas fa-file-alt"></i> 25
                                    Ready-to-use Templates
                                </li>
                            </ul>
                            <Link
                                to="/resources/featured"
                                className="btn btn-primary"
                            >
                                Download Free Guide
                            </Link>
                        </div>
                        <div className="featured-resource-image">
                            <img
                                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                                alt="Blended Learning Guide"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Resource Categories */}
            <section className="section resource-categories">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Browse by Category</h2>
                        <p>
                            Explore our collection of educational technology
                            resources
                        </p>
                    </div>
                    <div className="category-cards">
                        <div className="category-card">
                            <div
                                className="category-icon"
                                style={{
                                    backgroundColor: "rgba(47, 111, 204, 0.1)",
                                }}
                            >
                                <i
                                    className="fas fa-book"
                                    style={{ color: "var(--primary-blue)" }}
                                ></i>
                            </div>
                            <h3>Guides & Tutorials</h3>
                            <p>
                                Step-by-step instructions for implementing
                                educational technology
                            </p>
                            <Link
                                to="/resources"
                                className="category-link"
                                onClick={() => setActiveCategory("guides")}
                            >
                                View Guides{" "}
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                        <div className="category-card">
                            <div
                                className="category-icon"
                                style={{
                                    backgroundColor: "rgba(68, 187, 164, 0.1)",
                                }}
                            >
                                <i
                                    className="fas fa-video"
                                    style={{ color: "var(--secondary-teal)" }}
                                ></i>
                            </div>
                            <h3>Webinars</h3>
                            <p>
                                Recorded sessions with experts on various
                                educational technology topics
                            </p>
                            <Link
                                to="/resources"
                                className="category-link"
                                onClick={() => setActiveCategory("webinars")}
                            >
                                View Webinars{" "}
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                        <div className="category-card">
                            <div
                                className="category-icon"
                                style={{
                                    backgroundColor: "rgba(233, 79, 55, 0.1)",
                                }}
                            >
                                <i
                                    className="fas fa-tools"
                                    style={{ color: "var(--secondary-red)" }}
                                ></i>
                            </div>
                            <h3>Tools & Templates</h3>
                            <p>
                                Ready-to-use resources to save you time in
                                implementing technology
                            </p>
                            <Link
                                to="/resources"
                                className="category-link"
                                onClick={() => setActiveCategory("tools")}
                            >
                                View Tools{" "}
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                        <div className="category-card">
                            <div
                                className="category-icon"
                                style={{
                                    backgroundColor: "rgba(35, 52, 99, 0.1)",
                                }}
                            >
                                <i
                                    className="fas fa-chart-bar"
                                    style={{
                                        color: "var(--primary-dark-blue)",
                                    }}
                                ></i>
                            </div>
                            <h3>Research & Case Studies</h3>
                            <p>
                                Evidence-based research on educational
                                technology effectiveness
                            </p>
                            <Link
                                to="/resources"
                                className="category-link"
                                onClick={() => setActiveCategory("research")}
                            >
                                View Research{" "}
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="section resources-newsletter">
                <div className="container">
                    <div className="resources-newsletter-content">
                        <div className="resources-newsletter-text">
                            <h2>Get New Resources First</h2>
                            <p>
                                Subscribe to our newsletter to receive the
                                latest educational technology resources directly
                                to your inbox, before they're published on our
                                website.
                            </p>
                        </div>
                        <form className="resources-newsletter-form">
                            <input
                                type="email"
                                placeholder="Your email address"
                                required
                            />
                            <button type="submit" className="btn btn-accent">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resources;
