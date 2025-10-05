import Image from 'next/image';
import * as React from 'react';

export default function Header() {
  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Header becomes sticky when scrolled past 50px
      setIsSticky(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isSticky ? 'sticky-active' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          {/* Left Section - Logo + Email */}
          <div className="header-left">
            <div className="logo-section">
              <div className="logo-icon">
                <Image
                  src="/assets/images/logo_H_transparent.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="logo-image"
                />
              </div>
              <div className="logo-email">
                <a href="mailto:hieudtx9@gmail.com" className="email-link">
                  hieudtx9@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Center Section - Navigation */}
          <nav className="header-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#works" className="nav-link">
                  Works
                </a>
              </li>
              <li className="nav-item">
                <a href="#resume" className="nav-link">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#testimonials" className="nav-link">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Section - CTA Button */}
          <div className="header-right">
            <a href="#contact" className="hire-button">
              Hire me!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
