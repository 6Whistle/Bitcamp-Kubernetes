FROM openjdk:17-alpine
LABEL discription="Erich Gamma Team JHL"
VOLUME "/tmp"
ARG JAR_FILE=./build/*.jar
ADD ${JAR_FILE} app.jar
EXPOSE 8080
ENTRYPOINT [ "java", "-jar", "app.jar" ]