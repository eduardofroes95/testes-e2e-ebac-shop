pipeline {
    
    agent any

    stages {
        stage('Clonar o repositório') {
            steps {
                git 'https://github.com/eduardofroes95/testes-e2e-ebac-shop.git'
            }
        }
         stage('Instalar as dependências') {
            steps {
              bat 'npm install'
            }
        }
         stage('Execução dos testes') {
            steps {
                bat 'npm run cy:run'
            }
        }
    }
}