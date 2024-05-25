# build docker image
## docker build -t node-app:1.0

# Run docker images
## docker run --name node-app -d -p 3030:3000 node-app:1.0
### then navigation to browser localhost://3030

# View docker images
## docker images

# View docker containers
## docker ps -a

# Stop docker
# docker stop {container-id}

# Remove docker image
## docker image rm {IMAGE_ID}

# Container list
# docker container list