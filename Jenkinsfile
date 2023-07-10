pipeline {
    agent any
    tools {
        nodejs 'node'
        // Use the configured Node.js installation specified by 'your-nodejs-tool-name'
    }
    
    stages {
        stage('Checkout') {
            steps {
                
                git credentialsId: 'react-pswd-global',
                url: 'https://github.com/kkarthiknayak/miniature-goggles.git',
                branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                // Build the React app
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }
        stage('Host on Static Server') {
            steps {
                // Copy the built files to the static server location
                sh 'npm install express'
                sh 'node server.js'
                sh 'sleep 10' // Wait for server to start
                sh 'cp -R build/* /var/www/html'
            }
        }
    

        
        // Add more stages for building, testing, etc.
    }
}
