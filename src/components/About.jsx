import { motion } from 'framer-motion';
import { FaFileAlt, FaDownload, FaServer, FaUniversalAccess, FaBrain, FaRocket, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const About = ({ onOpenResume }) => {
  const pillars = [
    {
      icon: <FaServer style={{ color: 'var(--accent-color)' }} />,
      title: 'REST APIs & Backend Security',
      desc: 'Expertise in Node.js, Express.js, Java Spring Boot, and MongoDB. Proven track record designing 20+ secure endpoints with JWT, role-based authorization, and centralized error handling.'
    },
    {
      icon: <FaUniversalAccess style={{ color: 'var(--accent-emerald)' }} />,
      title: 'WCAG 2.1 AA & Accessible React',
      desc: 'Crafting responsive, semantic frontend architectures using React.js and Redux Toolkit. Reduced state management boilerplate by 30% while guaranteeing strict accessibility standards.'
    },
    {
      icon: <FaBrain style={{ color: 'var(--accent-cyan)' }} />,
      title: 'AI & Next-Gen Integrations',
      desc: 'Engineered an interactive mock-interview platform leveraging Google Gemini API and Web Speech API for real-time voice transcription, resume parsing, and automated Puppeteer PDF reports.'
    },
    {
      icon: <FaRocket style={{ color: 'var(--accent-amber)' }} />,
      title: 'Agile & AI-Assisted Velocity',
      desc: 'Working in fast-paced Agile sprints with UI/UX and QA teams. Leveraging GitHub Copilot and ChatGPT for scaffolding and test drafts, speeding up feature delivery by 20%.'
    }
  ];

  return (
    <section id="about" className="container" style={{ padding: '6rem 2rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="dev-badge" style={{ marginBottom: '0.75rem' }}>
            <FaCode /> Engineer Bio
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Bridging resilient backend architectures with accessible, high-performance user interfaces.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'flex-start', marginBottom: '4rem' }}>
          {/* Left Column: Visual Profile Card */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '360px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'var(--secondary-bg)',
                  border: '1px solid var(--card-border)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <img
                  src="/assets/profile.png"
                  alt="Monish Giri - Software Engineer"
                  style={{
                    width: '100%',
                    height: '380px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  onError={(e) => {
                    // Fallback in case image is missing
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Tech Badge overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.25rem',
                    background: 'linear-gradient(to top, rgba(11, 15, 25, 0.95), transparent)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                  }}
                >
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>Monish Giri</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>
                    Software Engineer @ Q2A Media
                  </span>
                </div>
              </div>

              {/* Offset glowing border accent */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '20px',
                  border: '2px solid var(--accent-color)',
                  transform: 'translate(12px, 12px)',
                  zIndex: 1,
                  opacity: 0.6,
                }}
              />
            </div>

            {/* Quick Specs Pill Grid */}
            <div
              style={{
                marginTop: '2.5rem',
                width: '100%',
                maxWidth: '360px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '0.75rem',
              }}
            >
              <div
                style={{
                  padding: '0.75rem',
                  borderRadius: '10px',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  fontSize: '0.82rem',
                }}
              >
                <div style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.25rem' }}>
                  <FaMapMarkerAlt /> Location
                </div>
                <div style={{ fontWeight: 600, color: 'var(--text-color)' }}>New Delhi, India</div>
              </div>

              <div
                style={{
                  padding: '0.75rem',
                  borderRadius: '10px',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  fontSize: '0.82rem',
                }}
              >
                <div style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.25rem' }}>
                  <FaBriefcase /> Experience
                </div>
                <div style={{ fontWeight: 600, color: 'var(--text-color)' }}>1+ Years (Active)</div>
              </div>

              <div
                style={{
                  padding: '0.75rem',
                  borderRadius: '10px',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  fontSize: '0.82rem',
                }}
              >
                <div style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.25rem' }}>
                  <FaGraduationCap /> Degree
                </div>
                <div style={{ fontWeight: 600, color: 'var(--text-color)' }}>MCA (Dec 2024)</div>
              </div>

              <div
                style={{
                  padding: '0.75rem',
                  borderRadius: '10px',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  fontSize: '0.82rem',
                }}
              >
                <div style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.25rem' }}>
                  <FaServer /> Primary Stack
                </div>
                <div style={{ fontWeight: 600, color: 'var(--text-color)' }}>MERN & Spring Boot</div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Technical Highlights */}
          <div>
            <h3
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
                color: 'var(--text-color)',
                lineHeight: 1.3,
              }}
            >
              Engineering robust, production-grade applications with clean code & modern architectures.
            </h3>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1.02rem' }}>
              I am a <strong>Full Stack Software Engineer</strong> currently building and scaling digital products at{' '}
              <strong style={{ color: 'var(--accent-color)' }}>Q2A Media Services Pvt. Ltd.</strong> in Noida. My daily work revolves around architecting RESTful services in Node.js and Express.js, designing normalized MongoDB schemas in Ubuntu Linux environments, and crafting accessible, WCAG 2.1 AA-compliant React interfaces.
            </p>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1.02rem' }}>
              Notable accomplishments include shipping core features for the international <strong>Excel Pixel LMS (Dubai)</strong> platform—such as interactive video-timeline annotations, user authentication, and real-time progress tracking—as well as building an <strong>AI Mock-Interview Platform</strong> on Google Gemini API featuring real-time speech recognition.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a
                href="/Monish_Giri_Resume.pdf"
                download="Monish_Giri_Resume.pdf"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.6rem',
                  background: 'var(--accent-color)',
                  color: '#fff',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 15px rgba(99, 102, 241, 0.35)',
                  transition: 'all 0.25s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--accent-hover)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'var(--accent-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaDownload /> Download Resume
              </a>

              <button
                onClick={onOpenResume}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.4rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--text-color)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  transition: 'all 0.25s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-color)';
                  e.currentTarget.style.color = 'var(--accent-color)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.color = 'var(--text-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaFileAlt /> View Resume
              </button>

              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.5rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--text-color)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  transition: 'all 0.25s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-color)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Discuss Opportunities ➜
              </a>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
            >
              <div style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>{item.icon}</div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-color)' }}>{item.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
