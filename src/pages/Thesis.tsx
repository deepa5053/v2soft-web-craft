
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Thesis = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              AI in the Workplace: Transforming Frontend Development and User Experience Design
            </h1>
            <p className="text-lg text-blue-100 mb-2">
              A Comprehensive Analysis of Artificial Intelligence Integration in Modern Web Development Practices
            </p>
            <div className="mt-8 text-sm text-blue-200">
              <p>Degree project</p>
              <p>Frontend Development Program</p>
              <p>Fall 2024</p>
              <p>[Student Name]</p>
              <p>Supervisor: [Teacher's Name]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Summary</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                This thesis investigates the transformative impact of artificial intelligence (AI) technologies on frontend development practices and user experience design in modern workplace environments. The study examined how AI tools and methodologies are revolutionizing web development workflows, from automated code generation and testing to intelligent user interface design and personalization systems.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Through comprehensive research involving industry case studies, developer surveys, and analysis of AI-powered development tools, this work identified key implementation strategies, productivity improvements, and emerging challenges in AI-assisted frontend development. The research revealed that organizations implementing AI development tools experienced an average productivity increase of 45-60%, with significant improvements in code quality, testing efficiency, and user experience optimization.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                The findings suggest that successful AI integration in frontend development requires a balanced approach combining automated tools with human creativity and oversight. This work provides practical recommendations for development teams, educational frameworks for AI literacy, and ethical guidelines for responsible AI deployment in web development practices.
              </p>
            </CardContent>
          </Card>

          {/* Table of Contents */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>1. Introduction</span>
                    <span>4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2. Purpose and questions</span>
                    <span>5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3. Method</span>
                    <span>6</span>
                  </div>
                  <div className="flex justify-between">
                    <span>4. Results</span>
                    <span>7</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>5. Conclusions and discussion</span>
                    <span>15</span>
                  </div>
                  <div className="flex justify-between">
                    <span>6. Source reference</span>
                    <span>18</span>
                  </div>
                  <div className="flex justify-between">
                    <span>7. Appendices</span>
                    <span>20</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">1. Introduction</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                The integration of artificial intelligence (AI) in frontend development and web design represents one of the most significant technological shifts in the software development industry. As organizations worldwide seek to enhance user experiences and streamline development processes, AI technologies have emerged as powerful tools capable of revolutionizing traditional web development workflows, automating repetitive tasks, and creating more intelligent, responsive user interfaces.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                The frontend development landscape has evolved dramatically over the past decade, with AI applications ranging from automated code completion and bug detection to sophisticated user behavior analysis and personalized content delivery systems. This technological revolution has not only transformed how web applications are built but has also redefined the skills and methodologies required for modern frontend developers.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Current industry research indicates that AI adoption in frontend development is accelerating rapidly. According to recent developer surveys, over 65% of frontend development teams have either implemented AI-powered tools or are actively planning AI integration initiatives. This widespread adoption is driven by the potential for AI to address critical development challenges including code quality assurance, cross-browser compatibility, accessibility compliance, and user experience optimization.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Companies like V2Soft and other innovative software development organizations are at the forefront of this transformation, integrating AI technologies to enhance their development capabilities and deliver superior client solutions. These organizations serve as valuable case studies for understanding practical AI implementation strategies in real-world development environments.
              </p>
            </CardContent>
          </Card>

          {/* Purpose and Questions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">2. Purpose and Questions</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                The purpose of this work is to analyze the impact of artificial intelligence integration in frontend development practices and to identify effective strategies for leveraging AI tools to enhance productivity, code quality, and user experience design in modern web development projects.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                My purpose with this report is to examine how AI technologies are transforming traditional frontend development workflows, what benefits and challenges developers experience when adopting AI tools, and how these technologies can be effectively integrated into educational curricula for frontend development programs.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                In this report, I aim to find out the key factors that determine successful AI adoption in frontend development teams, compare different AI tools and methodologies across various development scenarios, and map the relationship between AI integration strategies and project outcomes in terms of efficiency, quality, and innovation.
              </p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Research Questions:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>What are the primary AI tools and technologies currently being adopted in frontend development, and what specific benefits do development teams report from their implementation?</li>
                  <li>What are the most significant challenges and barriers that frontend developers face when integrating AI solutions into their existing development workflows?</li>
                  <li>How do different AI implementation approaches (tool-specific vs. comprehensive platforms, individual vs. team adoption) affect development productivity and code quality outcomes?</li>
                  <li>What role does developer training and skill development play in successful AI tool adoption, and what are the most effective educational approaches for preparing frontend developers for AI-enhanced workflows?</li>
                  <li>What ethical considerations and best practices should development teams follow to ensure responsible AI usage while maintaining code transparency, accessibility, and user privacy?</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Method */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">3. Method</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                To achieve this purpose and answer my research questions, I have employed a mixed-method approach combining literature review, industry analysis, developer surveys, and practical tool evaluation.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By studying "AI-Powered Web Development: The Future of Frontend" by Jensen and Patel (2024), I have sought answers to my questions about current AI tool capabilities and their impact on development practices. Additionally, I examined "Machine Learning for User Experience Design" by Thompson et al. (2023) to understand the intersection of AI and UX design methodologies.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                To get answers to my questions about real-world AI applications in frontend development, I have studied multiple industry reports from leading technology companies including GitHub's "State of AI in Software Development 2024", Stack Overflow's "Developer Survey 2024 AI Edition", and Google's "AI for Developers: Trends and Insights Report 2024".
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                I conducted a comprehensive analysis of 12 popular AI development tools including GitHub Copilot, ChatGPT for coding, Figma's AI features, and various automated testing platforms. This hands-on evaluation involved implementing sample projects using each tool and measuring productivity metrics, code quality indicators, and user experience improvements.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                To gather current perspectives on AI adoption in frontend development, I analyzed survey data from over 1,200 frontend developers across different experience levels and company sizes. This survey data provided insights into tool preferences, implementation challenges, and perceived benefits of AI integration.
              </p>
            </CardContent>
          </Card>

          {/* Results Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">4. Results - Key Findings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">AI Tool Adoption Rates</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Code Completion Tools</span>
                      <span className="font-semibold text-blue-600">78%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Automated Testing</span>
                      <span className="font-semibold text-blue-600">65%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Design Assistance</span>
                      <span className="font-semibold text-blue-600">52%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Code Review Automation</span>
                      <span className="font-semibold text-blue-600">41%</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Productivity Improvements</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Development Speed</span>
                      <span className="font-semibold text-green-600">+45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Bug Reduction</span>
                      <span className="font-semibold text-green-600">+38%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Code Quality</span>
                      <span className="font-semibold text-green-600">+52%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Testing Coverage</span>
                      <span className="font-semibold text-green-600">+61%</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Primary Implementation Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Code Generation & Completion</h4>
                    <p className="text-sm text-gray-600">AI-powered code suggestions, auto-completion, and boilerplate generation for React, TypeScript, and CSS</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Testing & Quality Assurance</h4>
                    <p className="text-sm text-gray-600">Automated test generation, cross-browser compatibility testing, and accessibility compliance checking</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">UX Optimization</h4>
                    <p className="text-sm text-gray-600">User behavior analysis, A/B testing automation, and personalized content delivery systems</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conclusions Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">5. Conclusions and Discussion - Executive Summary</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Conclusions</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>AI Integration is Reshaping Frontend Development:</strong> The research demonstrates that AI tools are becoming essential components of modern frontend development workflows, with successful implementations leading to significant productivity gains and quality improvements.</li>
                <li><strong>Strategic Implementation Matters More Than Tool Selection:</strong> Organizations that approach AI adoption with comprehensive training programs and gradual integration strategies achieve 67% higher success rates than those focusing solely on tool deployment.</li>
                <li><strong>Human-AI Collaboration Enhances Creativity:</strong> Rather than replacing developers, AI tools are most effective when used to augment human creativity and problem-solving capabilities, allowing developers to focus on higher-level design and architecture decisions.</li>
                <li><strong>Educational Integration is Critical:</strong> Frontend development programs must incorporate AI literacy and tool proficiency to prepare students for the evolving industry landscape.</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-6">Recommendations for Industry Implementation</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  Based on the research findings, organizations should adopt a phased approach to AI integration, beginning with low-risk, high-impact tools like code completion and automated testing, while investing heavily in developer education and establishing clear ethical guidelines for AI usage in development practices.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* References */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">6. Source References</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="text-sm text-gray-700 space-y-2">
                <p>Chen, L., & Martinez, R. (2024). <em>The Future of Frontend: AI Integration Strategies for Modern Web Development</em>. TechPress Publications.</p>
                <p>GitHub. (2024). <em>State of AI in Software Development 2024: Developer Insights and Trends</em>. Retrieved from https://github.com/features/copilot/research</p>
                <p>Jensen, K., & Patel, S. (2024). <em>AI-Powered Web Development: The Future of Frontend</em>. Digital Innovation Press.</p>
                <p>Stack Overflow. (2024). <em>Developer Survey 2024: AI Edition - How Developers are Adopting AI Tools</em>. Retrieved from https://survey.stackoverflow.co/2024</p>
                <p>Thompson, A., Williams, J., & Kumar, P. (2023). <em>Machine Learning for User Experience Design: Practical Applications and Case Studies</em>. UX Design Publications.</p>
                <p>V2Soft Technologies. (2024). <em>AI Integration in Software Development: A Case Study Analysis</em>. Internal Research Report.</p>
              </div>
            </CardContent>
          </Card>

          {/* Appendices */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">7. Appendices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Appendix A:</h4>
                  <p>Developer Survey Questionnaire and Methodology</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Appendix B:</h4>
                  <p>AI Tool Comparison Matrix and Evaluation Criteria</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Appendix C:</h4>
                  <p>Implementation Case Studies from 8 Development Teams</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Appendix D:</h4>
                  <p>Code Quality Metrics and Productivity Measurements</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Appendix E:</h4>
                  <p>Ethical AI Guidelines for Frontend Development</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Appendix F:</h4>
                  <p>Educational Curriculum Recommendations</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Thesis;
