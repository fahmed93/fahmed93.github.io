import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AIProjectsPage.css';

const AIProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedProject]);
  
  const aiProjects = [
    {
      id: 'pr-risk-analyzer',
      title: 'PR Risk Analyzer MCP Server',
      subtitle: 'Hackathon Winner - Organization-wide',
      category: 'Agentic AI',
      description: 'Intelligent MCP server that analyzes pull requests for risk factors using multi-agent collaboration',
      impact: {
        efficiency: '70% faster code review cycles',
        accuracy: '85% accurate risk prediction',
        adoption: '50+ teams across organization'
      },
      technologies: ['MCP Protocol', 'GitHub API', 'LLM Integration', 'Node.js'],
      features: [
        'Multi-agent risk assessment workflow',
        'Automated code complexity analysis',
        'Security vulnerability detection',
        'Historical pattern recognition',
        'Team collaboration insights',
        'Real-time risk scoring'
      ],
      agentArchitecture: {
        orchestrator: 'Main coordinator agent managing workflow',
        analyzers: [
          'Code Complexity Agent - Analyzes code patterns and complexity metrics',
          'Security Agent - Scans for vulnerabilities and security issues',
          'History Agent - Reviews git history and contributor patterns',
          'Performance Agent - Evaluates performance implications'
        ],
        synthesizer: 'Risk aggregation agent combining insights'
      },
      workflow: [
        'PR submitted → Orchestrator receives event',
        'Orchestrator delegates to specialized agents',
        'Parallel analysis by 4 agent types',
        'Agents return findings to orchestrator',
        'Synthesizer combines multi-agent results',
        'Final risk report generated with recommendations'
      ]
    },
    {
      id: 'token-service-optimizer',
      title: 'AI-Powered Token Service Optimization',
      subtitle: 'Production System at Scale',
      category: 'AI Automation',
      description: 'Intelligent agent system managing 2M+ daily writes and 5M+ reads with predictive scaling',
      impact: {
        uptime: '99.95% SLA achieved',
        performance: '900+ RPS sustained',
        cost: '40% infrastructure cost reduction'
      },
      technologies: ['Azure AI', 'Microservices', 'C#', 'Machine Learning'],
      features: [
        'Predictive load balancing',
        'Automated capacity planning',
        'Anomaly detection and alerting',
        'Self-healing infrastructure',
        'Performance optimization suggestions',
        'Cost-aware resource allocation'
      ],
      agentArchitecture: {
        orchestrator: 'Central coordination service',
        analyzers: [
          'Load Prediction Agent - Forecasts traffic patterns',
          'Resource Optimization Agent - Manages infrastructure allocation',
          'Anomaly Detection Agent - Identifies unusual patterns',
          'Cost Analysis Agent - Optimizes spending'
        ],
        synthesizer: 'Decision engine for automated actions'
      },
      workflow: [
        'Continuous metric collection from services',
        'Agents analyze real-time data streams',
        'Predictive models forecast demand',
        'Resource agents adjust infrastructure',
        'Anomaly agents trigger alerts',
        'Cost agents optimize allocation'
      ]
    },
    {
      id: 'mcp-framework',
      title: 'MCP Server Development Framework',
      subtitle: 'Developer Productivity Tool',
      category: 'Developer Tools',
      description: 'Reusable framework for building Model Context Protocol servers with agent capabilities',
      impact: {
        productivity: '10x faster MCP server development',
        quality: '95% test coverage standard',
        adoption: 'Template used by 20+ developers'
      },
      technologies: ['TypeScript', 'MCP Protocol', 'Testing Framework', 'CLI Tools'],
      features: [
        'Boilerplate generation for MCP servers',
        'Built-in agent orchestration patterns',
        'Tool calling abstractions',
        'Testing utilities and mocks',
        'Documentation generator',
        'Performance monitoring hooks'
      ],
      agentArchitecture: {
        orchestrator: 'Framework core handling lifecycle',
        analyzers: [
          'Schema Validator Agent - Validates MCP protocol compliance',
          'Testing Agent - Automated test generation',
          'Documentation Agent - Auto-generates docs from code',
          'Performance Agent - Monitors and optimizes runtime'
        ],
        synthesizer: 'Build system orchestrating all components'
      },
      workflow: [
        'Developer defines MCP server requirements',
        'Framework generates base structure',
        'Schema validator ensures compliance',
        'Testing agent creates test suite',
        'Documentation agent generates guides',
        'Performance agent adds monitoring'
      ]
    },
    {
      id: 'ci-cd-optimizer',
      title: 'AI-Enhanced CI/CD Pipeline',
      subtitle: 'Infrastructure Automation',
      category: 'DevOps AI',
      description: 'Intelligent pipeline management system with predictive failure detection and auto-remediation',
      impact: {
        reliability: '60% reduction in pipeline failures',
        speed: '45% faster deployment cycles',
        recovery: 'Automatic recovery in 80% of failures'
      },
      technologies: ['Azure DevOps', 'GitHub Actions', 'Python', 'ML Models'],
      features: [
        'Predictive failure analysis',
        'Intelligent test selection',
        'Auto-remediation workflows',
        'Resource optimization',
        'Deployment risk assessment',
        'Rollback decision support'
      ],
      agentArchitecture: {
        orchestrator: 'Pipeline manager coordinating agents',
        analyzers: [
          'Prediction Agent - Forecasts potential failures',
          'Test Selection Agent - Intelligently chooses test suite',
          'Resource Agent - Optimizes pipeline resources',
          'Remediation Agent - Attempts automatic fixes'
        ],
        synthesizer: 'Decision engine for deploy/rollback'
      },
      workflow: [
        'Code commit triggers pipeline',
        'Prediction agent analyzes change risk',
        'Test selection agent optimizes suite',
        'Resource agent allocates infrastructure',
        'If failures occur, remediation agent acts',
        'Decision engine approves deployment'
      ]
    }
  ];

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="ai-projects-container">
      <div className="ai-projects-background">
        <div className="ai-projects-grid-bg"></div>
      </div>

      <header className="ai-projects-header">
        <Link to="/" className="ai-projects-back-link">← Back to Home</Link>
        <div className="ai-projects-title-section">
          <h1 className="ai-projects-title">
            <span className="ai-projects-bracket">{'<'}</span>
            AI Agent Projects
            <span className="ai-projects-bracket">{'/>'}</span>
          </h1>
          <p className="ai-projects-subtitle">
            <span className="ai-projects-comment">// </span>
            Agentic AI & Multi-Agent Systems
          </p>
        </div>
      </header>

      <main className="ai-projects-content">
        <div className="ai-projects-intro">
          <div className="ai-projects-highlight-box">
            <h2>🤖 Expertise in Agentic AI</h2>
            <p>
              Specialized in designing and implementing multi-agent systems that solve complex problems
              through intelligent collaboration. From winning organization-wide hackathons to managing
              production systems at scale, these projects demonstrate practical applications of agentic AI.
            </p>
            <div className="ai-projects-stats">
              <div className="stat-item">
                <span className="stat-number">2M+</span>
                <span className="stat-label">Daily Transactions</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99.95%</span>
                <span className="stat-label">System Uptime</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Teams Using Tools</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-projects-grid">
          {aiProjects.map((project) => (
            <div
              key={project.id}
              className="ai-project-card"
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${project.title}`}
            >
              <div className="ai-project-card-header">
                <div className="project-category-badge">{project.category}</div>
                <h3 className="ai-project-title">
                  <span className="project-bullet">●</span> {project.title}
                </h3>
                <p className="ai-project-subtitle">{project.subtitle}</p>
              </div>

              <div className="ai-project-card-body">
                <p className="ai-project-description">{project.description}</p>
                
                <div className="ai-project-impact">
                  <h4>Key Impact:</h4>
                  <ul>
                    {Object.entries(project.impact).map(([key, value]) => (
                      <li key={key}>
                        <strong>{key}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="ai-project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="ai-project-card-footer">
                <span className="view-details-link">View Architecture →</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedProject && (
        <div className="ai-projects-modal-overlay" onClick={closeModal}>
          <div 
            className="ai-projects-modal" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="ai-projects-modal-header">
              <div>
                <h2 id="modal-title">{selectedProject.title}</h2>
                <p className="modal-subtitle">{selectedProject.subtitle}</p>
              </div>
              <button 
                className="ai-projects-modal-close" 
                onClick={closeModal}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            
            <div className="ai-projects-modal-body">
              <div className="modal-section">
                <h3>🎯 Description</h3>
                <p>{selectedProject.description}</p>
              </div>

              <div className="modal-section">
                <h3>✨ Key Features</h3>
                <ul className="features-list">
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>🏗️ Agent Architecture</h3>
                <div className="architecture-box">
                  <div className="architecture-tier">
                    <strong>Orchestrator:</strong>
                    <p>{selectedProject.agentArchitecture.orchestrator}</p>
                  </div>
                  <div className="architecture-tier">
                    <strong>Specialized Agents:</strong>
                    <ul>
                      {selectedProject.agentArchitecture.analyzers.map((analyzer) => (
                        <li key={analyzer}>{analyzer}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="architecture-tier">
                    <strong>Synthesizer:</strong>
                    <p>{selectedProject.agentArchitecture.synthesizer}</p>
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <h3>🔄 Agent Workflow</h3>
                <ol className="workflow-list">
                  {selectedProject.workflow.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="modal-section">
                <h3>📊 Impact Metrics</h3>
                <div className="impact-metrics">
                  {Object.entries(selectedProject.impact).map(([key, value]) => (
                    <div key={key} className="metric-item">
                      <span className="metric-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                      <span className="metric-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>💻 Technologies</h3>
                <div className="technologies-list">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="tech-badge-large">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIProjectsPage;
