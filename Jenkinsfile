pipeline {
  agent any

  environment {
    IMAGE_NAME = 'project_name'
    CONTAINER_NAME = 'project_name'
    ENV_CREDENTIAL_ID = "project_name_env"
    HOST_PORT = '3000'
    CONTAINER_PORT = '3000'
  }

  stages {

    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Docker Build') {
      steps {
        sh "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} -t ${IMAGE_NAME}:latest ."
      }
    }

    stage('Deploy') {
      steps {
        withCredentials([file(credentialsId: "${ENV_CREDENTIAL_ID}", variable: 'DOTENV_FILE')]) {
          sh '''
            NEW_CONTAINER="${CONTAINER_NAME}_temp"

            # Start new container first (safe deploy)
            docker rm -f $NEW_CONTAINER || true

            docker run -d \
              --name $NEW_CONTAINER \
              -p ${HOST_PORT}:${CONTAINER_PORT} \
              --env-file "$DOTENV_FILE" \
              --memory="512m" \
              --cpus="1.0" \
              --log-opt max-size=10m \
              --log-opt max-file=3 \
              ${IMAGE_NAME}:latest

            # Wait for startup
            sleep 10

            # Optional health check (if endpoint exists)
            curl -f http://localhost:${HOST_PORT}/api/health || exit 1

            # Replace old container only after success
            docker stop ${CONTAINER_NAME} || true
            docker rm ${CONTAINER_NAME} || true

            docker rename $NEW_CONTAINER ${CONTAINER_NAME}
          '''
        }
      }
    }

    stage('Cleanup') {
      steps {
        sh 'docker image prune -f'
      }
    }
  }

  post {
    failure {
      echo 'Deployment failed — old container was not removed.'
    }
  }
}