# Use a lightweight Node.js image to build the app
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json .

RUN npm install

# Copy the rest of the application source code
COPY . .

# Poert expose
EXPOSE 5173

# Rnn the application
CMD [ "npm", "run", "dev", "--", "--host" ]