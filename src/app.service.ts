import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! I am Surya Pratap from Prayagraj. I am a Software Developer';
  }

  getHeroPage(): string {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>🚀 CI/CD Pipeline - Deployment Success | Surya Pratap</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          overflow-x: hidden;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        
        /* Hero Section */
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
          margin: 60px 0;
          animation: slideUp 0.8s ease-out;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hero-content h1 {
          font-size: 3.5rem;
          color: white;
          margin-bottom: 20px;
          font-weight: 800;
          background: linear-gradient(120deg, #fff 0%, #e0e0e0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-content .subtitle {
          font-size: 1.8rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 20px;
          font-weight: 600;
        }
        
        .hero-content .author {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 30px;
          font-style: italic;
        }
        
        .success-badge {
          display: inline-block;
          background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 30px;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
        
        .description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.8;
          margin-bottom: 30px;
        }
        
        .stats-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .stat-box {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 20px;
          border-radius: 15px;
          text-align: center;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #84fab0;
          margin-bottom: 10px;
        }
        
        .stat-label {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
        }
        
        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1000px;
        }
        
        .deployment-box {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 40px;
          text-align: center;
          transform: rotateY(-10deg) rotateX(5deg);
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotateY(-10deg) rotateX(5deg);
          }
          50% {
            transform: translateY(-20px) rotateY(-10deg) rotateX(5deg);
          }
        }
        
        .deployment-icon {
          font-size: 80px;
          margin-bottom: 20px;
        }
        
        .deployment-text {
          color: white;
          font-weight: 700;
          font-size: 1.3rem;
          margin-bottom: 15px;
        }
        
        .deployment-subtext {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
        }
        
        /* Features Section */
        .features {
          margin: 80px 0;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 60px 40px;
        }
        
        .features-title {
          text-align: center;
          font-size: 2.5rem;
          color: white;
          margin-bottom: 50px;
          font-weight: 800;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 30px;
        }
        
        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 30px;
          transition: all 0.3s ease;
        }
        
        .feature-card:hover {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transform: translateY(-5px);
        }
        
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 15px;
        }
        
        .feature-title {
          font-size: 1.3rem;
          color: white;
          margin-bottom: 10px;
          font-weight: 700;
        }
        
        .feature-desc {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        /* Pipeline Stages */
        .pipeline-section {
          margin: 80px 0;
        }
        
        .pipeline-title {
          text-align: center;
          font-size: 2.5rem;
          color: white;
          margin-bottom: 50px;
          font-weight: 800;
        }
        
        .pipeline-stages {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .stage {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 20px 25px;
          text-align: center;
          flex: 1;
          min-width: 150px;
          transition: all 0.3s ease;
        }
        
        .stage:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
          border-color: rgba(255, 255, 255, 0.4);
          transform: scale(1.05);
        }
        
        .stage-number {
          background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 10px;
        }
        
        .stage-name {
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 5px;
        }
        
        .stage-desc {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
        }
        
        .stage-arrow {
          color: rgba(255, 255, 255, 0.5);
          font-size: 2rem;
          margin: 0 -10px;
        }
        
        /* Technology Stack */
        .tech-stack {
          margin: 80px 0;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 50px 40px;
        }
        
        .tech-title {
          text-align: center;
          font-size: 2.5rem;
          color: white;
          margin-bottom: 40px;
          font-weight: 800;
        }
        
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 25px;
        }
        
        .tech-item {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .tech-item:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }
        
        .tech-icon {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        
        .tech-name {
          color: white;
          font-weight: 700;
          font-size: 0.95rem;
        }
        
        /* Footer */
        footer {
          background: rgba(0, 0, 0, 0.3);
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          padding: 40px;
          margin-top: 80px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        footer p {
          font-size: 0.95rem;
          line-height: 1.8;
        }
        
        .footer-link {
          color: #84fab0;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .footer-link:hover {
          text-decoration: underline;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .hero {
            grid-template-columns: 1fr;
            margin: 40px 0;
          }
          
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-container {
            grid-template-columns: 1fr;
          }
          
          .pipeline-stages {
            flex-direction: column;
          }
          
          .stage-arrow {
            transform: rotate(90deg);
            margin: -10px 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Hero Section -->
        <section class="hero">
          <div class="hero-content">
            <div class="success-badge">✅ DEPLOYMENT SUCCESSFUL</div>
            <h1>Full CI/CD Pipeline Deployment</h1>
            <p class="subtitle">Production Ready Application</p>
            <p class="author">By Surya Pratap - Software Developer from Prayagraj</p>
            <p class="description">
              This is my first complete end-to-end CI/CD pipeline deployment on AWS EC2 with Docker, GitHub Webhooks, and Jenkins automation with email notifications. A fully automated deployment workflow ensuring continuous integration and continuous deployment with zero-downtime releases.
            </p>
            
            <div class="stats-container">
              <div class="stat-box">
                <div class="stat-number">100%</div>
                <div class="stat-label">Automation</div>
              </div>
              <div class="stat-box">
                <div class="stat-number">0s</div>
                <div class="stat-label">Manual Intervention</div>
              </div>
              <div class="stat-box">
                <div class="stat-number">∞</div>
                <div class="stat-label">Scalability</div>
              </div>
            </div>
          </div>
          
          <div class="hero-image">
            <div class="deployment-box">
              <div class="deployment-icon">🚀</div>
              <div class="deployment-text">Live on EC2</div>
              <div class="deployment-subtext">AWS Cloud Infrastructure</div>
            </div>
          </div>
        </section>
        
        <!-- Key Features -->
        <section class="features">
          <h2 class="features-title">🎯 Key Features & Components</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">🔗</div>
              <div class="feature-title">GitHub Integration</div>
              <div class="feature-desc">Automated webhooks trigger pipeline on every push to repository</div>
            </div>
            <div class="feature-card">
              <div class="feature-icon">⚙️</div>
              <div class="feature-title">Jenkins Automation</div>
              <div class="feature-desc">Orchestrates build, test, and deployment stages automatically</div>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🐳</div>
              <div class="feature-title">Docker Containerization</div>
              <div class="feature-desc">Lightweight containers ensure consistency across environments</div>
            </div>
            <div class="feature-card">
              <div class="feature-icon">☁️</div>
              <div class="feature-title">AWS EC2 Deployment</div>
              <div class="feature-desc">Runs on AWS EC2 instances with full cloud infrastructure</div>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📧</div>
              <div class="feature-title">Email Notifications</div>
              <div class="feature-desc">Real-time build status updates via email</div>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🔄</div>
              <div class="feature-title">Continuous Deployment</div>
              <div class="feature-desc">Zero-downtime automated deployments on every commit</div>
            </div>
          </div>
        </section>
        
        <!-- CI/CD Pipeline Stages -->
        <section class="pipeline-section">
          <h2 class="pipeline-title">🔄 CI/CD Pipeline Stages</h2>
          <div class="pipeline-stages">
            <div class="stage">
              <div class="stage-number">1</div>
              <div class="stage-name">GitHub Push</div>
              <div class="stage-desc">Code committed to repository</div>
            </div>
            <div class="stage-arrow">→</div>
            <div class="stage">
              <div class="stage-number">2</div>
              <div class="stage-name">Webhook Trigger</div>
              <div class="stage-desc">GitHub triggers Jenkins pipeline</div>
            </div>
            <div class="stage-arrow">→</div>
            <div class="stage">
              <div class="stage-number">3</div>
              <div class="stage-name">Build</div>
              <div class="stage-desc">Compile and test application</div>
            </div>
            <div class="stage-arrow">→</div>
            <div class="stage">
              <div class="stage-number">4</div>
              <div class="stage-name">Docker Build</div>
              <div class="stage-desc">Create Docker image</div>
            </div>
            <div class="stage-arrow">→</div>
            <div class="stage">
              <div class="stage-number">5</div>
              <div class="stage-name">Deploy</div>
              <div class="stage-desc">Push to EC2 production</div>
            </div>
            <div class="stage-arrow">→</div>
            <div class="stage">
              <div class="stage-number">6</div>
              <div class="stage-name">Notify</div>
              <div class="stage-desc">Send email confirmation</div>
            </div>
          </div>
        </section>
        
        <!-- Technology Stack -->
        <section class="tech-stack">
          <h2 class="tech-title">🛠️ Technology Stack</h2>
          <div class="tech-grid">
            <div class="tech-item">
              <div class="tech-icon">🦅</div>
              <div class="tech-name">NestJS</div>
            </div>
            <div class="tech-item">
              <div class="tech-icon">🔵</div>
              <div class="tech-name">Node.js</div>
            </div>
            <div class="tech-item">
              <div class="tech-icon">🐳</div>
              <div class="tech-name">Docker</div>
            </div>
            <div class="tech-item">
              <div class="tech-icon">☁️</div>
              <div class="tech-name">AWS EC2</div>
            </div>
            <div class="tech-item">
              <div class="tech-icon">🔧</div>
              <div class="tech-name">Jenkins</div>
            </div>
            <div class="tech-item">
              <div class="tech-icon">🐙</div>
              <div class="tech-name">GitHub</div>
            </div>
            <div class="tech-item">
              <div class="tech-icon">📨</div>
              <div class="tech-name">Email SMTP</div>
            </div>
            <div class="tech-item">
              <div class="tech-icon">🐧</div>
              <div class="tech-name">Linux</div>
            </div>
          </div>
        </section>
      </div>
      
      <!-- Footer -->
      <footer>
        <p><strong>🚀 First Successful CI/CD Pipeline Deployment</strong></p>
        <p>Deployment Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p>Built with passion by <strong>Surya Pratap</strong> from Prayagraj</p>
        <p>GitHub: <a href="https://github.com/suryapratap64" class="footer-link">@suryapratap64</a></p>
        <p style="margin-top: 20px; color: rgba(255, 255, 255, 0.6);">
          "From zero to production: Full automation with CI/CD" 🎯
        </p>
      </footer>
    </body>
    </html>
    `;
  }

  getPipelineInfo(): object {
    return {
      project: 'NestJS CI/CD Pipeline',
      author: 'Surya Pratap',
      location: 'Prayagraj',
      status: 'Successfully Deployed',
      deploymentDate: new Date().toISOString(),
      infrastructure: {
        platform: 'AWS EC2',
        containerization: 'Docker',
        cicd: 'Jenkins',
        versionControl: 'GitHub',
        notifications: 'Email (SMTP)',
        runtime: 'Node.js',
        framework: 'NestJS',
      },
      pipeline: {
        stage1: 'GitHub Push',
        stage2: 'Webhook Trigger',
        stage3: 'Build & Test',
        stage4: 'Docker Image Creation',
        stage5: 'AWS EC2 Deployment',
        stage6: 'Email Notification',
      },
      features: [
        'Automated CI/CD Pipeline',
        'Zero-Downtime Deployment',
        'Docker Containerization',
        'GitHub Webhook Integration',
        'Jenkins Orchestration',
        'Email Notifications',
        'Production Ready',
        'Scalable Infrastructure',
      ],
    };
  }
}
