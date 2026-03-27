## 빌드 단계
#FROM gradle:9.3.1-jdk17 AS builder
#WORKDIR /app
#
#COPY build.gradle ./
#COPY settings.gradle ./
#
#RUN gradle dependencies --no-daemon
#
#COPY ./src  ./src
#RUN gradle bootjar --no-daemon
#
## 실행 단계
#FROM  openjdk:17-ea-17-slim
#WORKDIR /app
#COPY --from=builder /app/build/libs/*.jar  app.jar
#EXPOSE 8080
#ENTRYPOINT ["java", "-jar", "app.jar"]

FROM  openjdk:17-ea-17-slim
ARG JAR_FILE
COPY ${JAR_FILE}  app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]