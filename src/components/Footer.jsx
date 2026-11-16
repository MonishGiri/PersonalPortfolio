import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer = ({ onOpenResume }) => {
  return (
    <footer
      style={{
        padding: '4rem 2rem 2.5rem',
        background: 'var(--secondary-bg)',
        borderTop: '1px solid var(--card-border)',
        marginTop: '2rem',
      }}
    >
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {/* Left: Brand & Tagline */}
          <div>
            <div
              style={{
                fontSize: '1.4rem',
                fontWeight: 800,
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-color)',
                marginBottom: '0.4rem',
              }}
            >
              <span style={{ color: 'var(--accent-color)' }}>&lt;</span>
              <span>MonishGiri</span>
              <span style={{ color: 'var(--accent-color)' }}>/&gt;</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '420px', margin: 0 }}>
              Full Stack Software Engineer building robust RESTful architectures, accessible React components, and AI-powered web solutions.
            </p>
          </div>

          {/* Center/Right: Navigation Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <Link to="about" smooth={true} duration={500} offset={-70} style={{ cursor: 'pointer' }}>
              About
            </Link>
            <Link to="skills" smooth={true} duration={500} offset={-70} style={{ cursor: 'pointer' }}>
              Skills
            </Link>
            <Link to="experience" smooth={true} duration={500} offset={-70} style={{ cursor: 'pointer' }}>
              Experience
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-70} style={{ cursor: 'pointer' }}>
              Projects
            </Link>
            <Link to="education" smooth={true} duration={500} offset={-70} style={{ cursor: 'pointer' }}>
              Education
            </Link>
            <Link to="api-playground" smooth={true} duration={500} offset={-70} style={{ cursor: 'pointer' }}>
              API Demo
            </Link>
            <a
              href="/Monish_Giri_Resume.pdf"
              download="Monish_Giri_Resume.pdf"
              style={{
                color: 'var(--accent-color)',
                fontSize: '0.9rem',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Download Resume
            </a>
            <button
              onClick={onOpenResume}
              style={{
                background: 'transparent',
                color: 'var(--text-secondary)',
                fontFamily: 'inherit',
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              View Resume
            </button>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '1.25rem', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              onMouseOver={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              onMouseOver={(e) => (e.currentTarget.style.color = '#0077b5')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--card-border)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Monish Giri. Designed for Software Engineering excellence.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="status-beacon" /> WCAG 2.1 AA Semantic Standard
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
