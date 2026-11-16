import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload, FaPrint, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { personalInfo, experiences, projects, education } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = (e) => {
    if (e) e.stopPropagation();
    const link = document.createElement('a');
    link.href = '/Monish_Giri_Resume.pdf';
    link.download = 'Monish_Giri_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    // Automatically trigger download as requested, then trigger print view
    handleDownload();
    setTimeout(() => {
      window.print();
    }, 350);
  };

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(0.5rem, 2vw, 1.25rem)',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(8px)',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text-color)',
            border: '1px solid var(--card-border)',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '850px',
            maxHeight: '94vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
          }}
        >
          {/* Modal Header */}
          <div
            style={{
              padding: '1rem 1.25rem',
              borderBottom: '1px solid var(--card-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--secondary-bg)',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span className="status-beacon" />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>
                Monish Giri — Resume
              </h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              {/* Direct Download Button */}
              <a
                href="/Monish_Giri_Resume.pdf"
                download="Monish_Giri_Resume.pdf"
                onClick={handleDownload}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.95rem',
                  fontSize: '0.85rem',
                  borderRadius: '8px',
                  background: 'var(--accent-color)',
                  color: '#fff',
                  fontWeight: 600,
                  boxShadow: '0 2px 10px rgba(99, 102, 241, 0.3)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
              >
                <FaDownload style={{ fontSize: '0.8rem' }} /> Download PDF
              </a>

              {/* Print / Save View */}
              <button
                onClick={handlePrint}
                title="Automatically downloads and opens print preview"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.9rem',
                  fontSize: '0.85rem',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--text-color)',
                  border: '1px solid var(--card-border)',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                <FaPrint style={{ fontSize: '0.8rem' }} /> Print / Save
              </button>

              <button
                onClick={onClose}
                aria-label="Close modal"
                style={{
                  background: 'transparent',
                  color: 'var(--text-secondary)',
                  fontSize: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.25rem',
                  cursor: 'pointer',
                }}
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Modal Body / Resume Document */}
          <div
            style={{
              overflowY: 'auto',
              padding: 'clamp(1rem, 3.5vw, 2rem)',
              fontFamily: 'var(--font-main)',
              fontSize: '0.92rem',
              lineHeight: 1.6,
            }}
          >
            {/* Resume Header */}
            <div style={{ textAlign: 'center', borderBottom: '2px solid rgba(99, 102, 241, 0.3)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
              <h1 style={{ fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-0.02em', color: 'var(--text-color)', marginBottom: '0.25rem' }}>
                MONISH GIRI
              </h1>
              <div style={{ fontSize: '1.15rem', color: 'var(--accent-color)', fontWeight: 600, marginBottom: '0.75rem' }}>
                Software Engineer
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <span><FaMapMarkerAlt style={{ marginRight: '4px' }} /> {personalInfo.location}</span>
                <span><FaPhoneAlt style={{ marginRight: '4px' }} /> {personalInfo.phone}</span>
                <span><FaEnvelope style={{ marginRight: '4px' }} /> {personalInfo.email}</span>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)' }}>
                  <FaGithub style={{ marginRight: '4px' }} /> github.com/monishgiri
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)' }}>
                  <FaLinkedin style={{ marginRight: '4px' }} /> linkedin.com/in/monish-giri-a39145120
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-color)', fontSize: '0.95rem', fontWeight: 700, borderBottom: '1px solid var(--card-border)', paddingBottom: '0.35rem', marginBottom: '0.65rem' }}>
                Professional Summary
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>{personalInfo.summary}</p>
            </div>

            {/* Technical Skills */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-color)', fontSize: '0.95rem', fontWeight: 700, borderBottom: '1px solid var(--card-border)', paddingBottom: '0.35rem', marginBottom: '0.65rem' }}>
                Technical Skills
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem', fontSize: '0.88rem' }}>
                <div><strong>Frontend:</strong> React.js, Redux Toolkit, HTML5, CSS3, ES6+, Tailwind CSS, Bootstrap</div>
                <div><strong>Backend:</strong> Node.js, Express.js, Java Spring Boot, Hibernate, REST APIs, JWT, MVC</div>
                <div><strong>Databases:</strong> MySQL, MongoDB, Mongoose ORM</div>
                <div><strong>Languages:</strong> JavaScript (ES6+), Java, SQL</div>
                <div><strong>Tools & DevOps:</strong> Git, GitHub Copilot, Postman, VS Code, DevTools, Linux (Ubuntu)</div>
                <div><strong>Methodologies:</strong> Agile/Scrum, WCAG 2.1 AA, ARIA, CI/CD basics</div>
              </div>
            </div>

            {/* Experience */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-color)', fontSize: '0.95rem', fontWeight: 700, borderBottom: '1px solid var(--card-border)', paddingBottom: '0.35rem', marginBottom: '0.65rem' }}>
                Professional Experience
              </h4>
              {experiences.map((exp, idx) => (
                <div key={idx} style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontWeight: 700, fontSize: '0.95rem' }}>
                    <span>{exp.role} — <span style={{ color: 'var(--accent-color)' }}>{exp.company}</span></span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{exp.period}</span>
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{exp.location}</div>
                  <ul style={{ paddingLeft: '1.25rem', margin: 0, color: 'var(--text-secondary)' }}>
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} style={{ marginBottom: '0.35rem' }}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Key Projects */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-color)', fontSize: '0.95rem', fontWeight: 700, borderBottom: '1px solid var(--card-border)', paddingBottom: '0.35rem', marginBottom: '0.65rem' }}>
                Key Projects
              </h4>
              {projects.map((proj, idx) => (
                <div key={idx} style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', fontWeight: 700, fontSize: '0.95rem', gap: '0.5rem' }}>
                    <span>{proj.title} <span style={{ fontWeight: 400, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>| {proj.tech.slice(0, 5).join(', ')}</span></span>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      {proj.demo && (
                        <a href={proj.demo} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} /> Live Demo
                        </a>
                      )}
                      {proj.github && (
                        <a href={proj.github} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <FaGithub style={{ fontSize: '0.8rem' }} /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                  <ul style={{ paddingLeft: '1.25rem', margin: '0.35rem 0 0 0', color: 'var(--text-secondary)' }}>
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx} style={{ marginBottom: '0.3rem' }}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education & Certifications */}
            <div>
              <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-color)', fontSize: '0.95rem', fontWeight: 700, borderBottom: '1px solid var(--card-border)', paddingBottom: '0.35rem', marginBottom: '0.65rem' }}>
                Education & Certifications
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)' }}>
                {education.map((edu, idx) => (
                  <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
                    <span>
                      <strong>{edu.degree}</strong> – {edu.institution} {edu.location ? `, ${edu.location}` : ''}
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{edu.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
