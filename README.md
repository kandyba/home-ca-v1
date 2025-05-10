# HOME.CA - Your Home Management Platform

A modern web application for managing your home, tracking finances, and staying on top of maintenance tasks.

## Features

- **Home Dashboard**: Quick overview of your property details and important metrics
- **Interactive Map**: Visual representation of your property location
- **Financial Management**: Track monthly expenses including mortgage, insurance, and maintenance costs
- **Property Details**: Comprehensive information about your home including key facts, rooms, and estimated value
- **Responsive Design**: Fully responsive interface that works on all devices

## Tech Stack

- Vite
- Alpine.js
- Chart.js
- Tailwind CSS
- PostCSS

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Development

The project uses:
- Tailwind CSS for styling
- Alpine.js for reactivity
- Chart.js for data visualization
- Vite for build tooling and development server

## Project Structure

```
├── src/
│   ├── assets/
│   │   └── icons/         # SVG icons
│   ├── components/        # Reusable components
│   ├── style.css         # Global styles
│   └── main.js           # Main application entry
├── index.html            # Main HTML template
├── package.json          # Project dependencies
└── vite.config.js        # Vite configuration
```

## Building for Production

To create a production build:

```bash
npm run build
```

## License

MIT