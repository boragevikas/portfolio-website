# Portfolio Website

This is a simple portfolio website built with React and styled using Tailwind CSS. The website features a header, footer, and a main content area where you can showcase your projects and skills.

## Project Structure

```
portfolio-website
├── public
│   ├── index.html        # Main HTML file
│   └── favicon.ico       # Favicon for the website
├── src
│   ├── components
│   │   ├── Header.js     # Header component
│   │   ├── Footer.js     # Footer component
│   │   └── App.js        # Main App component
│   ├── styles
│   │   └── tailwind.css  # Tailwind CSS styles
│   ├── index.js          # Entry point of the React application
│   └── App.js            # Main App component
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── .gitignore            # Files to ignore in Git
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm start
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages:**
   - Make sure to set the homepage in `package.json`:
     ```json
     "homepage": "https://boragevikas.github.io/portfolio-website"
     ```
   - Then run:
     ```bash
     npm run deploy
     ```

## Features

- Responsive design using Tailwind CSS
- Easy to customize components
- Simple structure for adding new projects and skills

## License

This project is licensed under the MIT License.