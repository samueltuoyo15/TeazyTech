"use client"

import { useState } from "react"
import "../styles/Gallery.css"

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)

  const filters = [
    { id: "all", name: "All" },
    { id: "workshops", name: "Workshops" },
    { id: "events", name: "Events" },
    { id: "classrooms", name: "Classrooms" },
    { id: "testimonials", name: "Testimonials" },
  ]

  const galleryItems = [
    {
      id: 1,
      title: "Teacher Workshop in New York",
      category: "workshops",
      image: "/images/gallery1.png",
      description: "Teachers learning about interactive whiteboard technology.",
    },
    {
      id: 2,
      title: "Annual EdTech Conference",
      category: "events",
      image: "/images/gallery2.png",
      description: "Teazy Tech booth at the 2023 Educational Technology Conference.",
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
      description: "Teachers practicing with tablets during a professional development session.",
    },
    {
      id: 6,
      title: "Community Technology Night",
      category: "events",
      image: "/images/gallery6.png",
      description: "Parents and teachers exploring educational technology together.",
    },
  ]

  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  const openLightbox = (item) => {
    setCurrentImage(item)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  const navigateLightbox = (direction) => {
    const currentIndex = galleryItems.findIndex((item) => item.id === currentImage.id)
    let newIndex

    if (direction === "next") {
      newIndex = (currentIndex + 1) % galleryItems.length
    } else {
      newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length
    }

    setCurrentImage(galleryItems[newIndex])
  }

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <div className="gallery-hero-content">
            <h1>Gallery</h1>
            <p>Visual highlights of our work with educators and educational institutions</p>
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
                className={`filter-tab ${activeFilter === filter.id ? "active" : ""}`}
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
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="gallery-item" onClick={() => openLightbox(item)}>
                <div className="gallery-item-image">
                  <img 
                    src={item.id === 1 ? "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" : 
                         item.id === 2 ? "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" :
                         item.id === 3 ? "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" :
                         item.id === 4 ? "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" :
                         item.id === 5 ? "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" :
                         "https://images.unsplash.com/photo-1536337005238-94b997371b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"} 
                    alt={item.title} 
                  />
                </div>
                <div className="gallery-item-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="gallery-item-category">{filters.find((f) => f.id === item.category).name}</div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="no-items">
              <p>No gallery items found in this category. Please check back later.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox">
          <div className="lightbox-overlay" onClick={closeLightbox}></div>
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="fas fa-times"></i>
            </button>
            <div className="lightbox-image">
              <img 
                src={currentImage.id === 1 ? "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" : 
                     currentImage.id === 2 ? "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" :
                     currentImage.id === 3 ? "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" :
                     currentImage.id === 4 ? "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" :
                     currentImage.id === 5 ? "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" :
                     "https://images.unsplash.com/photo-1536337005238-94b997371b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"} 
                alt={currentImage.title} 
              />
            </div>
            <div className="lightbox-details">
              <h3>{currentImage.title}</h3>
              <p>{currentImage.description}</p>
              <div className="lightbox-category">{filters.find((f) => f.id === currentImage.category).name}</div>
            </div>
            <button className="lightbox-nav lightbox-prev" onClick={() => navigateLightbox("prev")}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="lightbox-nav lightbox-next" onClick={() => navigateLightbox("next")}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section gallery-cta">
        <div className="container">
          <div className="gallery-cta-content text-center">
            <h2>Want to See More?</h2>
            <p>
              Contact us to schedule a demonstration or to learn more about how Teazy Tech can transform your
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
  )
}

export default Gallery
