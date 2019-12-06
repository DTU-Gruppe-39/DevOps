sudo docker run -d --name jenkins -v /docker/jenkins/home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock -v "$HOME":/home -p 1010:8080 -p 50000:50000 jenkinsci/blueocean
