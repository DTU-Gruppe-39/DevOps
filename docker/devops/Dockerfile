FROM java:8
WORKDIR /
ADD Heroku01.jar Heroku01.jar
EXPOSE 8080

#RUN apt update
#RUN apt install git
RUN git clone https://github.com/DTU-Gruppe-39/DevOps.git
RUN mv DevOps/src /
CMD java -jar Heroku01.jar

