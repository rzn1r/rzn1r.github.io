# Rezn1r's Portfolio

Personal portfolio website for Minecraft Bedrock addon development.

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **CSS** - Terminal-style custom styling

## Development

### Prerequisites

- Node.js 20 or higher
- npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── AddonCards.jsx
│   │   ├── Contact.jsx
│   │   ├── KanyeQuote.jsx
│   │   └── Footer.jsx
│   ├── styles/            # CSS files
│   │   ├── terminal.css   # Base terminal theme
│   │   └── index.css      # Component styles
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── public/                # Static assets
│   ├── favicon files
│   ├── CNAME
│   └── site.webmanifest
└── dist/                  # Production build output
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

## Features

- Responsive design with terminal/retro aesthetic
- Animated element transitions
- Dynamic Kanye West quotes via API
- Minecraft addon showcase cards
- Contact information and social links

## License

© 2025 Rezn1r. All rights reserved.
