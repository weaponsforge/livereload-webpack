FROM node:24.11.0-alpine AS base
WORKDIR /opt/app

# Use the node image's default user
RUN chown node:node /opt/app
USER node
COPY --chown=node:node package*.json ./

# DEVELOPMENT APP PROFILE
FROM base AS development
RUN npm ci && npm cache clean --force
COPY --chown=node:node . ./
EXPOSE 8080
CMD ["npm", "run", "dev"]

# BUILD TARGET
FROM base AS build
RUN npm ci && npm cache clean --force
COPY --chown=node:node . ./
RUN npm run build

# PRODUCTION CLIENT PROFILE
FROM nginx:1.22.0-alpine AS production
COPY --from=build /opt/app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY config/nginx.conf /etc/nginx/conf.d
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
