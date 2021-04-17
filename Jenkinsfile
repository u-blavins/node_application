
// A machine that executes an entire workflow
node {
    agent any
    // Setting stages within workflow
    stages {
        stage('Checkout SCM') {
            checkout scm
        }

        stage('Build') {
            echo 'Building Stage ...'
            sh "ls"
        }

        stage('Finish') {
            echo 'Finish pipeline'
        }
    }
}