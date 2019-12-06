cp /docker/jenkins/home/workspace/DevOps_master/target/Heroku01.jar /docker/devops/
docker build -t devops .
docker stop devopscon
docker run -d --rm --name devopscon -p 8080:5005 devops
