# Use a lightweight Node.js image to build the app
FROM node:18-alpine as build

LABEL name="Muzammal"

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json .

RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application
RUN npm run build

# Use a lightweight Nginx image to serve the built app
FROM nginx:stable-alpine

# Copy the built app from the previous stage to the Nginx document root
COPY --from=build /app/dist /bin/www

# Copy the custom Nginx configuration file
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start Nginx in the foreground
CMD [ "nginx", "-g", "daemon off;" ]