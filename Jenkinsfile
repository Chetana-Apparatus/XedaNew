pipeline {
  agent any

  environment {
    IMAGE_NAME = 'xedafarm'
    CONTAINER_NAME = 'xedafarm'
    ENV_CREDENTIAL_ID = 'xedafarm_env'
    HOST_PORT = '6014'
    CONTAINER_PORT = '6014'
    NEXT_PUBLIC_CONTACTS_API_URL = 'https://api.xedafarm.com/api/contacts/'
  }

  stages {

    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Docker Build') {
      steps {
        sh """
          docker build \
            --build-arg NEXT_PUBLIC_CONTACTS_API_URL=${NEXT_PUBLIC_CONTACTS_API_URL} \
            -t ${IMAGE_NAME}:${BUILD_NUMBER} \
            -t ${IMAGE_NAME}:latest \
            .
        """
      }
    }

    stage('Deploy') {
      steps {
        withCredentials([file(credentialsId: "${ENV_CREDENTIAL_ID}", variable: 'DOTENV_FILE')]) {
          sh '''
            # Free port 6014 before starting the new container
            docker stop ${CONTAINER_NAME} || true
            docker rm ${CONTAINER_NAME} || true

            docker run -d \
              --name ${CONTAINER_NAME} \
              -p ${HOST_PORT}:${CONTAINER_PORT} \
              --env-file "$DOTENV_FILE" \
              -e PORT=${CONTAINER_PORT} \
              --memory="512m" \
              --cpus="1.0" \
              --log-opt max-size=10m \
              --log-opt max-file=3 \
              ${IMAGE_NAME}:latest

            sleep 10
            curl -f http://localhost:${HOST_PORT}/api/health || exit 1
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
      echo 'Deployment failed — check Jenkins logs and container status on the host.'
    }
  }
}
