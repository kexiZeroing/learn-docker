## docker commands

### basic
docker ps  
docker ps -a  
docker run [image]  
docker start [container]  
docker stop [container]  
docker stop $(docker ps -a)  
docker images  
docker search [image]  
docker pull [image]:[tag]  
docker rm [container]  
docker rmi [image]  

### create docker network
docker network create [network]  
docker network ls

### start mongodb
docker run -d \\  
-p 27017:27017 \\  
-e MONGO_INITDB_ROOT_USERNAME=admin \\  
-e MONGO_INITDB_ROOT_PASSWORD=password \\  
--net mongo-network \\  
--name mongodb \\  
mongo

### start mongo-express
docker run -d \\  
-p 8080:8081 \\  
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \\  
-e ME_CONFIG_MONGODB_ADMINPASSWORD=password \\  
-e ME_CONFIG_MONGODB_SERVER=mongodb \\  
--net mongo-network \\  
--name mongo-express \\  
mongo-express

### check logs or container's virtual file system
docker logs [container]  
docker logs [container] | tail  
docker exec -it [container] /bin/sh

### docker-compose
docker-compose -f docker-compose.yaml up  
docker-compose -f docker-compose.yaml down

### docker build images
docker build -t my-app:1.0 .

### push to private repository
> DockerHub is the default registry, only need the name of docker images

docker push xxx.amazonaws.com/my-app:1.0  
docker tag my-app:1.1 xxx.amazonaws.com/my-app:1.1  
docker push xxx.amazonaws.com/my-app:1.1  

### deploy images to server
The server needs to login to pull from a private repository. Login not needed for public DockerHub. The docker-compose file would be used on the server to deploy all the apps/services.
