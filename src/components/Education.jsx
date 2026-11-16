import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaLaptopCode } from 'react-icons/fa';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="container" style={{ padding: '6rem 2rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="dev-badge" style={{ marginBottom: '0.75rem' }}>
            <FaGraduationCap /> Academic Foundation
          </div>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            Formal degrees in Computer Applications complemented by professional full-stack enterprise diploma.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {education.map((item, index) => {
            const isCert = item.badge.includes('Certification') || item.badge.includes('Diploma');
            return (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Accent glow corner */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-40px',
                    right: '-40px',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: isCert ? 'var(--accent-cyan)' : 'var(--accent-color)',
                    filter: 'blur(50px)',
                    opacity: 0.15,
                    pointerEvents: 'none',
                  }}
                />

                <div>
                  {/* Top Badge & Date */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '20px',
                        background: isCert ? 'rgba(6, 182, 212, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                        color: isCert ? 'var(--accent-cyan)' : 'var(--accent-color)',
                        border: `1px solid ${isCert ? 'rgba(6, 182, 212, 0.3)' : 'rgba(99, 102, 241, 0.3)'}`,
                        fontWeight: 600,
                      }}
                    >
                      {isCert ? <FaCertificate /> : <FaGraduationCap />}
                      {item.badge}
                    </span>

                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        color: 'var(--text-muted)',
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      <FaCalendarAlt style={{ fontSize: '0.75rem' }} /> {item.year}
                    </span>
                  </div>

                  {/* Degree Name */}
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-color)',
                      marginBottom: '0.5rem',
                      lineHeight: 1.35,
                    }}
                  >
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <div
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--accent-color)',
                      fontWeight: 600,
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <FaLaptopCode />
                    {item.institution}
                  </div>

                  {/* Focus / Description */}
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {item.focus}
                  </p>
                </div>

                {/* Footer verification item */}
                <div
                  style={{
                    borderTop: '1px solid var(--card-border)',
                    paddingTop: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <FaCheckCircle style={{ color: 'var(--accent-emerald)' }} /> Verified Credential
                  </span>
                  {item.location && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <FaMapMarkerAlt /> {item.location}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;

