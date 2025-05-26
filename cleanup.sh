#!/bin/bash
# This script will clean up the project structure by removing duplicate files

# Remove files from root directory that should be in templates/main
rm -f index.html about.html contact.html services.html mission.html internet.html it-support.html software.html web_ai.html testimonials.html 2>/dev/null

# Create proper directory structure if it doesn't exist
mkdir -p templates/main
mkdir -p static/css
mkdir -p static/js
mkdir -p static/images
mkdir -p static/videos

echo "Project structure cleaned up successfully!"
