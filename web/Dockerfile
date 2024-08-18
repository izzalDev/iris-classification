# Stage 1: Build the vite app
FROM node:alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Create the production image
FROM nginx:alpine-slim
LABEL org.opencontainers.image.source=https://github.com/izzaldev/iris-classification
LABEL org.opencontainers.image.description="Simple web implementation iris-classification using OnnxRuntime"
LABEL org.opencontainers.image.licenses=MIT
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
