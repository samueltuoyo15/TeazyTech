const NewsletterSection = () => {
  return (
    <section className="section newsletter">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Stay Updated</h2>
            <p>
              Subscribe to our newsletter to receive the latest educational technology tips, resources, and updates
              directly to your inbox.
            </p>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn btn-accent">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection 