pipeline {
    agent any
    libraries {
        library(identifier: 'credentials-binding@1.30', retriever: modernSCM([$class: 'GitSCMSource', remote: 'https://github.com/kkarthiknayak/miniature-goggles.git']))
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from version control system
                // For example, if you're using Git:
		withCredentials([usernamePassword(credentialsId: 'your-credential-id', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    // Use the credential in your build steps
                    sh 'echo "Username: $USERNAME"'
                    sh 'echo "Password: $PASSWORD"'
				}
                
            }
        }
	}	
}
