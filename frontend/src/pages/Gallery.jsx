"use client";

import { useState, useEffect } from "react";
import "../styles/Gallery.css";
import galleryData from "../lib/galleryData";
import LazyImage from "../components/LazyImage";

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState({
        id: "",
        title: "",
        images: [],
        description: "",
        category: "",
    });
    const [index, setIndex] = useState(0);
   useEffect(() => {
        window.scroll({ top: 0,left: 0, behaviour: "smooth" })
    }, [])
    const filters = [
        { id: "all", name: "All" },
        { id: "events", name: "Events" },
        { id: "volunteers", name: "Volunteers" },
        { id: "testimonials", name: "Testimonials" },
        { id: "workshops", name: "Workshops" },
    ];

    const filteredItems =
        activeFilter === "all"
            ? galleryData
            : galleryData.filter((item) => item.category === activeFilter);

    const closeLightbox = () => {
        setLightboxOpen(false);
        setIndex(0);
        document.body.style.overflow = "auto";
    };

    const navigateLightbox = (direction) => {
        if (direction === "next") {
            setIndex(
                (prevIndex) => (prevIndex + 1) % selectedItem.images.length
            );
        } else {
            setIndex(
                (prevIndex) => (prevIndex - 1) % selectedItem.images.length
            );
        }
    };

    const handleClickOnItem = (item) => {
        setLightboxOpen(true);
        setSelectedItem({
            id: item.id,
            title: item.title,
            images: item.images,
            description: item.description,
            category: item.category,
        });
    };
    return (
        <div className="gallery-page">
            {/* Hero Section */}
            <section className="gallery-hero">
                <div className="container">
                    <div className="gallery-hero-content">
                        <h1>Gallery</h1>
                        <p>
                            Visual highlights of our work with educators and
                            educational institutions
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Filter */}
            <section className="section gallery-filter">
                <div className="container">
                    <div className="filter-tabs">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                className={`filter-tab ${
                                    activeFilter === filter.id ? "active" : ""
                                }`}
                                onClick={() => setActiveFilter(filter.id)}
                            >
                                {filter.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Content */}
            <section className="section gallery-content">
                <div className="container">
                    {activeFilter === "all" ? (
                        <div>
                            {/* Events Section */}
                            <div className="gallery-category-section">
                                <h1 className="gallery-category-title">
                                    Events
                                </h1>
                                <div className="gallery-grid">
                                    {filteredItems.map((item) => {
                                        if (item.category === "events") {
                                            return (
                                                <div
                                                    key={item.id}
                                                    className="gallery-item"
                                                    onClick={() =>
                                                        handleClickOnItem(item)
                                                    }
                                                >
                                                    <div className="gallery-item-image">
                                                        <LazyImage
                                                            src={item.images[0]}
                                                            alt={item.title}
                                                        />
                                                    </div>
                                                    <div className="gallery-item-overlay">
                                                        <h3>{item.title}</h3>
                                                        <p className="line-clamp-2">
                                                            {item.description}
                                                        </p>
                                                        <div className="gallery-item-category">
                                                            {
                                                                filters.find(
                                                                    (f) =>
                                                                        f.id ===
                                                                        item.category
                                                                ).name
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>

                            {/* Volunteers Section */}
                            <div className="gallery-category-section">
                                <h1 className="gallery-category-title">
                                    Volunteers
                                </h1>
                                <div className="gallery-grid">
                                    {filteredItems.map((item) => {
                                        if (item.category === "volunteers") {
                                            return (
                                                <div
                                                    key={item.id}
                                                    className="gallery-item"
                                                    onClick={() =>
                                                        handleClickOnItem(item)
                                                    }
                                                >
                                                    <div className="gallery-item-image">
                                                        <LazyImage
                                                            src={item.images[0]}
                                                            alt={item.title}
                                                        />
                                                    </div>
                                                    <div className="gallery-item-overlay">
                                                        <h3>{item.title}</h3>
                                                        <p className="line-clamp-2">
                                                            {item.description}
                                                        </p>
                                                        <div className="gallery-item-category">
                                                            {
                                                                filters.find(
                                                                    (f) =>
                                                                        f.id ===
                                                                        item.category
                                                                ).name
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>

                            {/* Testimonials Section */}
                            <div className="gallery-category-section">
                                <h1 className="gallery-category-title">
                                    Testimonials
                                </h1>
                                <div className="gallery-grid">
                                    {filteredItems.map((item) => {
                                        if (item.category === "testimonials") {
                                            return (
                                                <div
                                                    key={item.id}
                                                    className="gallery-item"
                                                    onClick={() =>
                                                        handleClickOnItem(item)
                                                    }
                                                >
                                                    <div className="gallery-item-image">
                                                        <LazyImage
                                                            src={item.images[0]}
                                                            alt={item.title}
                                                        />
                                                    </div>
                                                    <div className="gallery-item-overlay">
                                                        <h3>{item.title}</h3>
                                                        <p className="line-clamp-2">
                                                            {item.description}
                                                        </p>
                                                        <div className="gallery-item-category">
                                                            {
                                                                filters.find(
                                                                    (f) =>
                                                                        f.id ===
                                                                        item.category
                                                                ).name
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>

                            {/* Workshops Section */}
                            <div className="gallery-category-section">
                                <h1 className="gallery-category-title">
                                    Workshops
                                </h1>
                                <div className="gallery-grid">
                                    {filteredItems.map((item) => {
                                        if (item.category === "workshops") {
                                            return (
                                                <div
                                                    key={item.id}
                                                    className="gallery-item"
                                                    onClick={() =>
                                                        handleClickOnItem(item)
                                                    }
                                                >
                                                    <div className="gallery-item-image">
                                                        <LazyImage
                                                            src={item.images[0]}
                                                            alt={item.title}
                                                        />
                                                    </div>
                                                    <div className="gallery-item-overlay">
                                                        <h3>{item.title}</h3>
                                                        <p className="line-clamp-2">
                                                            {item.description}
                                                        </p>
                                                        <div className="gallery-item-category">
                                                            {
                                                                filters.find(
                                                                    (f) =>
                                                                        f.id ===
                                                                        item.category
                                                                ).name
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>
                        </div>
                    ) : (
                        /*the mapping function for filtering e.g events, volunteers*/
                        <div className="gallery-grid">
                            {filteredItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="gallery-item"
                                    onClick={() => handleClickOnItem(item)}
                                >
                                    <div className="gallery-item-image">
                                        <LazyImage
                                            src={item.images[0]}
                                            alt={item.title}
                                        />
                                    </div>
                                    <div className="gallery-item-overlay">
                                        <h3>{item.title}</h3>
                                        <p className="line-clamp-2">
                                            {item.description}
                                        </p>
                                        <div className="gallery-item-category">
                                            {
                                                filters.find(
                                                    (f) =>
                                                        f.id === item.category
                                                ).name
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {filteredItems.length === 0 && (
                        <div className="no-items">
                            <p>
                                No gallery items found in this category. Please
                                check back later.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            {lightboxOpen && (
                <div className="lightbox">
                    <div
                        className="lightbox-overlay"
                        onClick={closeLightbox}
                    ></div>
                    <div className="lightbox-content">
                        <button
                            className="lightbox-close"
                            onClick={closeLightbox}
                        >
                            <i className="fas fa-times"></i>
                        </button>
                        <div className="lightbox-image">
                            <LazyImage
                                src={selectedItem.images[index]}
                                alt={selectedItem.title}
                            />
                        </div>
                        <div className="lightbox-details">
                            <h3>{selectedItem.title}</h3>
                            <p>{selectedItem.description}</p>
                            <div className="lightbox-category">
                                {/*
                                    filters.find(
                                        (f) => f.id === selectedItem.category
                                    ).name
                                */}
                                {selectedItem.category}
                            </div>
                        </div>
                        {selectedItem.category === "events" ||
                        selectedItem.category === "workshops" ? (
                            <>
                                <button
                                    className="lightbox-nav lightbox-prev"
                                    onClick={() => navigateLightbox("prev")}
                                >
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <button
                                    className="lightbox-nav lightbox-next"
                                    onClick={() => navigateLightbox("next")}
                                >
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </>
                        ) : null}
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <section className="section gallery-cta">
                <div className="container">
                    <div className="gallery-cta-content text-center">
                        <h2>Ready to Transform Your Teaching?</h2>
                        <p>
                            Join thousands of educators who have already
                            revolutionized their classrooms with our innovative
                            EdTech solutions.
                        </p>
                        <div className="gallery-cta-buttons">
                            <a href="#" className="btn btn-primary">
                                Get Started Today
                            </a>
                            <a href="#" className="btn btn-outline">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
