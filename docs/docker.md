# docker

## docker install on ubuntu
```
sudo apt -y update
sudo curl -sSL https://get.docker.com/ | sh
sudo docker run hello-world
```

## mongodb docker

- sudo docker run -d -p 2717:27017 -v ~/mongodbtutorial:/data/db --name mymongo mongo:latest
- sudo docker exec -it mymongo bash
