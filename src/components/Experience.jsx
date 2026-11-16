import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaLaptopCode } from 'react-icons/fa';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="container" style={{ padding: '6rem 2rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="dev-badge" style={{ marginBottom: '0.75rem' }}>
            <FaBriefcase /> Work History
          </div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Track record of shipping production features, accessible interfaces, and scalable REST APIs in Agile teams.
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical timeline bar on desktop */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '20px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent-color), rgba(99, 102, 241, 0.1))',
              display: 'none',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  style={{
                    borderLeft: exp.current ? '4px solid var(--accent-color)' : '4px solid var(--card-border)',
                    position: 'relative',
                  }}
                >
                  {/* Top Row: Role, Type, Period */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, color: 'var(--text-color)' }}>
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              fontSize: '0.72rem',
                              padding: '0.2rem 0.55rem',
                              borderRadius: '20px',
                              background: 'rgba(16, 185, 129, 0.15)',
                              color: 'var(--accent-emerald)',
                              border: '1px solid rgba(16, 185, 129, 0.3)',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 600,
                            }}
                          >
                            <span className="status-beacon" /> Current Role
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          fontSize: '1.05rem',
                          color: 'var(--accent-color)',
                          fontWeight: 700,
                          marginTop: '0.35rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                        }}
                      >
                        <FaLaptopCode />
                        {exp.company}
                      </div>
                    </div>

                    <div style={{ textAlign: 'left' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.88rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--accent-cyan)',
                          fontWeight: 600,
                        }}
                      >
                        <FaCalendarAlt style={{ fontSize: '0.8rem' }} /> {exp.period}
                      </span>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          marginTop: '0.25rem',
                        }}
                      >
                        <FaMapMarkerAlt /> {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Summary line */}
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {exp.description}
                  </p>

                  {/* Impact Metric Chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    {exp.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        style={{
                          padding: '0.35rem 0.75rem',
                          borderRadius: '8px',
                          background: 'rgba(99, 102, 241, 0.1)',
                          border: '1px solid rgba(99, 102, 241, 0.25)',
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-mono)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                        }}
                      >
                        <span style={{ color: 'var(--text-secondary)' }}>{m.label}:</span>
                        <strong style={{ color: 'var(--accent-cyan)' }}>{m.value}</strong>
                      </div>
                    ))}
                  </div>

                  {/* Key Contributions & Achievements */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <h4
                      style={{
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'var(--text-muted)',
                        marginBottom: '0.65rem',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      Key Responsibilities & Deliverables
                    </h4>
                    <ul style={{ paddingLeft: '1.25rem', margin: 0, color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} style={{ marginBottom: '0.5rem' }}>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div style={{ borderTop: '1px solid var(--card-border)', paddingTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginRight: '0.5rem' }}>
                      Stack:
                    </span>
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
