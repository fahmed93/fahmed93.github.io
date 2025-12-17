/**
 * Parse markdown resume into structured data
 */
export const parseResume = (markdown) => {
  const lines = markdown.split('\n');
  const resume = {
    name: '',
    contact: {},
    summary: '',
    skills: [],
    experience: [],
    education: [],
    projects: [],
    certifications: [],
    awards: [],
    languages: [],
    interests: []
  };

  let currentSection = null;
  let currentSubsection = null;
  let buffer = [];

  const processBuffer = () => {
    if (buffer.length === 0) return;
    const content = buffer.join('\n').trim();
    
    if (currentSection === 'summary') {
      resume.summary = content;
    } else if (currentSection === 'skills' && currentSubsection) {
      resume.skills.push({
        category: currentSubsection,
        items: content.split(',').map(s => s.trim()).filter(Boolean)
      });
    } else if (currentSection === 'experience' && currentSubsection) {
      const lines = content.split('\n');
      const details = [];
      let date = '';
      let location = '';
      
      for (const line of lines) {
        if (line.startsWith('**') && line.includes('|')) {
          const parts = line.split('|');
          date = parts[0]?.replace(/\*\*/g, '').trim() || '';
          location = parts[1]?.trim() || '';
        } else if (line.startsWith('-')) {
          details.push(line.substring(1).trim());
        }
      }
      
      const subsectionParts = currentSubsection.split('|');
      resume.experience.push({
        title: subsectionParts[0]?.trim() || '',
        company: subsectionParts[1]?.trim() || '',
        date,
        location,
        details
      });
    } else if (currentSection === 'education' && currentSubsection) {
      const lines = content.split('\n');
      let institution = '';
      let date = '';
      const details = [];
      
      for (const line of lines) {
        if (line.startsWith('**') && line.includes('|')) {
          const parts = line.split('|');
          institution = parts[0].replace(/\*\*/g, '').trim();
          date = parts[1].trim();
        } else if (line.startsWith('-')) {
          details.push(line.substring(1).trim());
        }
      }
      
      resume.education.push({
        degree: currentSubsection,
        institution,
        date,
        details
      });
    } else if (currentSection === 'projects' && currentSubsection) {
      const lines = content.split('\n');
      const details = [];
      for (const line of lines) {
        if (line.startsWith('-')) {
          details.push(line.substring(1).trim());
        }
      }
      resume.projects.push({
        name: currentSubsection,
        details
      });
    } else if (currentSection === 'certifications') {
      const items = content.split('\n').filter(line => line.startsWith('-'));
      resume.certifications.push(...items.map(i => i.substring(1).trim()));
    } else if (currentSection === 'awards') {
      const items = content.split('\n').filter(line => line.startsWith('-'));
      resume.awards.push(...items.map(i => i.substring(1).trim()));
    } else if (currentSection === 'languages') {
      const items = content.split('\n').filter(line => line.startsWith('-'));
      resume.languages.push(...items.map(i => i.substring(1).trim()));
    } else if (currentSection === 'interests') {
      const items = content.split('\n').filter(line => line.startsWith('-'));
      resume.interests.push(...items.map(i => i.substring(1).trim()));
    }
    
    buffer = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Main name (single #)
    if (line.startsWith('# ') && !line.startsWith('##')) {
      resume.name = line.substring(2).trim();
      continue;
    }
    
    // Main sections (##)
    if (line.startsWith('## ')) {
      processBuffer();
      currentSubsection = null;
      const sectionName = line.substring(3).trim().toLowerCase();
      
      if (sectionName.includes('contact')) currentSection = 'contact';
      else if (sectionName.includes('summary')) currentSection = 'summary';
      else if (sectionName.includes('skill')) currentSection = 'skills';
      else if (sectionName.includes('experience')) currentSection = 'experience';
      else if (sectionName.includes('education')) currentSection = 'education';
      else if (sectionName.includes('project')) currentSection = 'projects';
      else if (sectionName.includes('certification')) currentSection = 'certifications';
      else if (sectionName.includes('award')) currentSection = 'awards';
      else if (sectionName.includes('language')) currentSection = 'languages';
      else if (sectionName.includes('interest')) currentSection = 'interests';
      else currentSection = null;
      continue;
    }
    
    // Subsections (###)
    if (line.startsWith('### ')) {
      processBuffer();
      currentSubsection = line.substring(4).trim();
      continue;
    }
    
    // Contact info
    if (currentSection === 'contact' && line.startsWith('-')) {
      const [key, ...valueParts] = line.substring(1).split(':');
      const value = valueParts.join(':').trim();
      if (key && value) {
        resume.contact[key.trim().toLowerCase()] = value;
      }
      continue;
    }
    
    // Regular content
    if (line) {
      buffer.push(line);
    }
  }
  
  processBuffer(); // Process any remaining buffer
  
  return resume;
};

export const loadResume = async () => {
  try {
    const baseUrl = import.meta.env.BASE_URL;
    const response = await fetch(`${baseUrl}resume.md`);
    const text = await response.text();
    return parseResume(text);
  } catch (error) {
    console.error('Error loading resume:', error);
    return null;
  }
};
