"use client";

import { useState, useEffect} from "react";
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

    const filteredResources =
        activeCategory === "all"
            ? resourceData
            : resourceData.filter(
                  (resource) => resource.category === activeCategory
              );
    useEffect(() => {
        window.scroll({ top: 0,left: 0, behaviour: "smooth" })
    }, [])
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
                <div className="group p-3 rounded-2xl bg-indigo-500 flex items-center gap-3">
                <a
                    className="text-lg text-white lg:text-2xl hover:decoration-red-300 hover:text-red-400 underline underline-offset-2"
                    href="https://selar.com/m/teazy-tech1?category=all"
                    target="_blank"
                >
                    Explore our Online Courses on Selar
                </a>
                <a
                    href="https://selar.com/m/teazy-tech1?category=all"
                    target="_blank"
                >
                    <svg
                        className="w-6 fill-indigo-500 group-hover:translate-x-3 transform-transition duration-300 group-hover:fill-red-500"
                        viewBox="0 0 32 32"
                    >
                        <path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
                    </svg>
                </a>
            </div>
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
                            <h2>Becoming a Tech-savvy Teacher</h2>
                            <p>
                                This comprehensive guide was created for
                                educators struggling to transition from the
                                traditional ways of teaching to the integration
                                of educational technology in their classrooms.
                            </p>
                            <ul className="featured-resource-details">
                                <li>
                                    <i className="fas fa-file-pdf"></i> 47-page
                                    PDF Guide
                                </li>
                                <li>
                                    <i className="fas fa-video"></i> 4
                                    Instructional Videos
                                </li>
                                <li>
                                    <i className="fas fa-file-alt"></i> 5
                                    Ready-to-use Templates
                                </li>
                            </ul>
                            <a
                                href=" https://selar.com/24ua7n "
                                target="_blank"
                                className="btn btn-primary"
                            >
                                Download Free Guide
                            </a>
                        </div>
                        <div className="featured-resource-image">
                            <img
                                src="/images/resourcesFolder/becomingTechSavvyTeacher.png"
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
