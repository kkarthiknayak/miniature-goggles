pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                
                git credentialsId: 'react-pswd-global',
                url: 'https://github.com/kkarthiknayak/miniature-goggles.git',
                branch: 'main'
            }
        }
        
    

        
        // Add more stages for building, testing, etc.
    }
}
