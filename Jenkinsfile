pipeline {
    agent {
        node {
            label 'node'
            // The agent with Node.js installed will be used for the pipeline
        }
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
