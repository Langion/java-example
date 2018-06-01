# Java Example

This is an example of using [Langion](https://github.com/Langion/langion) with Java. It uses [Spring Boot "Microservice" Example Project](https://github.com/khoubyari/spring-boot-rest-example) as server.

## Requirements
 - [JDK](http://www.oracle.com/technetwork/java/javase/downloads/2133151) version > 8 (Check that `JAVA_HOME` [is set](https://stackoverflow.com/questions/2619584/how-to-set-java-home-on-windows-7))
 - You need [Maven](http://maven.apache.org/download.cgi) to be in your `PATH` ([for Windows users](http://maven.apache.org/guides/getting-started/windows-prerequisites.html))
 - Also, you need to install [Node.js](https://nodejs.org/en/)

## How to start
 After installing Node.js you have [NPM](https://www.npmjs.com/) in the `PATH`. In order to generate code you need in folder where `package.json` is placed run in terminal `npm run integrate`. If you want to run the example and try some requests run `npm start`. After that the following URLs are available:
 - http://localhost:4000/graphql - Graphql endpoint. Also there you can find [online IDE](https://github.com/graphql/graphiql) for requests
 - http://localhost:4000/playground - Another [playground](https://github.com/prismagraphql/graphql-playground) for GraphQL
 - http://localhost:4000/voyager - [GraphQL voyager](https://github.com/APIs-guru/graphql-voyager) shows relations among your entities

