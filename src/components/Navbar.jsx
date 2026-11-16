import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaFileAlt, FaDownload } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'API Demo', to: 'api-playground' },
    { name: 'Terminal', to: 'terminal' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled || isOpen ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled || isOpen ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled || isOpen ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Brand Logo */}
        <Link to="hero" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--text-color)',
            }}
          >
            <span style={{ color: 'var(--accent-color)' }}>&lt;</span>
            <span>MonishGiri</span>
            <span style={{ color: 'var(--accent-color)' }}>/&gt;</span>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-only" style={{ gap: '1.25rem', alignItems: 'center' }}>
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
            >
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                style={{
                  cursor: 'pointer',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s ease',
                }}
                className="nav-link"
                onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          {/* Direct Resume Download Button */}
          <a
            href="/Monish_Giri_Resume.pdf"
            download="Monish_Giri_Resume.pdf"
            title="Directly download Monish Giri's official Resume PDF"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.85rem',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              borderRadius: '8px',
              background: 'var(--accent-color)',
              color: '#fff',
              border: '1px solid var(--accent-color)',
              cursor: 'pointer',
              boxShadow: '0 2px 10px rgba(99, 102, 241, 0.35)',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'var(--accent-hover)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'var(--accent-color)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <FaDownload style={{ fontSize: '0.75rem' }} /> Download CV
          </a>

          {/* Preview Resume Button */}
          <button
            onClick={onOpenResume}
            title="Preview interactive resume"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.45rem 0.85rem',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'var(--text-color)',
              border: '1px solid var(--card-border)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-color)';
              e.currentTarget.style.color = 'var(--accent-color)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--card-border)';
              e.currentTarget.style.color = 'var(--text-color)';
            }}
          >
            <FaFileAlt style={{ fontSize: '0.75rem' }} /> View Resume
          </button>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Actions */}
        <div className="mobile-only" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <a
            href="/Monish_Giri_Resume.pdf"
            download="Monish_Giri_Resume.pdf"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0.35rem 0.65rem',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              borderRadius: '6px',
              background: 'var(--accent-color)',
              color: '#fff',
              fontWeight: 600,
            }}
          >
            <FaDownload size={10} /> CV
          </a>
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            style={{
              background: 'transparent',
              color: 'var(--text-color)',
              display: 'flex',
              alignItems: 'center',
              padding: '0.35rem',
            }}
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              overflow: 'hidden',
              background: 'var(--card-bg)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid var(--glass-border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.25rem',
              padding: '1.75rem 0',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-color)', cursor: 'pointer' }}
              >
                {link.name}
              </Link>
            ))}

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a
                href="/Monish_Giri_Resume.pdf"
                download="Monish_Giri_Resume.pdf"
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  background: 'var(--accent-color)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}
              >
                <FaDownload /> Download Resume
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: 'var(--text-color)',
                  border: '1px solid var(--card-border)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}
              >
                <FaFileAlt /> View Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
