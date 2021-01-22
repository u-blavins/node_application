# Node Application
Repo for developing a web application and with the intention of being deployed through Docker

## Tutorials
- (temp)[https://www.robinwieruch.de/node-js-express-tutorial]

## Prerequisites
To be able to deploy the application, please ensure that the following prerequisites have been installed.
> Node.js 14 (LTS)

## Backend
Follow these steps to setup the backend for the web application within a container

```
$ docker build -f backend.Dockerfile -t {username}/node_application .
$ docker run -p 49160:8080 -d {username}/node_application
$ curl http://0.0.0.0:49160
```