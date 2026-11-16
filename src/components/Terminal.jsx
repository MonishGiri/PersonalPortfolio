import { useState, useRef, useEffect } from 'react';
import { FaTerminal, FaCode, FaCheck, FaCopy } from 'react-icons/fa';
import { scroller } from 'react-scroll';
import { terminalCommands } from '../data/portfolioData';

const sectionMap = {
  about: 'about',
  bio: 'about',
  skill: 'skills',
  skills: 'skills',
  tech: 'skills',
  stack: 'skills',
  exp: 'experience',
  experience: 'experience',
  work: 'experience',
  jobs: 'experience',
  proj: 'projects',
  projects: 'projects',
  project: 'projects',
  edu: 'education',
  education: 'education',
  degree: 'education',
  degrees: 'education',
  api: 'api-playground',
  rest: 'api-playground',
  demo: 'api-playground',
  playground: 'api-playground',
  terminal: 'terminal',
  shell: 'terminal',
  contact: 'contact',
  email: 'contact',
  hire: 'contact',
  hero: 'hero',
  home: 'hero'
};

const navigationFlow = [
  'about',
  'skills',
  'experience',
  'projects',
  'education',
  'api-playground',
  'contact'
];

const Terminal = ({ onOpenResume }) => {
  const [inputVal, setInputVal] = useState('');
  const [navIndex, setNavIndex] = useState(0);
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: [
        'Welcome to Monish Giri\'s Developer Shell [v1.0.5 - Linux Ubuntu/Node.js]',
        'Type any command or "next" and press ENTER to navigate across portfolio sections.',
        'Quick commands: skills, projects, experience, education, api, contact, resume, next'
      ]
    },
    {
      type: 'command',
      cmd: 'whoami',
      output: [
        ...terminalCommands.whoami,
        '💡 Pro-tip: Type any command (e.g. "skills", "projects", "next") + ENTER to jump directly to that section!'
      ]
    }
  ]);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef(null);

  const handleCommand = (cmdToRun) => {
    const rawCmd = (cmdToRun || inputVal).trim().toLowerCase();
    if (!rawCmd) return;

    if (rawCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    // Direct resume download command
    if (rawCmd === 'resume' || rawCmd === 'cv' || rawCmd === 'download') {
      const link = document.createElement('a');
      link.href = '/Monish_Giri_Resume.pdf';
      link.download = 'Monish_Giri_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setHistory((prev) => [
        ...prev,
        {
          type: 'command',
          cmd: rawCmd,
          output: [
            "✔ Triggered direct download for Monish_Giri_Resume.pdf",
            "Opening resume viewer modal...",
          ]
        }
      ]);
      setInputVal('');
      if (onOpenResume) onOpenResume();
      return;
    }

    // Determine target section
    let targetSection = sectionMap[rawCmd];

    if (rawCmd === 'next' || rawCmd === 'next ➜') {
      targetSection = navigationFlow[navIndex % navigationFlow.length];
      setNavIndex((prev) => (prev + 1) % navigationFlow.length);
    } else if (!targetSection) {
      // If user typed another command (e.g. whoami, help, stats), advance to next section in order
      targetSection = navigationFlow[navIndex % navigationFlow.length];
      setNavIndex((prev) => (prev + 1) % navigationFlow.length);
    } else {
      // User typed a specific section command, align next step after it
      const matchIdx = navigationFlow.indexOf(targetSection);
      if (matchIdx !== -1) {
        setNavIndex((matchIdx + 1) % navigationFlow.length);
      }
    }

    const baseOutput = terminalCommands[rawCmd] || [
      `Command: "${rawCmd}" executed successfully.`
    ];

    setHistory((prev) => [
      ...prev,
      {
        type: 'command',
        cmd: rawCmd,
        output: [
          ...baseOutput,
          `➜ [Auto-Navigation]: Moving to #${targetSection} section...`
        ]
      }
    ]);
    setInputVal('');

    // Smoothly scroll to the target section
    if (targetSection) {
      setTimeout(() => {
        scroller.scrollTo(targetSection, {
          duration: 700,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -70
        });
      }, 350);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand();
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const quickCommands = [
    'next ➜',
    'skills',
    'experience',
    'projects',
    'education',
    'api',
    'contact',
    'resume',
    'clear'
  ];

  const copyTerminalLog = () => {
    const logText = history
      .map((item) => (item.type === 'system' ? item.text.join('\n') : `$ ${item.cmd}\n${item.output.join('\n')}`))
      .join('\n\n');
    navigator.clipboard.writeText(logText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="container" style={{ padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="dev-badge" style={{ marginBottom: '0.75rem' }}>
            <FaTerminal /> Interactive Shell & Section Navigator
          </div>
          <h2 className="section-title">Developer Console</h2>
          <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
            Type any command (or "next") and press <strong>ENTER</strong> — the console executes the query and automatically guides you to that section!
          </p>

          {/* Quick command chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd === 'next ➜' ? 'next' : cmd)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '6px',
                  background: cmd.includes('next') ? 'var(--accent-color)' : 'rgba(99, 102, 241, 0.1)',
                  color: cmd.includes('next') ? '#fff' : 'var(--accent-color)',
                  border: cmd.includes('next') ? '1px solid var(--accent-color)' : '1px solid rgba(99, 102, 241, 0.25)',
                  cursor: 'pointer',
                  fontWeight: cmd.includes('next') ? 700 : 500,
                  transition: 'all 0.2s ease',
                  boxShadow: cmd.includes('next') ? '0 2px 10px rgba(99, 102, 241, 0.3)' : 'none',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  if (!cmd.includes('next')) {
                    e.currentTarget.style.background = 'rgba(99, 102, 241, 0.25)';
                    e.currentTarget.style.borderColor = 'var(--accent-color)';
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  if (!cmd.includes('next')) {
                    e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.25)';
                  }
                }}
              >
                ${' '}{cmd}
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Window */}
        <div className="code-window">
          {/* Header */}
          <div className="code-header">
            <div className="code-dots">
              <span className="code-dot red" />
              <span className="code-dot yellow" />
              <span className="code-dot green" />
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaCode style={{ color: 'var(--accent-color)' }} /> monish@ubuntu-srv: ~/portfolio (interactive nav enabled)
            </div>
            <button
              onClick={copyTerminalLog}
              title="Copy terminal session"
              style={{
                background: 'transparent',
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                cursor: 'pointer'
              }}
            >
              {copied ? <FaCheck style={{ color: 'var(--accent-emerald)' }} /> : <FaCopy />}
            </button>
          </div>

          {/* Terminal Body */}
          <div
            style={{
              padding: '1.25rem 1.5rem',
              maxHeight: '400px',
              overflowY: 'auto',
              fontSize: '0.88rem',
              lineHeight: 1.6,
              color: 'var(--code-text)',
            }}
          >
            {history.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                {item.type === 'system' ? (
                  item.text.map((t, tIdx) => (
                    <div key={tIdx} style={{ color: 'var(--text-secondary)' }}>
                      # {t}
                    </div>
                  ))
                ) : (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)' }}>
                      <span style={{ color: 'var(--accent-emerald)' }}>➜</span>
                      <span style={{ color: 'var(--accent-color)' }}>~/portfolio</span>
                      <span style={{ color: '#fff' }}>$ {item.cmd}</span>
                    </div>
                    <div style={{ paddingLeft: '1.25rem', marginTop: '0.35rem', color: '#d1d5db' }}>
                      {item.output.map((line, lIdx) => (
                        <div
                          key={lIdx}
                          style={{
                            whiteSpace: 'pre-wrap',
                            color: line.includes('[Auto-Navigation]') ? 'var(--accent-cyan)' : 'inherit',
                            fontWeight: line.includes('[Auto-Navigation]') ? 600 : 'normal'
                          }}
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
              <span style={{ color: 'var(--accent-emerald)' }}>➜</span>
              <span style={{ color: 'var(--accent-color)' }}>~/portfolio</span>
              <span style={{ color: '#fff' }}>$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'skills', 'projects', 'next', 'resume' & hit Enter..."
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem',
                }}
                aria-label="Terminal command input"
              />
              <button
                type="submit"
                title="Execute command"
                style={{
                  background: 'rgba(99, 102, 241, 0.2)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  color: 'var(--accent-color)',
                  borderRadius: '4px',
                  padding: '0.2rem 0.6rem',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                Enter ↵
              </button>
            </form>
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
