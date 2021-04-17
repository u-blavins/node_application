
// A machine that executes an entire workflow
node {
    // Setting stages within workflow
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