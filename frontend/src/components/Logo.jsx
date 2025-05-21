const Logo = ({ variant = "default" }) => {
  if (variant === "icon") {
    return (
      <div className="logo">
        <img src="/images/logo/teazy-tech-logo-icon.png" alt="Teazy Tech Logo" width="40" height="40" />
      </div>
    )
  }

  if (variant === "icon-light") {
    return (
      <div className="logo">
        <img src="/images/logo/teazy-tech-logo-icon-light.png" alt="Teazy Tech Logo" width="40" height="40" />
      </div>
    )
  }

  if (variant === "icon-black") {
    return (
      <div className="logo">
        <img src="/images/logo/teazy-tech-logo-icon-black.png" alt="Teazy Tech Logo" width="40" height="40" />
      </div>
    )
  }

  return (
    <div className="logo">
      <img src="/images/logo/teazy-tech-logo.png" alt="Teazy Tech Logo" height="40" />
    </div>
  )
}

export default Logo
