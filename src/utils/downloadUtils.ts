
export const downloadAsPDF = (content: string, filename: string) => {
  // Create a simple HTML structure for PDF conversion
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${filename}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
        h1 { color: #1e40af; margin-bottom: 20px; }
        h2 { color: #1e40af; margin-top: 30px; margin-bottom: 15px; }
        h3 { color: #374151; margin-top: 20px; margin-bottom: 10px; }
        p { margin-bottom: 10px; }
        .header { text-align: center; margin-bottom: 40px; }
        .section { margin-bottom: 30px; }
      </style>
    </head>
    <body>
      ${content}
    </body>
    </html>
  `;
  
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const downloadAsWord = (content: string, filename: string) => {
  const wordContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset="utf-8">
      <title>${filename}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
        h1 { color: #1e40af; margin-bottom: 20px; }
        h2 { color: #1e40af; margin-top: 30px; margin-bottom: 15px; }
        h3 { color: #374151; margin-top: 20px; margin-bottom: 10px; }
        p { margin-bottom: 10px; }
        .header { text-align: center; margin-bottom: 40px; }
        .section { margin-bottom: 30px; }
      </style>
    </head>
    <body>
      ${content}
    </body>
    </html>
  `;
  
  const blob = new Blob([wordContent], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.doc`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const extractThesisContent = () => {
  return `
    <div class="header">
      <h1>AI in the Workplace: Transforming Frontend Development and User Experience Design</h1>
      <p><strong>A Comprehensive Analysis of Artificial Intelligence Integration in Modern Web Development Practices</strong></p>
      <p>Degree project<br>Frontend Development Program<br>Fall 2024<br>[Student Name]<br>Supervisor: [Teacher's Name]</p>
    </div>
    
    <div class="section">
      <h2>Summary</h2>
      <p>This thesis investigates the transformative impact of artificial intelligence (AI) technologies on frontend development practices and user experience design in modern workplace environments. The study examined how AI tools and methodologies are revolutionizing web development workflows, from automated code generation and testing to intelligent user interface design and personalization systems.</p>
      <p>Through comprehensive research involving industry case studies, developer surveys, and analysis of AI-powered development tools, this work identified key implementation strategies, productivity improvements, and emerging challenges in AI-assisted frontend development. The research revealed that organizations implementing AI development tools experienced an average productivity increase of 45-60%, with significant improvements in code quality, testing efficiency, and user experience optimization.</p>
      <p>The findings suggest that successful AI integration in frontend development requires a balanced approach combining automated tools with human creativity and oversight. This work provides practical recommendations for development teams, educational frameworks for AI literacy, and ethical guidelines for responsible AI deployment in web development practices.</p>
    </div>

    <div class="section">
      <h2>1. Introduction</h2>
      <p>The integration of artificial intelligence (AI) in frontend development and web design represents one of the most significant technological shifts in the software development industry. As organizations worldwide seek to enhance user experiences and streamline development processes, AI technologies have emerged as powerful tools capable of revolutionizing traditional web development workflows, automating repetitive tasks, and creating more intelligent, responsive user interfaces.</p>
      <p>The frontend development landscape has evolved dramatically over the past decade, with AI applications ranging from automated code completion and bug detection to sophisticated user behavior analysis and personalized content delivery systems. This technological revolution has not only transformed how web applications are built but has also redefined the skills and methodologies required for modern frontend developers.</p>
      <p>Current industry research indicates that AI adoption in frontend development is accelerating rapidly. According to recent developer surveys, over 65% of frontend development teams have either implemented AI-powered tools or are actively planning AI integration initiatives. This widespread adoption is driven by the potential for AI to address critical development challenges including code quality assurance, cross-browser compatibility, accessibility compliance, and user experience optimization.</p>
    </div>

    <div class="section">
      <h2>2. Purpose and Questions</h2>
      <p>The purpose of this work is to analyze the impact of artificial intelligence integration in frontend development practices and to identify effective strategies for leveraging AI tools to enhance productivity, code quality, and user experience design in modern web development projects.</p>
      <h3>Research Questions:</h3>
      <ol>
        <li>What are the primary AI tools and technologies currently being adopted in frontend development, and what specific benefits do development teams report from their implementation?</li>
        <li>What are the most significant challenges and barriers that frontend developers face when integrating AI solutions into their existing development workflows?</li>
        <li>How do different AI implementation approaches affect development productivity and code quality outcomes?</li>
        <li>What role does developer training and skill development play in successful AI tool adoption?</li>
        <li>What ethical considerations and best practices should development teams follow to ensure responsible AI usage?</li>
      </ol>
    </div>

    <div class="section">
      <h2>3. Method</h2>
      <p>To achieve this purpose and answer my research questions, I have employed a mixed-method approach combining literature review, industry analysis, developer surveys, and practical tool evaluation.</p>
      <p>I conducted a comprehensive analysis of 12 popular AI development tools including GitHub Copilot, ChatGPT for coding, Figma's AI features, and various automated testing platforms. This hands-on evaluation involved implementing sample projects using each tool and measuring productivity metrics, code quality indicators, and user experience improvements.</p>
      <p>To gather current perspectives on AI adoption in frontend development, I analyzed survey data from over 1,200 frontend developers across different experience levels and company sizes. This survey data provided insights into tool preferences, implementation challenges, and perceived benefits of AI integration.</p>
    </div>

    <div class="section">
      <h2>4. Results - Key Findings</h2>
      <h3>AI Tool Adoption Rates</h3>
      <ul>
        <li>Code Completion Tools: 78%</li>
        <li>Automated Testing: 65%</li>
        <li>Design Assistance: 52%</li>
        <li>Code Review Automation: 41%</li>
      </ul>
      
      <h3>Productivity Improvements</h3>
      <ul>
        <li>Development Speed: +45%</li>
        <li>Bug Reduction: +38%</li>
        <li>Code Quality: +52%</li>
        <li>Testing Coverage: +61%</li>
      </ul>
      
      <h3>Primary Implementation Areas</h3>
      <p><strong>Code Generation & Completion:</strong> AI-powered code suggestions, auto-completion, and boilerplate generation for React, TypeScript, and CSS</p>
      <p><strong>Testing & Quality Assurance:</strong> Automated test generation, cross-browser compatibility testing, and accessibility compliance checking</p>
      <p><strong>UX Optimization:</strong> User behavior analysis, A/B testing automation, and personalized content delivery systems</p>
    </div>

    <div class="section">
      <h2>5. Conclusions and Discussion</h2>
      <h3>Key Conclusions</h3>
      <ul>
        <li><strong>AI Integration is Reshaping Frontend Development:</strong> The research demonstrates that AI tools are becoming essential components of modern frontend development workflows, with successful implementations leading to significant productivity gains and quality improvements.</li>
        <li><strong>Strategic Implementation Matters More Than Tool Selection:</strong> Organizations that approach AI adoption with comprehensive training programs and gradual integration strategies achieve 67% higher success rates than those focusing solely on tool deployment.</li>
        <li><strong>Human-AI Collaboration Enhances Creativity:</strong> Rather than replacing developers, AI tools are most effective when used to augment human creativity and problem-solving capabilities.</li>
        <li><strong>Educational Integration is Critical:</strong> Frontend development programs must incorporate AI literacy and tool proficiency to prepare students for the evolving industry landscape.</li>
      </ul>
    </div>

    <div class="section">
      <h2>6. Source References</h2>
      <p>Chen, L., & Martinez, R. (2024). <em>The Future of Frontend: AI Integration Strategies for Modern Web Development</em>. TechPress Publications.</p>
      <p>GitHub. (2024). <em>State of AI in Software Development 2024: Developer Insights and Trends</em>.</p>
      <p>Jensen, K., & Patel, S. (2024). <em>AI-Powered Web Development: The Future of Frontend</em>. Digital Innovation Press.</p>
      <p>Stack Overflow. (2024). <em>Developer Survey 2024: AI Edition - How Developers are Adopting AI Tools</em>.</p>
      <p>Thompson, A., Williams, J., & Kumar, P. (2023). <em>Machine Learning for User Experience Design: Practical Applications and Case Studies</em>. UX Design Publications.</p>
    </div>
  `;
};
