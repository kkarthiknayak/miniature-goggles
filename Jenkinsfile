pipeline {
    agent any
    
    stages {
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
	}	
}
