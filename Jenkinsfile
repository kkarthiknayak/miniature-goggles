pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                
                git credentialsId: 'react-pswd-global',
                url: 'https://github.com/kkarthiknayak/miniature-goggles.git',
                branch: 'main',
                usernameVariable: 'GIT_USERNAME',
                passwordVariable: 'GIT_PASSWORD'
            
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install Node.js and npm
                // You can use a tool like nvm to manage Node.js versions
                // For example, using nvm:
                sh 'nvm install 14.17.0'
                sh 'nvm use 14.17.0'
                
                // Install project dependencies
                sh 'npm install'
            }
        }
    

        
        // Add more stages for building, testing, etc.
    }
}
