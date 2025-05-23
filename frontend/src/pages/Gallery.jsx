"use client";

import { useState } from "react";
import "../styles/Gallery.css";
import galleryData from "../lib/galleryData";

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [selectedItem, setSelectedItem] = useState({
        id: "",
        title: "",
        images: [],
        description: "",
        category: "",
    });
    const [index, setIndex] = useState(0);

    const filters = [
        { id: "all", name: "All" },
        { id: "events", name: "Events" },
        { id: "volunteers", name: "Volunteers" },
        { id: "testimonials", name: "Testimonials" },
        { id: "workshops", name: "Workshops" },
    ];

    /*const galleryItems = [
        {
            id: 1,
            title: "Teacher Workshop in New York",
            category: "workshops",
            image: "/images/gallery1.png",
            description:
                "Teachers learning about interactive whiteboard technology.",
        },
        {
            id: 2,
            title: "Annual EdTech Conference",
            category: "events",
            image: "/images/gallery2.png",
            description:
                "Teazy Tech booth at the 2023 Educational Technology Conference.",
        },
        {
            id: 3,
            title: "Digital Classroom Implementation",
            category: "classrooms",
            image: "/images/gallery3.png",
            description: "Students engaging with new classroom technology.",
        },
        {
            id: 4,
            title: "Principal Testimonial Recording",
            category: "testimonials",
            image: "/images/gallery4.png",
            description: "Recording a success story with Westlake High School.",
        },
        {
            id: 5,
            title: "Hands-on Technology Training",
            category: "workshops",
            image: "/images/gallery5.png",
            description:
                "Teachers practicing with tablets during a professional development session.",
        },
        {
            id: 6,
            title: "Community Technology Night",
            category: "events",
            image: "/images/gallery6.png",
            description:
                "Parents and teachers exploring educational technology together.",
        },
    ];*/

    const filteredItems =
        activeFilter === "all"
            ? galleryData
            : galleryData.filter((item) => item.category === activeFilter);

    const openLightbox = (item) => {
        setCurrentImage(item);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setIndex(0);
        document.body.style.overflow = "auto";
    };

    const navigateLightbox = (direction) => {
        /* const currentIndex = galleryItems.findIndex(
            (item) => item.id === currentImage.id
        );
        let newIndex;

        if (direction === "next") {
            newIndex = (currentIndex + 1) % galleryItems.length;
        } else {
            newIndex =
                (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        }

        setCurrentImage(galleryItems[newIndex]);*/

        if (direction === "next") {
            setIndex((index + 1) % selectedItem.images.length);
        } else {
            setIndex((index - 1) % selectedItem.images.length);
        }
    };

    const handleClickOnItem = (item) => {
        //openLightbox(item);
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

            {/* Gallery Grid */}
            <section className="section gallery-grid-section">
                <div className="container">
                    {/*a section for visually segregating the different categories under the "all" filter*/}
                    {activeFilter === "all" ? (
                        <>
                            <div className="mb-20">
                                <h1 className="flex justify-center items-center gap-3 text-lg md:text-xl text-white my-3 mb-6">
                                    <div className="w-full border-2 border-gray-200"></div>
                                    <span className="p-2 px-4 rounded-full bg-indigo-500">
                                        Events
                                    </span>
                                    <div className="w-full border-2 border-gray-200"></div>
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
                                                        <img
                                                            src={item.images[0]}
                                                            alt={item.title}
                                                        />
                                                    </div>
                                                    <div className="gallery-item-overlay">
                                                        <h3>{item.title}</h3>
                                                        <p>
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
                                    })}
                                </div>
                            </div>

                            <div className="mb-20">
                                <h1 className="flex justify-center items-center gap-3 text-lg md:text-xl text-white my-3 mb-6">
                                    <div className="w-full border-2 border-gray-200"></div>

                                    <span className="p-2 px-4 rounded-full bg-indigo-500">
                                        Volunteers
                                    </span>
                                    <div className="w-full border-2 border-gray-200"></div>
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
                                                        <img
                                                            src={item.images[0]}
                                                            alt={item.title}
                                                        />
                                                    </div>
                                                    <div className="gallery-item-overlay">
                                                        <h3>{item.title}</h3>
                                                        <p>
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
                                    })}
                                </div>
                            </div>

                            <div className="mb-20">
                                <h1 className="flex justify-center items-center gap-3 text-lg md:text-xl text-white my-3 mb-6">
                                    <div className="w-full border-2 border-gray-200"></div>
                                    <span className="p-2 px-4 rounded-full bg-indigo-500">
                                        Testimonials
                                    </span>
                                    <div className="w-full border-2 border-gray-200"></div>
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
                                                        <img
                                                            src={item.images[0]}
                                                            alt={item.title}
                                                        />
                                                    </div>
                                                    <div className="gallery-item-overlay">
                                                        <h3>{item.title}</h3>
                                                        <p>
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
                                    })}
                                </div>
                            </div>

                            <div className="mb-20">
                                <h1 className="flex justify-center items-center gap-3 text-lg md:text-xl text-white my-3 mb-6">
                                    <div className="w-full border-2 border-gray-200"></div>
                                    <span className="p-2 px-4 rounded-full bg-indigo-500">
                                        Workshops
                                    </span>
                                    <div className="w-full border-2 border-gray-200"></div>
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
                                                        <img
                                                            src={item.images[0]}
                                                            alt={item.title}
                                                        />
                                                    </div>
                                                    <div className="gallery-item-overlay">
                                                        <h3>{item.title}</h3>
                                                        <p>
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
                                    })}
                                </div>
                            </div>
                        </>
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
                                        <img
                                            src={item.images[0]}
                                            alt={item.title}
                                        />
                                    </div>
                                    <div className="gallery-item-overlay">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
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
                            <img
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
                        {selectedItem.category === "events" && (
                            <button
                                className="lightbox-nav lightbox-prev"
                                onClick={() => navigateLightbox("prev")}
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>
                        )}
                        {selectedItem.category === "events" && (
                            <button
                                className="lightbox-nav lightbox-next"
                                onClick={() => navigateLightbox("next")}
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <section className="section gallery-cta">
                <div className="container">
                    <div className="gallery-cta-content text-center">
                        <h2>Want to See More?</h2>
                        <p>
                            Contact us to schedule a demonstration or to learn
                            more about how Teazy Tech can transform your
                            educational environment.
                        </p>
                        <div className="gallery-cta-buttons">
                            <a href="/contact" className="btn btn-primary">
                                Contact Us
                            </a>
                            <a href="/services" className="btn btn-outline">
                                Explore Our Services
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
