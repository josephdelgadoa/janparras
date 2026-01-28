#!/bin/bash
# DEPLOYMENT SCRIPT FOR HOSTINGER VPS
# Run this on your VPS at /root/jonparras

echo "Starting Deployment for Jon Parras Website..."

# 1. Pull latest changes
echo "Pulling latest code from GitHub..."
git pull origin main

# 2. Build and Start Docker Containers
echo "Building and starting Docker container on Port 8007..."
docker-compose up -d --build

# 3. Clean up unused images
docker image prune -f

echo "✅ Deployment Complete!"
echo "App should be running at http://localhost:8007"
echo "Ensure Nginx Proxy Manager points to this port."
