import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPublicRepos, fetchRepoReadme, extractReadmeSummary } from '../utils/githubApi';
import { mockRepos } from '../utils/mockData';
import './PortfolioPage.css';

const PortfolioPage = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [readmeContent, setReadmeContent] = useState('');
  const [loadingReadme, setLoadingReadme] = useState(false);
  const [usingMockData, setUsingMockData] = useState(false);

  const username = 'fahmed93'; // GitHub username

  useEffect(() => {
    const loadRepositories = async () => {
      try {
        setLoading(true);
        const repositories = await fetchPublicRepos(username);
        
        // Fetch summaries for top repositories
        const reposWithSummaries = await Promise.all(
          repositories.slice(0, 20).map(async (repo) => {
            try {
              const readme = await fetchRepoReadme(username, repo.name);
              const summary = extractReadmeSummary(readme);
              return { ...repo, summary };
            } catch {
              return { ...repo, summary: repo.description || 'No description available.' };
            }
          })
        );
        
        setRepos(reposWithSummaries);
      } catch (error) {
        // Fallback to mock data if API fails (e.g., in local dev with blocked requests)
        console.warn('GitHub API failed, using mock data:', error);
        setUsingMockData(true);
        setRepos(mockRepos);
      } finally {
        setLoading(false);
      }
    };

    loadRepositories();
  }, []);

  const handleRepoClick = async (repo) => {
    setSelectedRepo(repo);
    setLoadingReadme(true);
    
    try {
      const readme = await fetchRepoReadme(username, repo.name);
      setReadmeContent(readme);
    } catch {
      setReadmeContent('Unable to load README content.');
    } finally {
      setLoadingReadme(false);
    }
  };

  const closeModal = () => {
    setSelectedRepo(null);
    setReadmeContent('');
  };

  if (loading) {
    return (
      <div className="portfolio-container">
        <div className="portfolio-background">
          <div className="portfolio-grid-bg"></div>
        </div>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading repositories...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-container">
      <div className="portfolio-background">
        <div className="portfolio-grid-bg"></div>
      </div>

      <header className="portfolio-header">
        <Link to="/" className="portfolio-back-link">← Back to Home</Link>
        <div className="portfolio-title-section">
          <h1 className="portfolio-title">
            <span className="portfolio-bracket">{'<'}</span>
            Portfolio
            <span className="portfolio-bracket">{'/>'}</span>
          </h1>
          <p className="portfolio-subtitle">
            <span className="portfolio-comment">// </span>
            Public GitHub Repositories ({repos.length})
            {usingMockData && <span className="portfolio-mock-badge"> [Demo Data]</span>}
          </p>
        </div>
      </header>

      <main className="portfolio-content">
        <div className="portfolio-grid">
          {repos.map((repo) => (
            <div 
              key={repo.id} 
              className="portfolio-card"
              onClick={() => handleRepoClick(repo)}
            >
              <div className="portfolio-card-header">
                <h3 className="portfolio-card-title">
                  <span className="portfolio-bullet">●</span> {repo.name}
                </h3>
                <div className="portfolio-card-meta">
                  {repo.language && (
                    <span className="portfolio-language">{repo.language}</span>
                  )}
                  <span className="portfolio-stars">⭐ {repo.stargazers_count}</span>
                </div>
              </div>
              
              <div className="portfolio-card-body">
                <p className="portfolio-card-description">
                  {repo.summary || repo.description || 'No description available.'}
                </p>
              </div>
              
              <div className="portfolio-card-footer">
                <span className="portfolio-updated">
                  Updated: {new Date(repo.updated_at).toLocaleDateString()}
                </span>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="portfolio-github-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedRepo && (
        <div className="portfolio-modal-overlay" onClick={closeModal}>
          <div className="portfolio-modal" onClick={(e) => e.stopPropagation()}>
            <div className="portfolio-modal-header">
              <h2>{selectedRepo.name}</h2>
              <button className="portfolio-modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="portfolio-modal-body">
              {loadingReadme ? (
                <div className="loading-readme">Loading README...</div>
              ) : (
                <pre className="portfolio-readme-content">{readmeContent}</pre>
              )}
            </div>
            <div className="portfolio-modal-footer">
              <a 
                href={selectedRepo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="portfolio-modal-link"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
