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
        
        
    

        
        // Add more stages for building, testing, etc.
    }
}
