#!/bin/bash
# Create the proper directory structure
mkdir -p templates/main
mkdir -p static/css
mkdir -p static/js
mkdir -p static/images

# Move template files to the correct location
mv templates/main/home.html templates/main/ 2>/dev/null || echo "home.html already moved"
mv templates/main/about.html templates/main/ 2>/dev/null || echo "about.html already moved"
mv templates/main/mission.html templates/main/ 2>/dev/null || echo "mission.html already moved"
mv templates/main/services.html templates/main/ 2>/dev/null || echo "services.html already moved"
mv templates/main/contact.html templates/main/ 2>/dev/null || echo "contact.html already moved"
mv templates/main/internet.html templates/main/ 2>/dev/null || echo "internet.html already moved"
mv templates/main/it_support.html templates/main/ 2>/dev/null || echo "it_support.html already moved"
mv templates/main/software.html templates/main/ 2>/dev/null || echo "software.html already moved"
mv templates/main/web_ai.html templates/main/ 2>/dev/null || echo "web_ai.html already moved"
mv templates/main/testimonials.html templates/main/ 2>/dev/null || echo "testimonials.html already moved"

# Move static files
mv static/css/styles.css static/css/ 2>/dev/null || echo "styles.css already moved"
mv static/js/main.js static/js/ 2>/dev/null || echo "main.js already moved"

echo "Files moved to the correct locations"
