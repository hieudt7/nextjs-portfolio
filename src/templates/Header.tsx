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

  // Smooth scroll function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80; // Adjust based on your header height
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

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
                <a
                  href="#services"
                  className="nav-link"
                  onClick={e => handleSmoothScroll(e, 'services')}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#works"
                  className="nav-link"
                  onClick={e => handleSmoothScroll(e, 'works')}
                >
                  Works
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#resume"
                  className="nav-link"
                  onClick={e => handleSmoothScroll(e, 'resume')}
                >
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#skills"
                  className="nav-link"
                  onClick={e => handleSmoothScroll(e, 'skills')}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#testimonials"
                  className="nav-link"
                  onClick={e => handleSmoothScroll(e, 'testimonials')}
                >
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  className="nav-link"
                  onClick={e => handleSmoothScroll(e, 'contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Section - CTA Button */}
          <div className="header-right">
            <a
              href="#contact"
              className="hire-button"
              onClick={e => handleSmoothScroll(e, 'contact')}
            >
              Hire me!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
