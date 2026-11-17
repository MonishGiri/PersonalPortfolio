import { motion, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaCode, FaCheck, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const roles = [
  'Full Stack Software Engineer',
  'Node.js & Express.js Specialist',
  'React.js & Redux Architecture',
  'Java Spring Boot & REST APIs'
];

const Hero = ({ onOpenResume }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 45, damping: 18 });
  const mouseY = useSpring(y, { stiffness: 45, damping: 18 });

  const [activeTab, setActiveTab] = useState('code');
  const [typedRole, setTypedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedRole(current.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setTypedRole(current.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const targetX = e.clientX - window.innerWidth / 2;
      const targetY = e.clientY - window.innerHeight / 2;
      x.set(targetX / 45);
      y.set(targetY / 45);
    };

    if (window.matchMedia('(min-width: 768px)').matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <section
      id="hero"
      className="bg-dev-grid"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        padding: '7.5rem 0 4rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Animated Glows */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <motion.div
        style={{
          x: useTransform(mouseX, (v) => v * -0.6),
          y: useTransform(mouseY, (v) => v * -0.6),
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="grid-2" style={{ alignItems: 'center' }}>
          {/* Left Column: Hero Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status Beacon */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '9999px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  fontSize: '0.82rem',
                  color: 'var(--accent-emerald)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                }}
              >
                <span className="status-beacon" /> Available for Opportunities
              </span>
            </div>

            {/* Intro Greeting */}
            <h2
              style={{
                fontSize: '1.15rem',
                color: 'var(--accent-color)',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                marginBottom: '0.5rem',
              }}
            >
              Hi, my name is
            </h2>

            {/* Name */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '0.75rem',
                color: 'var(--text-color)',
              }}
            >
              {personalInfo.name}
            </h1>

            {/* Dynamic Role */}
            <div
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                color: 'var(--text-secondary)',
                fontWeight: 600,
                marginBottom: '1.5rem',
                minHeight: '2.5rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>{typedRole}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '1.3em',
                  background: 'var(--accent-cyan)',
                  marginLeft: '4px',
                  animation: 'beacon-pulse 1s infinite',
                }}
              />
            </div>

            {/* Summary */}
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2.25rem',
                maxWidth: '560px',
              }}
            >
              {personalInfo.summary}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center', marginBottom: '2.5rem' }}>
              <Link to="projects" smooth={true} duration={500} offset={-70}>
                <button
                  style={{
                    padding: '0.85rem 1.6rem',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    borderRadius: '10px',
                    background: 'var(--accent-color)',
                    color: '#fff',
                    boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
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
                  Explore Projects
                </button>
              </Link>

              {/* Direct Resume Download */}
              <a
                href="/Monish_Giri_Resume.pdf"
                download="Monish_Giri_Resume.pdf"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.85rem 1.4rem',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  borderRadius: '10px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  color: 'var(--accent-color)',
                  border: '1px solid rgba(99, 102, 241, 0.35)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.25s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--accent-color)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(99, 102, 241, 0.15)';
                  e.currentTarget.style.color = 'var(--accent-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaDownload style={{ fontSize: '0.8rem' }} /> Download CV
              </a>

              <button
                onClick={onOpenResume}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.85rem 1.3rem',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--text-color)',
                  border: '1px solid var(--card-border)',
                  backdropFilter: 'blur(8px)',
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
                <FaFileAlt style={{ color: 'var(--accent-color)' }} /> View Resume
              </button>

              <Link to="contact" smooth={true} duration={500} offset={-70}>
                <button
                  style={{
                    padding: '0.85rem 1rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    borderRadius: '10px',
                    background: 'transparent',
                    color: 'var(--text-secondary)',
                    border: '1px solid transparent',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = 'var(--accent-color)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  Contact ➜
                </button>
              </Link>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: 'var(--text-secondary)' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                style={{ fontSize: '1.35rem', transition: 'color 0.2s ease' }}
                onMouseOver={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                style={{ fontSize: '1.35rem', transition: 'color 0.2s ease' }}
                onMouseOver={(e) => (e.currentTarget.style.color = '#0077b5')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Address"
                style={{ fontSize: '1.35rem', transition: 'color 0.2s ease' }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <FaEnvelope />
              </a>
              <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                📍 {personalInfo.location}
              </span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Developer Object / Code Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="code-window">
              {/* Window Header with Tabs */}
              <div className="code-header">
                <div className="code-dots">
                  <span className="code-dot red" />
                  <span className="code-dot yellow" />
                  <span className="code-dot green" />
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem' }}>
                  <button
                    onClick={() => setActiveTab('code')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '6px',
                      background: activeTab === 'code' ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                      color: activeTab === 'code' ? 'var(--accent-color)' : 'var(--text-muted)',
                      border: 'none',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <FaCode /> developer.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('highlights')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '6px',
                      background: activeTab === 'highlights' ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                      color: activeTab === 'highlights' ? 'var(--accent-color)' : 'var(--text-muted)',
                      border: 'none',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <FaCheck /> specs.json
                  </button>
                </div>
                <div style={{ width: '40px' }} />
              </div>

              {/* Code Body */}
              <div
                style={{
                  padding: 'clamp(0.85rem, 3vw, 1.5rem)',
                  fontSize: 'clamp(0.72rem, 2.2vw, 0.88rem)',
                  lineHeight: 1.6,
                  overflowX: 'auto',
                }}
              >
                {activeTab === 'code' ? (
                    <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                      <span style={{ color: '#ec4899' }}>const</span> <span style={{ color: '#38bdf8' }}>developer</span>:{' '}
                      <span style={{ color: '#f59e0b' }}>FullStackEngineer</span> = &#123;{'\n'}
                      {'  '}name: <span style={{ color: '#a7f3d0' }}>'{personalInfo.name}'</span>,{'\n'}
                      {'  '}currentRole: <span style={{ color: '#a7f3d0' }}>'Software Engineer @ Q2A Media'</span>,{'\n'}
                      {'  '}coreStack: &#91;{'\n'}
                      {'    '}<span style={{ color: '#67e8f9' }}>'Node.js'</span>, <span style={{ color: '#67e8f9' }}>'Express.js'</span>, <span style={{ color: '#67e8f9' }}>'React.js'</span>,{'\n'}
                      {'    '}<span style={{ color: '#67e8f9' }}>'MongoDB'</span>, <span style={{ color: '#67e8f9' }}>'Java Spring Boot'</span>, <span style={{ color: '#67e8f9' }}>'REST APIs'</span>{'\n'}
                      {'  '}&#93;,{'\n'}
                      {'  '}featuredWork: &#91;{'\n'}
                      {'    '}<span style={{ color: '#fde047' }}>'Excel Pixel (Dubai) LMS'</span>,{'\n'}
                      {'    '}<span style={{ color: '#fde047' }}>'AI Mock-Interview Platform'</span>{'\n'}
                      {'  '}&#93;,{'\n'}
                      {'  '}methodologies: &#91;<span style={{ color: '#a7f3d0' }}>'WCAG 2.1 AA'</span>, <span style={{ color: '#a7f3d0' }}>'Agile'</span>, <span style={{ color: '#a7f3d0' }}>'CI/CD'</span>&#93;,{'\n'}
                      {'  '}availableForHire: <span style={{ color: '#4ade80' }}>true</span>,{'\n'}
                      {'  '}buildSolution: (<span style={{ color: '#cbd5e1' }}>specs</span>) =&gt; &#123;{'\n'}
                      {'    '}<span style={{ color: '#ec4899' }}>return</span> <span style={{ color: '#38bdf8' }}>shipAccessibleScalableSystems</span>(specs);{'\n'}
                      {'  '}&#125;{'\n'}
                      &#125;;
                    </pre>
                    ) : (
                      <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                        &#123;{'\n'}
                        {'  '}<span style={{ color: '#38bdf8' }}>"engineer"</span>: <span style={{ color: '#a7f3d0' }}>"{personalInfo.name}"</span>,{'\n'}
                        {'  '}<span style={{ color: '#38bdf8' }}>"experience"</span>: <span style={{ color: '#a7f3d0' }}>"1+ Years"</span>,{'\n'}
                        {'  '}<span style={{ color: '#38bdf8' }}>"apisDelivered"</span>: <span style={{ color: '#f59e0b' }}>20</span>,{'\n'}
                        {'  '}<span style={{ color: '#38bdf8' }}>"stateBoilerplateReduction"</span>: <span style={{ color: '#4ade80' }}>"30%"</span>,{'\n'}
                        {'  '}<span style={{ color: '#38bdf8' }}>"copilotScaffoldingSpeedup"</span>: <span style={{ color: '#4ade80' }}>"20%"</span>,{'\n'}
                        {'  '}<span style={{ color: '#38bdf8' }}>"accessibilityCompliance"</span>: <span style={{ color: '#a7f3d0' }}>"WCAG 2.1 AA"</span>,{'\n'}
                        {'  '}<span style={{ color: '#38bdf8' }}>"degree"</span>: <span style={{ color: '#a7f3d0' }}>"MCA (Dec 2024)"</span>{'\n'}
                        &#125;
                      </pre>
                )}
                    </div>
                  </div>
          </motion.div>
            </div>

            {/* Stats Metrics Strip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                marginTop: '3.5rem',
                padding: '1.25rem 1rem',
                borderRadius: '16px',
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                backdropFilter: 'blur(12px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1rem',
                textAlign: 'center',
              }}
            >
              {personalInfo.stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    padding: '0.5rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.02)',
                  }}
                >
                  <div
                    style={{
                      fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                      fontWeight: 900,
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-color)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500, lineHeight: 1.3 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
        </div>
    </section>
  );
};

export default Hero;
