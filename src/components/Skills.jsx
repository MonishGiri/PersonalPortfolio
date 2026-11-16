import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJava,
  FaDatabase,
  FaServer,
  FaLaptopCode,
  FaCode,
  FaUniversalAccess,
  FaBriefcase,
  FaSearch
} from 'react-icons/fa';
import {
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiExpress,
  SiSpringboot,
  SiHibernate,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiUbuntu,
  SiGithubcopilot,
  SiJsonwebtokens
} from 'react-icons/si';
import { skillsData } from '../data/portfolioData';

// Map icon strings to React Icon components
const iconMap = {
  FaReact: <FaReact size={30} />,
  SiRedux: <SiRedux size={28} />,
  FaHtml5: <FaHtml5 size={30} />,
  FaCss3Alt: <FaCss3Alt size={30} />,
  SiJavascript: <SiJavascript size={28} />,
  SiTailwindcss: <SiTailwindcss size={28} />,
  SiBootstrap: <SiBootstrap size={28} />,
  FaNodeJs: <FaNodeJs size={30} />,
  SiExpress: <SiExpress size={28} />,
  SiSpringboot: <SiSpringboot size={28} />,
  SiHibernate: <SiHibernate size={28} />,
  FaServer: <FaServer size={28} />,
  SiJsonwebtokens: <SiJsonwebtokens size={28} />,
  SiMongodb: <SiMongodb size={28} />,
  SiMysql: <SiMysql size={28} />,
  FaDatabase: <FaDatabase size={28} />,
  FaJava: <FaJava size={30} />,
  FaGitAlt: <FaGitAlt size={30} />,
  SiGithubcopilot: <SiGithubcopilot size={28} />,
  SiPostman: <SiPostman size={28} />,
  SiUbuntu: <SiUbuntu size={28} />,
  FaCode: <FaCode size={28} />,
  FaLaptopCode: <FaLaptopCode size={28} />,
  FaBriefcase: <FaBriefcase size={28} />,
  FaUniversalAccess: <FaUniversalAccess size={28} />
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Combine categories
  const allSkills = [
    ...skillsData.frontend.map((s) => ({ ...s, category: 'frontend' })),
    ...skillsData.backend.map((s) => ({ ...s, category: 'backend' })),
    ...skillsData.databases.map((s) => ({ ...s, category: 'databases' })),
    ...skillsData.languages.map((s) => ({ ...s, category: 'languages' })),
    ...skillsData.toolsAndDevops.map((s) => ({ ...s, category: 'tools' })),
    ...skillsData.methodologies.map((s) => ({ ...s, category: 'methodologies' })),
  ];

  // Filter skills
  const filteredSkills = allSkills.filter((skill) => {
    const matchesTab =
      activeTab === 'all' ||
      (activeTab === 'frontend' && skill.category === 'frontend') ||
      (activeTab === 'backend' && (skill.category === 'backend' || skill.category === 'databases')) ||
      (activeTab === 'tools' && skill.category === 'tools') ||
      (activeTab === 'languages' && skill.category === 'languages') ||
      (activeTab === 'methodologies' && skill.category === 'methodologies');

    const matchesSearch =
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.desc.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const tabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & DBs' },
    { id: 'languages', label: 'Languages' },
    { id: 'tools', label: 'DevOps & Tools' },
    { id: 'methodologies', label: 'Methodologies' },
  ];

  return (
    <section id="skills" className="container" style={{ padding: '6rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div className="dev-badge" style={{ marginBottom: '0.75rem' }}>
          <FaCode /> Technical Expertise
        </div>
        <h2 className="section-title">Technical Skills & Tooling</h2>
        <p className="section-subtitle">
          Core proficiencies organized by domain—battle-tested in enterprise LMS systems and modern web applications.
        </p>

        {/* Search Bar & Tab Controls */}
        <div
          style={{
            maxWidth: '650px',
            margin: '0 auto 2rem',
            display: 'flex',
            alignItems: 'center',
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '12px',
            padding: '0.5rem 1rem',
            gap: '0.75rem',
          }}
        >
          <FaSearch style={{ color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search skills (e.g. React, Spring Boot, MongoDB, JWT, WCAG)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-color)',
              fontSize: '0.9rem',
              fontFamily: 'inherit',
            }}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              style={{
                background: 'transparent',
                color: 'var(--text-muted)',
                fontSize: '0.8rem',
                cursor: 'pointer',
              }}
            >
              Clear
            </button>
          )}
        </div>

        {/* Tab Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.5rem 1.1rem',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  borderRadius: '30px',
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

      {/* Skills Grid */}
      <motion.div layout className="grid-3" style={{ minHeight: '300px' }}>
        <AnimatePresence>
          {filteredSkills.map((skill, index) => {
            const icon = iconMap[skill.icon] || <FaCode size={28} />;
            return (
              <motion.div
                layout
                key={skill.name}
                className="card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Header: Icon + Name + Level Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      style={{
                        color: skill.color || 'var(--accent-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255, 255, 255, 0.03)',
                        padding: '0.5rem',
                        borderRadius: '10px',
                      }}
                    >
                      {icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--text-color)' }}>
                        {skill.name}
                      </h3>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-muted)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px',
                      background: 'rgba(99, 102, 241, 0.12)',
                      color: 'var(--accent-color)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      fontWeight: 600,
                    }}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Practical Description */}
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.86rem',
                    lineHeight: 1.5,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {skill.desc}
                </p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {filteredSkills.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
          No skills matched "{searchTerm}". Try another search term!
        </div>
      )}
    </section>
  );
};

export default Skills;
