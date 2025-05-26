#!/bin/bash

# Create directories if they don't exist
mkdir -p static/images

# Create a placeholder logo
cat > static/images/logo.png << 'EOF'
<svg width="130" height="50" xmlns="http://www.w3.org/2000/svg">
  <rect width="130" height="50" fill="#333"/>
  <text x="10" y="30" font-family="Arial" font-size="20" fill="#ffa500">CYBER HOST</text>
</svg>
EOF

# Create a background image
cat > static/images/bg.jpg << 'EOF'
<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#000033;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#000066;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#grad)"/>
  <circle cx="960" cy="540" r="400" fill="none" stroke="#ffa50033" stroke-width="2"/>
  <circle cx="960" cy="540" r="300" fill="none" stroke="#ffa50033" stroke-width="2"/>
  <circle cx="960" cy="540" r="200" fill="none" stroke="#ffa50033" stroke-width="2"/>
</svg>
EOF

echo "Placeholder images created successfully!"
