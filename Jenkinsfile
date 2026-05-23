pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                echo 'Code fetched from GitHub'
            }
        }

        stage('Build Service1 Docker Image') {
            steps {
                sh 'cd service1 && docker build -t service1 .'
            }
        }

        stage('Build Service2 Docker Image') {
            steps {
                sh 'cd service2 && docker build -t service2 .'
            }
        }

    }
}