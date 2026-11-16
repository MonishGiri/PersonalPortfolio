import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaLayerGroup } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'ai') return p.id === 'ai-interview';
    if (filter === 'backend') return p.id === 'social-media-backend';
    if (filter === 'enterprise') return p.id === 'excel-pixel-lms';
    return true;
  });

  return (
    <section id="projects" className="container" style={{ padding: '6rem 2rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="dev-badge" style={{ marginBottom: '0.75rem' }}>
            <FaLayerGroup /> Featured Engineering
          </div>
          <h2 className="section-title">Key Projects & Systems</h2>
          <p className="section-subtitle">
            Production-grade systems, AI-powered applications, and high-throughput REST APIs designed and built from scratch.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai', label: 'AI & Speech (Gemini)' },
              { id: 'backend', label: 'Backend Architecture (20+ APIs)' },
              { id: 'enterprise', label: 'Enterprise LMS (Dubai)' },
            ].map((tab) => {
              const isSelected = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  style={{
                    padding: '0.5rem 1.1rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    borderRadius: '25px',
                    background: isSelected ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.05)',
                    color: isSelected ? '#fff' : 'var(--text-secondary)',
                    border: isSelected ? '1px solid var(--accent-color)' : '1px solid var(--card-border)',
                    boxShadow: isSelected ? '0 4px 15px rgba(99, 102, 241, 0.3)' : 'none',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 0,
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {/* Visual Header Image / Preview Banner */}
                <div
                  style={{
                    position: 'relative',
                    height: '210px',
                    width: '100%',
                    overflow: 'hidden',
                    background: 'var(--code-bg)',
                    borderBottom: '1px solid var(--card-border)',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.85,
                      transition: 'transform 0.4s ease, opacity 0.4s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.opacity = '1';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.opacity = '0.85';
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(11, 15, 25, 0.95) 0%, rgba(11, 15, 25, 0.2) 60%, transparent 100%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Top Badge: Category & Metrics */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      right: '1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        padding: '0.25rem 0.65rem',
                        borderRadius: '20px',
                        background: 'rgba(11, 15, 25, 0.8)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--accent-color)',
                        fontWeight: 600,
                      }}
                    >
                      {project.category}
                    </span>

                    <span
                      style={{
                        padding: '0.25rem 0.65rem',
                        borderRadius: '20px',
                        background: 'rgba(16, 185, 129, 0.18)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--accent-emerald)',
                        fontWeight: 600,
                      }}
                    >
                      ● {project.metrics}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: 'var(--text-color)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {project.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--accent-color)',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      marginBottom: '1rem',
                    }}
                  >
                    {project.subtitle}
                  </div>

                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                    <h4
                      style={{
                        fontSize: '0.82rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-mono)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Key Architectural Highlights
                    </h4>
                    <ul
                      style={{
                        paddingLeft: '1.15rem',
                        margin: 0,
                        color: 'var(--text-secondary)',
                        fontSize: '0.86rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {project.highlights.map((h, hIdx) => (
                        <li key={hIdx} style={{ marginBottom: '0.4rem' }}>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Badges */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.45rem',
                      marginBottom: '1.5rem',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid var(--card-border)',
                    }}
                  >
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links / Action Bar */}
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto', alignItems: 'center' }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          padding: '0.55rem 1.1rem',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--card-border)',
                          color: 'var(--text-color)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
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
                        <FaGithub /> Repository
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          padding: '0.55rem 1.1rem',
                          borderRadius: '8px',
                          background: 'var(--accent-color)',
                          color: '#fff',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          transition: 'all 0.2s ease',
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.background = 'var(--accent-hover)')}
                        onMouseOut={(e) => (e.currentTarget.style.background = 'var(--accent-color)')}
                      >
                        <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} /> {project.demoType}
                      </a>
                    )}

                    {project.enterprise && (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.82rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-muted)',
                        }}
                      >
                        <FaCheckCircle style={{ color: 'var(--accent-emerald)' }} /> Enterprise Shipped
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
