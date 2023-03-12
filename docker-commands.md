## docker commands

### basic
docker ps  
docker ps -a  
docker run [image]  
docker run -d -p 9000:80 nginx:1.23  
docker run -it [image] sh    
docker port [container]  
docker start [container]  
docker stop [container]  
docker stop $(docker ps -a)  
docker ps -aq | xargs docker stop | xargs docker rm  
docker images  
docker search [image]  
docker pull [image]:[tag]  
docker rm [container]  
docker rmi [image]  

### create docker network
docker network create [network]  
docker network ls
docker network inspect [network]

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
docker build -t [name:tag] [location of Dockerfile]
docker build -t my-app:1.0 .

### push to private repository
> DockerHub is the default registry, only need the name of docker images

docker push xxx.amazonaws.com/my-app:1.0  
docker tag my-app:1.1 xxx.amazonaws.com/my-app:1.1  
docker push xxx.amazonaws.com/my-app:1.1  

### deploy images to server
The server needs to login to pull from a private repository. Login not needed for public DockerHub. The docker-compose file would be used on the server to deploy all the apps/services.

## Docker Desktop
Docker Engine is the core product of Docker, including its daemon (dockerd) as well as its CLI (docker). 

Docker Daemon is the background service running on the host that manages building, running and distributing Docker containers. The daemon is the process that runs in the operating system which clients talk to. Docker Client is the command line tool that allows the user to interact with the daemon.

[Docker desktop](https://docs.docker.com/desktop) for both mac and windows is using a Linux virtual machine behind the scenes for running regular docker daemon. Docker Desktop can be used either on it’s own or as a complementary tool to the CLI.

## Leverage build cache
Docker images consist of layers. When building an image, Docker steps through the instructions in your Dockerfile, executing each in the order specified. As each instruction is examined, Docker looks for an existing image in its cache that it can reuse, rather than creating a new, duplicate image.

For the `ADD` and `COPY` instructions, the contents of each file in the image are examined and a checksum is calculated for each file. Aside from the `ADD` and `COPY` commands, just the command string itself is used to find a match. Once the cache is invalidated, all subsequent Dockerfile commands generate new images and the cache isn’t used.

> For example, Dockerfile copies `package.json`, `package-lock.json` then runs install, and finally copies the rest of the application. This way, `RUN npm install` is only re-executed if the `package.json` or `package-lock.json` files have changed.
