/**
 * Fetch public repositories for a GitHub user
 * @param {string} username - GitHub username
 * @returns {Promise<Array>} Array of repository objects
 */
export async function fetchPublicRepos(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch repositories: ${response.statusText}`);
    }
    
    const repos = await response.json();
    
    // Filter out forked repos and sort by stars/updated date
    const publicRepos = repos
      .filter(repo => !repo.fork && !repo.private)
      .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at));
    
    return publicRepos;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw error;
  }
}

/**
 * Fetch README content for a specific repository
 * @param {string} username - GitHub username
 * @param {string} repoName - Repository name
 * @returns {Promise<string>} README content in markdown format
 */
export async function fetchRepoReadme(username, repoName) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repoName}/readme`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3.raw'
        }
      }
    );
    
    if (!response.ok) {
      if (response.status === 404) {
        return 'No README available for this repository.';
      }
      throw new Error(`Failed to fetch README: ${response.statusText}`);
    }
    
    return await response.text();
  } catch (error) {
    console.error(`Error fetching README for ${repoName}:`, error);
    return 'Unable to load README.';
  }
}

/**
 * Extract a brief summary from README content
 * @param {string} readme - Full README markdown content
 * @returns {string} Brief summary (first paragraph or first 200 chars)
 */
export function extractReadmeSummary(readme) {
  if (!readme || readme === 'No README available for this repository.' || readme === 'Unable to load README.') {
    return readme;
  }
  
  // Remove markdown headers and get first meaningful paragraph
  const lines = readme.split('\n');
  let summary = '';
  
  for (let line of lines) {
    // Skip headers, badges, and empty lines
    if (line.startsWith('#') || line.includes('![') || line.includes('](http') && line.includes('badge') || !line.trim()) {
      continue;
    }
    
    // Get first meaningful line
    if (line.trim().length > 20) {
      summary = line.trim();
      break;
    }
  }
  
  // If no summary found, use the first non-empty line
  if (!summary) {
    summary = lines.find(line => line.trim().length > 0) || 'No description available.';
  }
  
  // Limit to ~200 characters
  if (summary.length > 200) {
    summary = summary.substring(0, 200) + '...';
  }
  
  return summary;
}
