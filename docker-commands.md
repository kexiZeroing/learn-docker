## docker commands

### basic
docker ps  
docker ps -a  
docker run [image]  
docker start [container]  
docker stop [container]  
docker images  
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

### check logs or into the container
docker logs [container]  
docker logs [container] | tail  
docker exec -it [container] /bin/sh

### docker-compose
docker-compose -f docker-compose.yaml up  
docker-compose -f docker-compose.yaml down

### docker build images
docker build -t my-app:1.0 .
