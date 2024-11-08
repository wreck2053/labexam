# Use the official Node.js 18 image as the base image
FROM node:18

# Create and set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 80 (the default for our Node.js app)
EXPOSE 80

# Set the default command to run the server
CMD ["node", "server.js"]
