import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

const ContactPage = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing
    if (status.message) {
      setStatus({ type: '', message: '' });
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Name is required' });
      return false;
    }
    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Email is required' });
      return false;
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return false;
    }
    if (!formData.subject.trim()) {
      setStatus({ type: 'error', message: 'Subject is required' });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Message is required' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'info', message: 'Sending message...' });

    try {
      // EmailJS configuration - These would need to be set up by the user
      // For now, we'll provide a fallback that creates a mailto link
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.sendForm(
          serviceId,
          templateId,
          form.current,
          publicKey
        );
        
        setStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I\'ll get back to you soon.' 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback: Open default email client with pre-filled data
        const mailtoLink = `mailto:fahmed93@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
        window.location.href = mailtoLink;
        
        setStatus({ 
          type: 'info', 
          message: 'Opening your email client...' 
        });
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or email directly at fahmed93@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-background">
        <div className="contact-grid-bg"></div>
      </div>

      <header className="contact-header">
        <Link to="/" className="contact-back-link">← Back to Home</Link>
        <div className="contact-title-section">
          <h1 className="contact-title">
            <span className="contact-bracket">{'<'}</span>
            Contact
            <span className="contact-bracket">{'/>'}</span>
          </h1>
          <p className="contact-subtitle">
            <span className="contact-comment">// </span>
            Get in touch
          </p>
        </div>
      </header>

      <main className="contact-content">
        <div className="contact-form-wrapper">
          <div className="contact-terminal-header">
            <span className="contact-terminal-bullet">●</span>
            <span className="contact-terminal-bullet yellow">●</span>
            <span className="contact-terminal-bullet green">●</span>
            <span className="contact-terminal-title">sendMessage.js</span>
          </div>

          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-group">
              <label htmlFor="name" className="contact-label">
                <span className="contact-comment">// </span>Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact-input"
                placeholder="const name = 'John Doe'"
                disabled={isSubmitting}
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="email" className="contact-label">
                <span className="contact-comment">// </span>Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact-input"
                placeholder="const email = 'john@example.com'"
                disabled={isSubmitting}
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="subject" className="contact-label">
                <span className="contact-comment">// </span>Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="contact-input"
                placeholder="const subject = 'Project Inquiry'"
                disabled={isSubmitting}
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="message" className="contact-label">
                <span className="contact-comment">// </span>Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact-textarea"
                placeholder="const message = `Your message here...`"
                rows="6"
                disabled={isSubmitting}
              />
            </div>

            {status.message && (
              <div className={`contact-status ${status.type}`}>
                <span className="contact-prompt">{'>'}</span> {status.message}
              </div>
            )}

            <button 
              type="submit" 
              className="contact-submit"
              disabled={isSubmitting}
            >
              <span className="contact-bracket">{'{'}</span>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <span className="contact-bracket">{'}'}</span>
            </button>
          </form>

          <div className="contact-info">
            <p className="contact-direct">
              <span className="contact-comment">// </span>
              Or email directly at: 
              <a href="mailto:fahmed93@gmail.com" className="contact-email-link">
                fahmed93@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
