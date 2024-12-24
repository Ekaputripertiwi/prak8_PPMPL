pipeline {
 agent any
 environment {
 CI = 'true'
 }
 stages {
 stage('Checkout') {
 steps {
 git branch: 'main', url: 'https://github.com/Ekaputripertiwi/prak8_PPMPL'
 }
 }
 stage('Install Dependencies') {
 steps {
 sh 'npm install'
 }
 }
 stage('Run Unit Tests') {
 steps {
 sh 'npm test'
 }
 }
 stage('Build') {
 steps {
 echo 'Building the application...'
 // Tambahkan perintah build jika diperlukan
 }
 }
 stage('Deploy') {
 steps {
 echo 'Deploying the application...'
 // Tambahkan perintah deploy jika diperlukan
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