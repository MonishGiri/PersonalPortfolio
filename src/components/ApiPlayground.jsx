import { useState } from 'react';
import { FaPlay, FaServer, FaCheckCircle, FaBrain, FaFilePdf } from 'react-icons/fa';

const endpoints = [
  {
    id: 'gemini-interview',
    method: 'POST',
    path: '/api/v1/gemini/mock-interview/generate',
    title: 'Gemini AI Question Generator',
    tag: 'AI Platform',
    icon: <FaBrain style={{ color: '#06b6d4' }} />,
    requestBody: {
      candidateRole: "Software Engineer",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Java Spring Boot"],
      resumeParsedData: {
        experienceYears: 1.2,
        keyProjects: ["Excel Pixel LMS", "AI Interview Platform"]
      },
      difficulty: "Intermediate-Advanced"
    },
    response: {
      status: 200,
      statusText: "OK",
      latency: "142ms",
      headers: {
        "content-type": "application/json; charset=utf-8",
        "x-powered-by": "Express / Google Gemini 1.5 Flash",
        "authorization": "Bearer [jwt_token_verified]"
      },
      data: {
        interviewId: "int_98b3c14f",
        sessionId: "sess_voice_speech_api_stream",
        generatedQuestions: [
          {
            id: "q1",
            category: "Architecture & REST",
            question: "How did you design role-based access control and JWT authentication in your social media backend to prevent token tampering?",
            context: "Generated based on candidate's Express.js & JWT resume highlights."
          },
          {
            id: "q2",
            category: "React & Accessibility",
            question: "In your work with Redux Toolkit on the Excel Pixel LMS, what strategies allowed you to cut state boilerplate by 30% while retaining WCAG 2.1 AA compliance?",
            context: "Tailored to Redux Toolkit & accessibility metrics."
          }
        ],
        streamVoiceSupported: true,
        speechRecognitionEngine: "Web Speech API"
      }
    }
  },
  {
    id: 'lms-video-timeline',
    method: 'GET',
    path: '/api/v1/lms/excel-pixel/video-annotations?courseId=EP-2025',
    title: 'Excel Pixel LMS Annotations',
    tag: 'Enterprise LMS',
    icon: <FaServer style={{ color: '#6366f1' }} />,
    requestBody: null,
    response: {
      status: 200,
      statusText: "OK",
      latency: "34ms",
      headers: {
        "content-type": "application/json",
        "x-cache": "HIT - MongoDB Indexed Query",
        "access-control-allow-origin": "https://excelpixel.ae"
      },
      data: {
        course: "Advanced Web Application Engineering (Dubai LMS)",
        totalDurationSeconds: 3600,
        timelineAnnotations: [
          {
            timestampSeconds: 145,
            marker: "JWT Middleware & Request Sanitization",
            author: "Monish Giri (Software Engineer)",
            isInteractiveQuiz: false
          },
          {
            timestampSeconds: 420,
            marker: "Redux Toolkit Slice State Machine",
            author: "Q2A Media Services Team",
            isInteractiveQuiz: true
          }
        ],
        compliance: "WCAG 2.1 AA Verified"
      }
    }
  },
  {
    id: 'pdf-export-service',
    method: 'POST',
    path: '/api/v1/reports/export-pdf',
    title: 'Puppeteer Asynchronous PDF Export',
    tag: 'Report Engine',
    icon: <FaFilePdf style={{ color: '#10b981' }} />,
    requestBody: {
      candidateId: "cand_monish_01",
      interviewSessionId: "int_98b3c14f",
      format: "A4",
      includeVoiceMetrics: true,
      secureSharingToken: true
    },
    response: {
      status: 202,
      statusText: "Accepted (Async Puppeteer Task)",
      latency: "89ms",
      headers: {
        "content-type": "application/json",
        "x-service": "Puppeteer Headless Worker"
      },
      data: {
        taskId: "task_pdf_puppeteer_8792",
        status: "GENERATING",
        downloadUrl: "https://api.monish.dev/cdn/reports/cand_monish_01_summary.pdf",
        sharingToken: "share_tk_839f2019ab92",
        expiresIn: "7 days",
        encryption: "AES-256"
      }
    }
  }
];

const ApiPlayground = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState(endpoints[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeResponse, setActiveResponse] = useState(endpoints[0].response);

  const handleTestApi = (ep) => {
    setSelectedEndpoint(ep);
    setIsLoading(true);
    setTimeout(() => {
      setActiveResponse(ep.response);
      setIsLoading(false);
    }, 350);
  };

  return (
    <section id="api-playground" className="container" style={{ padding: '6rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div className="dev-badge" style={{ marginBottom: '0.75rem' }}>
          <FaServer /> REST API Interactive Sandbox
        </div>
        <h2 className="section-title">Production API Showcase</h2>
        <p className="section-subtitle">
          Test live simulated endpoints representing microservices, AI prompt pipelines, and LMS features I've designed and shipped.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {/* Endpoint Selector Tabs */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {endpoints.map((ep) => {
            const isSelected = selectedEndpoint.id === ep.id;
            return (
              <button
                key={ep.id}
                onClick={() => handleTestApi(ep)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1rem',
                  borderRadius: '10px',
                  background: isSelected ? 'var(--card-bg)' : 'transparent',
                  border: isSelected ? '1px solid var(--accent-color)' : '1px solid var(--card-border)',
                  color: isSelected ? 'var(--accent-color)' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  boxShadow: isSelected ? '0 4px 15px rgba(99, 102, 241, 0.2)' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                {ep.icon}
                <span>{ep.title}</span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '0.15rem 0.4rem',
                    borderRadius: '4px',
                    background: ep.method === 'GET' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                    color: ep.method === 'GET' ? 'var(--accent-emerald)' : 'var(--accent-color)',
                  }}
                >
                  {ep.method}
                </span>
              </button>
            );
          })}
        </div>

        {/* API Playground Window */}
        <div className="code-window">
          {/* Top Bar with Endpoint URL and Send Button */}
          <div
            style={{
              padding: '0.85rem 1.25rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderBottom: '1px solid var(--card-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1, minWidth: '260px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '6px',
                  background: selectedEndpoint.method === 'GET' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                  color: selectedEndpoint.method === 'GET' ? 'var(--accent-emerald)' : 'var(--accent-color)',
                  border: `1px solid ${selectedEndpoint.method === 'GET' ? 'var(--accent-emerald)' : 'var(--accent-color)'}`,
                }}
              >
                {selectedEndpoint.method}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem',
                  color: 'var(--text-color)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {selectedEndpoint.path}
              </span>
            </div>

            <button
              onClick={() => handleTestApi(selectedEndpoint)}
              disabled={isLoading}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.5rem 1.25rem',
                borderRadius: '8px',
                background: 'var(--accent-color)',
                color: '#fff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.2s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = 'var(--accent-hover)')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'var(--accent-color)')}
            >
              <FaPlay style={{ fontSize: '0.75rem' }} />
              {isLoading ? 'Sending...' : 'Send Request'}
            </button>
          </div>

          {/* Request & Response Split Grid */}
          <div
            className="api-split-grid"
            style={{
              maxHeight: '480px',
              overflowY: 'auto',
            }}
          >
            {/* Request Payload (if POST) */}
            {selectedEndpoint.requestBody && (
              <div
                style={{
                  padding: '1.25rem',
                  borderRight: '1px solid var(--card-border)',
                  fontSize: '0.82rem',
                  background: 'rgba(0, 0, 0, 0.2)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                  <span>REQUEST BODY (JSON)</span>
                  <span style={{ color: 'var(--accent-cyan)' }}>Application/JSON</span>
                </div>
                <pre style={{ margin: 0, color: '#a5b4fc', whiteSpace: 'pre-wrap', wordBreak: 'break-word', lineHeight: 1.5 }}>
                  {JSON.stringify(selectedEndpoint.requestBody, null, 2)}
                </pre>
              </div>
            )}

            {/* Response Section */}
            <div style={{ padding: '1.25rem', fontSize: '0.82rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>RESPONSE:</span>
                  <span
                    style={{
                      color: 'var(--accent-emerald)',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    <FaCheckCircle style={{ fontSize: '0.8rem' }} /> {activeResponse.status} {activeResponse.statusText}
                  </span>
                </div>
                <div style={{ color: 'var(--text-muted)' }}>
                  Time: <span style={{ color: 'var(--accent-cyan)' }}>{activeResponse.latency}</span>
                </div>
              </div>

              {/* Formatted JSON output */}
              <pre
                style={{
                  margin: 0,
                  color: '#67e8f9',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  lineHeight: 1.5,
                  maxHeight: '340px',
                  overflowY: 'auto',
                }}
              >
                {JSON.stringify(activeResponse.data, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiPlayground;

