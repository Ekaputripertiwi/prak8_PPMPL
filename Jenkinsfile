pipeline {
    agent any
    environment { CI = 'true' }
    stages {
        stage('Debug Context') {
            steps {
                script {
                    def branch = env.BRANCH_NAME ?: env.GIT_BRANCH
                    echo "Current Branch Name: ${branch}"
                }
            }
        }
        stage('Checkout') {
            steps {
                script {
                    def branch = env.BRANCH_NAME ?: env.GIT_BRANCH
                    if (branch == 'main') {
                        git branch: 'main', url: 'https://github.com/Ekaputripertiwi/prak8_PPMPL.git'
                    } else if (branch == 'develop') {
                        git branch: 'develop', url: 'https://github.com/Ekaputripertiwi/prak8_PPMPL.git'
                    }
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Unit Tests') {
            steps {
                sh 'npm run test:unit'
            }
        }
        stage('Run Integration Tests') {
            steps {
                sh 'npm run test:integration'
            }
        }
        stage('Build') {
            steps {
            echo 'Building the application...'
            }
        }
        stage('Deploy to Staging') {
            steps {
                echo 'Simulating deployment to staging...'
            }
        }
    }
    post { 
        success { 
            emailext (
                subject: 'Build Succeeded', 
                body: 'The build succeeded!', 
                to: '2200016133@webmail.uad.ac.id'
            )
        } 
        failure { 
            emailext (
                subject: 'Build Failed',
                body: 'The build failed.', 
                to: '2200016133@webmail.uad.ac.id'
            )
        } 
    }
}