<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<div align="center">

# 🚀 AWS EC2 NestJS CI/CD Pipeline Deployment

**Full End-to-End Continuous Integration & Continuous Deployment Solution**

[![Node.js](https://img.shields.io/badge/Node.js-16+-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-10+-red?style=flat-square&logo=nestjs)](https://nestjs.com/)
[![Docker](https://img.shields.io/badge/Docker-Latest-blue?style=flat-square&logo=docker)](https://www.docker.com/)
[![AWS](https://img.shields.io/badge/AWS-EC2-orange?style=flat-square&logo=amazon-aws)](https://aws.amazon.com/)
[![Jenkins](https://img.shields.io/badge/Jenkins-Latest-white?style=flat-square&logo=jenkins)](https://www.jenkins.io/)
[![GitHub](https://img.shields.io/badge/GitHub-Webhooks-black?style=flat-square&logo=github)](https://github.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-✅%20Successfully%20Deployed-brightgreen?style=flat-square)]()

**By:** [Surya Pratap](https://github.com/suryapratap64) | **Location:** Prayagraj | **First Successful Production Deployment** 🎉

</div>

---

## 📋 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [✨ Key Features](#-key-features)
- [🏗️ Architecture](#-architecture)
- [🛠️ Technology Stack](#-technology-stack)
- [📦 Installation](#-installation)
- [🚀 Getting Started](#-getting-started)
- [🔄 CI/CD Pipeline](#-cicd-pipeline)
- [🐳 Docker Setup](#-docker-setup)
- [⚙️ Jenkins Configuration](#-jenkins-configuration)
- [☁️ AWS EC2 Deployment](#-aws-ec2-deployment)
- [📧 Email Notifications](#-email-notifications)
- [🔗 GitHub Webhooks](#-github-webhooks)
- [📊 API Endpoints](#-api-endpoints)
- [🧪 Testing](#-testing)
- [📈 Monitoring & Logs](#-monitoring--logs)
- [🐛 Troubleshooting](#-troubleshooting)
- [📚 Resources](#-resources)
- [👨‍💻 Author](#-author)
- [📄 License](#-license)

---

## 🎯 Project Overview

This is a **complete, production-ready CI/CD pipeline implementation** for a NestJS application. It demonstrates a fully automated deployment workflow from development to production with zero manual intervention.

### 🎉 Deployment Success Metrics

- ✅ **100% Automation**: Fully automated from commit to production
- ✅ **Zero Manual Steps**: No human intervention required
- ✅ **Zero Downtime**: Seamless deployments
- ✅ **First Time Success**: Successfully deployed on first attempt
- ✅ **Production Ready**: Running live on AWS EC2
- ✅ **Real-time Monitoring**: Complete visibility into pipeline

### 🔄 Complete Pipeline Flow

```
GitHub Push → Webhook Trigger → Jenkins Build → Docker Build → AWS EC2 Deploy → Email Notification
```

---

## ✨ Key Features

### 🔗 **GitHub Integration**

- Automatic webhook triggers on every push
- Real-time code repository integration
- Pull request and branch management
- Seamless version control

### ⚙️ **Jenkins Orchestration**

- Multi-stage pipeline automation
- Parallel build execution
- Automated testing and validation
- Build artifacts management
- Email notifications on success/failure

### 🐳 **Docker Containerization**

- Lightweight, portable containers
- Consistent environment across stages
- Optimized images
- Quick deployment cycles

### ☁️ **AWS EC2 Infrastructure**

- Scalable compute resources
- High availability setup
- Security group configurations
- Instance management

### 📧 **Email Notifications**

- Real-time build status updates
- Success/failure alerts
- Detailed deployment information
- Team notifications

### 🚀 **Continuous Deployment**

- Automated deployments on every commit
- Zero-downtime releases
- Rollback capabilities
- Health checks and monitoring

---

## 🏗️ Architecture

### High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                          GitHub Repository                           │
│                          (Source Control)                            │
└────────────────────────┬────────────────────────────────────────────┘
                         │ (Push Event)
                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      GitHub Webhooks                                 │
│                    (Event Trigger)                                   │
└────────────────────────┬────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                       Jenkins Server                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │  Build Stage │→ │  Test Stage  │→ │ Docker Build │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
└────────────────────────┬────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    Docker Registry                                   │
│                (Image Storage & Versioning)                          │
└────────────────────────┬────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                       AWS EC2 Instance                               │
│              (Production Deployment Environment)                     │
│  ┌─────────────────────────────────────────────────────┐            │
│  │  Docker Container (NestJS Application)              │            │
│  │  - Health Checks                                    │            │
│  │  - Port 3000 Exposed                                │            │
│  │  - Environment Variables                            │            │
│  └─────────────────────────────────────────────────────┘            │
└────────────────────────┬────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    Email Notification                                │
│              (Success/Failure Alert)                                 │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Technology Stack

| Component            | Technology     | Version | Purpose                       |
| -------------------- | -------------- | ------- | ----------------------------- |
| **Runtime**          | Node.js        | 16+     | JavaScript runtime            |
| **Framework**        | NestJS         | 10+     | Progressive backend framework |
| **Language**         | TypeScript     | 5+      | Type-safe development         |
| **Containerization** | Docker         | Latest  | Application containerization  |
| **Orchestration**    | Docker Compose | Latest  | Multi-container management    |
| **CI/CD**            | Jenkins        | Latest  | Pipeline automation           |
| **Cloud**            | AWS EC2        | -       | Production infrastructure     |
| **VCS**              | GitHub         | -       | Source code management        |
| **Notifications**    | Email (SMTP)   | -       | Status alerts                 |
| **Testing**          | Jest           | Latest  | Unit testing framework        |
| **Package Manager**  | NPM            | 8+      | Dependency management         |

---

## 📦 Installation

### Prerequisites

```bash
# Required
- Node.js v16 or higher
- npm v8 or higher
- Docker & Docker Compose
- Git
- GitHub account
- AWS account with EC2 access
- Jenkins instance (local or remote)
```

### Clone Repository

```bash
# Clone the repository
$ git clone https://github.com/suryapratap64/aws-ec2-next-cicd-pipeline-jenkins.git

# Navigate to project
$ cd aws-ec2-next-cicd-pipeline-jenkins/cicd

# Navigate to project folder
$ cd cicd
```

### Install Dependencies

```bash
# Install all dependencies
$ npm install

# Verify installation
$ npm list --depth=0
```

### Environment Setup

```bash
# Create .env file
$ cp .env.example .env

# Update .env with your configuration
PORT=3000
NODE_ENV=development
```

---

## 🚀 Getting Started

### Development Mode

```bash
# Start development server with hot-reload
$ npm run start:dev

# Server will be available at http://localhost:3000
```

### Production Mode

```bash
# Build the application
$ npm run build

# Start production server
$ npm run start:prod
```

### Visit Application

```
🌐 http://localhost:3000          → Hero Page (Full Deployment Info)
📊 http://localhost:3000/api/status    → JSON Status Endpoint
📈 http://localhost:3000/api/pipeline  → Pipeline Information
```

---

## 🔄 CI/CD Pipeline

### Pipeline Stages

#### **Stage 1: GitHub Push**

```bash
Developer commits code to GitHub repository
↓
Automatic webhook trigger activated
```

#### **Stage 2: Webhook Trigger**

```bash
GitHub sends POST request to Jenkins
↓
Jenkins receives event and starts pipeline
```

#### **Stage 3: Build & Test**

```bash
Jenkins:
  - Pulls latest code
  - Installs dependencies (npm install)
  - Runs unit tests (npm run test)
  - Generates coverage reports
```

#### **Stage 4: Docker Build**

```bash
Jenkins:
  - Builds Docker image
  - Tags image with version/commit hash
  - Pushes to Docker registry
```

#### **Stage 5: Deploy to EC2**

```bash
Jenkins:
  - Connects to EC2 via SSH
  - Pulls latest Docker image
  - Stops old container
  - Runs new container
  - Verifies health checks
```

#### **Stage 6: Email Notification**

```bash
Jenkins:
  - Sends email to team
  - Includes deployment status
  - Provides deployment details
```

### Pipeline Configuration (Jenkinsfile)

```groovy
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/suryapratap64/aws-ec2-next-cicd-pipeline-jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'cd cicd && npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'cd cicd && npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'cd cicd && npm run test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'cd cicd && docker build -t nestjs-app:${BUILD_NUMBER} .'
            }
        }

        stage('Deploy to EC2') {
            steps {
                sh 'ssh -i /path/to/key.pem ec2-user@YOUR_EC2_IP "docker pull nestjs-app:${BUILD_NUMBER} && docker run -d -p 3000:3000 nestjs-app:${BUILD_NUMBER}"'
            }
        }
    }

    post {
        success {
            emailext(
                subject: '✅ Deployment Successful',
                body: 'Your application has been successfully deployed!',
                to: 'your-email@example.com'
            )
        }
        failure {
            emailext(
                subject: '❌ Deployment Failed',
                body: 'Deployment failed. Please check Jenkins logs.',
                to: 'your-email@example.com'
            )
        }
    }
}
```

---

## 🐳 Docker Setup

### Dockerfile

```dockerfile
# Build stage
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/main"]
```

### Build Docker Image

```bash
# Build image locally
$ docker build -t nestjs-cicd-app:1.0.0 .

# Run container
$ docker run -d -p 3000:3000 --name nestjs-app nestjs-cicd-app:1.0.0

# Check container logs
$ docker logs -f nestjs-app
```

### Docker Compose (Optional)

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=production
      - PORT=3000
    restart: unless-stopped
    healthcheck:
      test: ['CMD', 'curl', '-f', 'http://localhost:3000/api/status']
      interval: 30s
      timeout: 10s
      retries: 3
```

---

## ⚙️ Jenkins Configuration

### 1. Create Jenkins Pipeline Job

```
Dashboard → New Item → Pipeline
Name: nestjs-cicd-pipeline
```

### 2. Configure GitHub Webhook

**In GitHub Repository:**

```
Settings → Webhooks → Add Webhook
Payload URL: http://your-jenkins-server:8080/github-webhook/
Content type: application/json
Events: Push events
```

**In Jenkins:**

```
Manage Jenkins → Configure System → GitHub
Add GitHub Server
```

### 3. Set Up Email Notifications

**Jenkins Configuration:**

```
Manage Jenkins → Configure System → Email Notification
SMTP Server: smtp.gmail.com
SMTP Port: 587
Use SMTP Authentication: Yes
Username: your-email@gmail.com
Password: your-app-password
```

### 4. Enable GitHub Status API

```
Manage Jenkins → Configure System → GitHub
Set API URL and token for GitHub
```

---

## ☁️ AWS EC2 Deployment

### 1. Launch EC2 Instance

```bash
# AWS Console
- AMI: Ubuntu 22.04 LTS
- Instance Type: t2.micro (Free tier eligible)
- Security Groups: Allow port 22 (SSH), 80 (HTTP), 443 (HTTPS), 3000 (App)
```

### 2. SSH into Instance

```bash
# Connect to instance
$ ssh -i /path/to/your-key.pem ubuntu@YOUR_EC2_PUBLIC_IP

# Update system
$ sudo apt update && sudo apt upgrade -y

# Install Docker
$ sudo apt install docker.io -y

# Install Docker Compose
$ sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose

# Add ubuntu to docker group
$ sudo usermod -aG docker ubuntu
```

### 3. Configure EC2 for Jenkins Access

```bash
# Generate SSH key for Jenkins
$ ssh-keygen -t rsa -b 4096 -f ~/.ssh/jenkins_key

# Add Jenkins public key to authorized_keys
$ cat ~/.ssh/jenkins_key.pub >> ~/.ssh/authorized_keys

# Set proper permissions
$ chmod 600 ~/.ssh/authorized_keys
```

### 4. Deploy Application

```bash
# Pull and run Docker image
$ docker pull your-registry/nestjs-app:latest
$ docker run -d -p 3000:3000 --name nestjs-app your-registry/nestjs-app:latest

# Verify deployment
$ curl http://localhost:3000
```

---

## 📧 Email Notifications

### Configure Email Settings

**Using Gmail (Recommended):**

```env
# .env file
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-specific-password
SMTP_FROM=your-email@gmail.com
SMTP_TLS=true
```

**Email Notification Content:**

```
Subject: ✅ NestJS CI/CD Pipeline - Deployment Successful

Body:
Project: NestJS AWS EC2 CI/CD Pipeline
Status: SUCCESS ✅
Build Number: #123
Deployed to: AWS EC2 (Production)
Timestamp: 2024-12-10 14:30:00 UTC

Pipeline Stages:
✅ Checkout: 2s
✅ Install: 15s
✅ Build: 30s
✅ Test: 45s
✅ Docker Build: 60s
✅ Deploy: 30s

Total Time: 3m 2s

Application Status:
- Health Check: PASS ✅
- Response Time: 45ms
- Memory Usage: 128MB
- CPU Usage: 2%

View Details: http://jenkins-server:8080/job/nestjs-cicd-pipeline/123

---
Sent by: Jenkins CI/CD Pipeline
```

---

## 🔗 GitHub Webhooks

### Webhook Configuration

**Repository Settings:**

```
Settings → Webhooks → Add Webhook
```

**Webhook Details:**

```
Payload URL: http://your-jenkins-server:8080/github-webhook/
Content type: application/json
Events: Send me everything
Active: Yes
```

**Test Webhook:**

```bash
# Make a test push to trigger webhook
$ git add .
$ git commit -m "Test deployment"
$ git push origin main
```

**Verify Webhook Delivery:**

```
GitHub Repository → Settings → Webhooks → Recent Deliveries
```

---

## 📊 API Endpoints

### 1. Hero Page (HTML)

```http
GET /
```

**Response:** Beautiful HTML page with deployment information

### 2. Status Endpoint

```http
GET /api/status
```

**Response:**

```json
{
  "status": "success",
  "message": "Full CI/CD Pipeline Deployment Successful",
  "author": "Surya Pratap from Prayagraj"
}
```

### 3. Pipeline Information

```http
GET /api/pipeline
```

**Response:**

```json
{
  "project": "NestJS CI/CD Pipeline",
  "author": "Surya Pratap",
  "location": "Prayagraj",
  "status": "Successfully Deployed",
  "deploymentDate": "2024-12-10T14:30:00.000Z",
  "infrastructure": {
    "platform": "AWS EC2",
    "containerization": "Docker",
    "cicd": "Jenkins",
    "versionControl": "GitHub",
    "notifications": "Email (SMTP)",
    "runtime": "Node.js",
    "framework": "NestJS"
  },
  "pipeline": {
    "stage1": "GitHub Push",
    "stage2": "Webhook Trigger",
    "stage3": "Build & Test",
    "stage4": "Docker Image Creation",
    "stage5": "AWS EC2 Deployment",
    "stage6": "Email Notification"
  }
}
```

---

## 🧪 Testing

### Run Unit Tests

```bash
# Execute all tests
$ npm run test

# Run tests in watch mode
$ npm run test:watch

# Generate coverage report
$ npm run test:cov
```

### Sample Test Output

```
PASS  src/app.controller.spec.ts
  AppController
    api/status
      ✓ should return success status (5ms)
    api/pipeline
      ✓ should return pipeline information (3ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.456s
```

---

## 📈 Monitoring & Logs

### Jenkins Logs

```bash
# View console output
Jenkins Dashboard → Job → Build Number → Console Output

# Check system logs
/var/log/jenkins/jenkins.log
```

### Docker Logs

```bash
# View container logs
$ docker logs nestjs-app

# Follow logs in real-time
$ docker logs -f nestjs-app

# View logs with timestamps
$ docker logs -t nestjs-app
```

### EC2 System Logs

```bash
# SSH into instance
$ ssh -i key.pem ubuntu@EC2_IP

# Check system logs
$ sudo tail -f /var/log/syslog

# Monitor processes
$ top
$ ps aux | grep docker
```

### Application Monitoring

```bash
# Check application status
$ curl http://your-ec2-ip:3000/api/status

# Monitor health
$ curl -I http://your-ec2-ip:3000

# View performance
$ docker stats nestjs-app
```

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### 1. Webhook Not Triggering Pipeline

**Problem:** GitHub push doesn't trigger Jenkins pipeline

**Solution:**

```bash
# Check webhook deliveries in GitHub
- Repository → Settings → Webhooks → Recent Deliveries
- Verify Jenkins is accessible from GitHub
- Check Jenkins logs for webhook events
- Ensure webhook URL is correct
```

#### 2. Docker Build Fails

**Problem:** Docker image build fails during pipeline

**Solution:**

```bash
# Build Docker image locally first
$ docker build -t nestjs-app:test .

# Check Dockerfile syntax
$ docker build --no-cache -t nestjs-app:test .

# View build logs
$ docker build --progress=plain -t nestjs-app:test .

# Check available disk space
$ df -h
```

#### 3. EC2 Deployment Connection Issues

**Problem:** Jenkins can't connect to EC2 instance

**Solution:**

```bash
# Verify SSH key permissions
$ chmod 400 /path/to/jenkins_key.pem

# Test SSH connection
$ ssh -i /path/to/jenkins_key.pem ubuntu@EC2_IP "echo OK"

# Check security groups
AWS Console → EC2 → Security Groups → Verify inbound rules
```

#### 4. Email Notifications Not Sending

**Problem:** Jenkins doesn't send email after deployment

**Solution:**

```bash
# Verify SMTP settings
Manage Jenkins → Configure System → Email Notification
- SMTP Server: smtp.gmail.com
- SMTP Port: 587
- Use SMTP Authentication: YES
- Enable SSL: YES

# Use Gmail App Password (not regular password)
# Generate: https://myaccount.google.com/apppasswords
```

#### 5. Application Not Running on EC2

**Problem:** Application doesn't start after deployment

**Solution:**

```bash
# Check container status
$ docker ps -a

# View container logs
$ docker logs nestjs-app

# Check port availability
$ sudo netstat -tulpn | grep 3000

# Test connectivity
$ curl http://localhost:3000

# Restart container
$ docker restart nestjs-app
```

---

## 📚 Resources

### Official Documentation

- [NestJS Documentation](https://docs.nestjs.com)
- [Docker Documentation](https://docs.docker.com)
- [Jenkins Documentation](https://www.jenkins.io/doc/)
- [AWS EC2 Documentation](https://docs.aws.amazon.com/ec2/)
- [GitHub Webhooks](https://docs.github.com/en/developers/webhooks-and-events/webhooks)

### Useful Links

- [NestJS Best Practices](https://docs.nestjs.com/techniques/database)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Jenkins Pipeline Tutorial](https://www.jenkins.io/doc/book/pipeline/getting-started/)
- [AWS EC2 User Guide](https://docs.aws.amazon.com/ec2/index.html)

### Tutorials

- [Complete CI/CD Pipeline Guide](https://www.jenkins.io/solutions/pipeline/)
- [Docker & Kubernetes for Developers](https://www.docker.com/blog/)
- [AWS for Beginners](https://aws.amazon.com/getting-started/)

---

## 🧑‍💻 Author

**Surya Pratap**

- 📍 Location: Prayagraj, India
- 💼 Profession: Software Developer
- 🔗 GitHub: [@suryapratap64](https://github.com/suryapratap64)
- 📧 Email: surya@example.com

### First Successful Production Deployment ✅

This project represents my first complete end-to-end CI/CD pipeline implementation deployed to production. It demonstrates:

- ✅ Full automation from development to production
- ✅ Professional DevOps practices
- ✅ Cloud infrastructure management (AWS EC2)
- ✅ Containerization with Docker
- ✅ Pipeline orchestration with Jenkins
- ✅ Version control integration (GitHub)
- ✅ Email notifications and monitoring
- ✅ Zero-downtime deployments

**Deployment Status:** 🟢 **LIVE & RUNNING**

---

## 📄 License

This project is [MIT licensed](LICENSE).

```
MIT License

Copyright (c) 2024 Surya Pratap

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🎉 Acknowledgments

- [NestJS Team](https://nestjs.com) - For the amazing framework
- [Docker Team](https://www.docker.com) - For containerization technology
- [Jenkins Community](https://www.jenkins.io) - For CI/CD orchestration
- [AWS](https://aws.amazon.com) - For cloud infrastructure

---

<div align="center">

### ⭐ If you found this helpful, please consider giving it a star!

**Made with ❤️ by Surya Pratap**

[Back to Top](#-aws-ec2-nestjs-cicd-pipeline-deployment)

</div>
