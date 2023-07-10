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
    

        
        // Add more stages for building, testing, etc.
    }
}
