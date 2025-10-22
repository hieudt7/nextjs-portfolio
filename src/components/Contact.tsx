'use client';

import { useAOS } from '@/libs/aos';
import { BrandFacebook, BrandGithub, BrandLinkedin } from '@mynaui/icons-react';
import * as React from 'react';

export default function Contact() {
  useAOS();

  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(previous => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
    // TODO: Implement form submission logic
  };

  return (
    <>
      <section id="contact" className="profile-contact pb-[90px] pt-[120px]" data-id="profile-contact">
        <div className="contact-container mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Column - Contact Form */}
            <div className="contact-form-section" data-aos="fade-right" data-aos-delay="0">
              <h2 className="contact-title mb-6 text-4xl font-bold text-white">
                Let's work together!
              </h2>
              <p className="contact-description mb-8 text-lg text-gray-300">
                I design and code beautifully simple things and i love what i do. Just simple like that!
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows={4}
                    required
                  />
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column - Contact Information */}
            <div className="contact-info-section" data-aos="fade-left" data-aos-delay="100">
              <p className="contact-intro mb-8 text-lg text-gray-300">
                I'm currently available to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7.
              </p>

              {/* <div className="contact-details space-y-4" data-aos="fade-up" data-aos-delay="200">
                <a href="tel:+84378063585" className="contact-item">
                  +84 378 063 585
                </a>
                <a href="mailto:hieudtx9@gmail.com" className="contact-item">
                  hieudtx9@gmail.com
                </a>
                <address className="contact-item not-italic">
                  Cau Dien, Ha Noi, Viet Nam
                </address>
              </div> */}

              <div className="social-links mt-12">
                <div className="social-icons flex gap-4">
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <span className="icon"><BrandFacebook /></span>
                  </a>
                  <a href="#" className="social-icon" aria-label="Github">
                    <span className="icon"><BrandGithub /></span>
                  </a>
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <span className="icon"><BrandLinkedin /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
