import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaCopy,
  FaCheck,
  FaPaperPlane,
  FaComments
} from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Software Engineer Role',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const subjects = [
    'Software Engineer Role',
    'Full Stack Opportunity',
    'API / Backend Project',
    'Tech Discussion'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open user's email client pre-filled
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Contact - ${formData.subject}] from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Monish,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.subject}\n\nMessage:\n${formData.message}\n`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: 'Software Engineer Role',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="container" style={{ padding: '6rem 2rem 4rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="dev-badge" style={{ marginBottom: '0.75rem' }}>
            <FaComments /> Get Connected
          </div>
          <h2 className="section-title">Let's Build Something Great</h2>
          <p className="section-subtitle">
            Open to full-time Software Engineer positions, architectural collaborations, or high-impact engineering discussions.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'flex-start', maxWidth: '1100px', margin: '0 auto' }}>
          {/* Left Column: Direct Contact Info & Developer Availability */}
          <div>
            <div className="card" style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span className="status-beacon" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--text-color)' }}>
                  Current Availability
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Currently active as a Software Engineer at Q2A Media Services and open to new full-stack / backend engineering opportunities in New Delhi, NCR, remote, or relocation.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Email Box */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--card-border)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden' }}>
                    <FaEnvelope style={{ color: 'var(--accent-color)', fontSize: '1.1rem', flexShrink: 0 }} />
                    <div style={{ overflow: 'hidden' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Email</div>
                      <div
                        style={{
                          fontSize: '0.9rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-color)',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {personalInfo.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    title="Copy Email"
                    style={{
                      padding: '0.4rem 0.75rem',
                      borderRadius: '6px',
                      background: 'rgba(99, 102, 241, 0.15)',
                      color: 'var(--accent-color)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                    }}
                  >
                    {copiedField === 'email' ? <><FaCheck /> Copied</> : <><FaCopy /> Copy</>}
                  </button>
                </div>

                {/* Phone Box */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--card-border)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <FaPhoneAlt style={{ color: 'var(--accent-emerald)', fontSize: '1.1rem', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Phone / WhatsApp</div>
                      <div style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', color: 'var(--text-color)' }}>
                        {personalInfo.phone}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    title="Copy Phone"
                    style={{
                      padding: '0.4rem 0.75rem',
                      borderRadius: '6px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: 'var(--accent-emerald)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                    }}
                  >
                    {copiedField === 'phone' ? <><FaCheck /> Copied</> : <><FaCopy /> Copy</>}
                  </button>
                </div>

                {/* Location Box */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--card-border)',
                  }}
                >
                  <FaMapMarkerAlt style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-color)', fontWeight: 600 }}>
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    flex: '1 1 140px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.85rem',
                    borderRadius: '10px',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    color: 'var(--text-color)',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.borderColor = 'var(--accent-color)')}
                  onMouseOut={(e) => (e.currentTarget.style.borderColor = 'var(--card-border)')}
                >
                  <FaGithub size={18} /> GitHub Profile
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    flex: '1 1 140px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.85rem',
                    borderRadius: '10px',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    color: 'var(--text-color)',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.borderColor = '#0077b5')}
                  onMouseOut={(e) => (e.currentTarget.style.borderColor = 'var(--card-border)')}
                >
                  <FaLinkedin size={18} color="#0077b5" /> LinkedIn Connect
                </a>
              </div>
            </div>

            {/* Right Column: Direct Messaging Form */}
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-color)' }}>
                Send a Direct Message
              </h3>

              {submitted && (
                <div
                  style={{
                    padding: '0.75rem 1rem',
                    marginBottom: '1rem',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid var(--accent-emerald)',
                    color: 'var(--accent-emerald)',
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <FaCheck /> Email client opened with your message. Talk soon!
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(0, 0, 0, 0.2)',
                      border: '1px solid var(--card-border)',
                      color: 'var(--text-color)',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(0, 0, 0, 0.2)',
                      border: '1px solid var(--card-border)',
                      color: 'var(--text-color)',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Topic / Purpose
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {subjects.map((sub) => {
                      const isSelected = formData.subject === sub;
                      return (
                        <button
                          type="button"
                          key={sub}
                          onClick={() => setFormData({ ...formData, subject: sub })}
                          style={{
                            padding: '0.35rem 0.75rem',
                            borderRadius: '6px',
                            fontSize: '0.78rem',
                            background: isSelected ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.05)',
                            color: isSelected ? '#fff' : 'var(--text-secondary)',
                            border: isSelected ? '1px solid var(--accent-color)' : '1px solid var(--card-border)',
                          }}
                        >
                          {sub}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Share details about the role, project, or schedule a quick technical interview..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(0, 0, 0, 0.2)',
                      border: '1px solid var(--card-border)',
                      color: 'var(--text-color)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.9rem 1.5rem',
                    borderRadius: '10px',
                    background: 'var(--accent-color)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.35)',
                    transition: 'all 0.25s ease',
                    marginTop: '0.5rem',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = 'var(--accent-hover)')}
                  onMouseOut={(e) => (e.currentTarget.style.background = 'var(--accent-color)')}
                >
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </div>
          </div>
      </motion.div>
    </section>
  );
};

export default Contact;
