FROM node:20.15.0-alpine as base
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN adduser -S user
RUN chown -R user /opt/app
COPY package*.json ./

# DEVELOPMENT APP PROFILE
FROM base AS development
RUN npm install && npm cache clean --force
COPY . ./
EXPOSE 8080
CMD ["npm", "run", "dev"]

# BUILD TARGET
FROM base as build
RUN npm install && npm cache clean --force
COPY . ./
RUN npm run build
USER user

# PRODUCTION CLIENT PROFILE
FROM nginx:1.22.0-alpine as production
COPY --from=build /opt/app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY config/nginx.conf /etc/nginx/conf.d
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
