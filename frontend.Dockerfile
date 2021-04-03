# build vue application
FROM node:lts-alpine3.12 AS build
WORKDIR /app
COPY /frontend/package*.json ./
RUN npm install
COPY /frontend .
RUN npm run build

# build nginx server
FROM nginx:stable-alpine AS nginx-stage
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]