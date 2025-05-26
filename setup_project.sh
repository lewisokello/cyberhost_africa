#!/bin/bash

# Create necessary directories
mkdir -p templates/main
mkdir -p static/css
mkdir -p static/js
mkdir -p static/images
mkdir -p static/videos
mkdir -p media

# Create empty __init__.py files for Python packages
touch main/__init__.py

echo "Project structure set up successfully!"
