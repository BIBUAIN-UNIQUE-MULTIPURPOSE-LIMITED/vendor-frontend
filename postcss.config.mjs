const config = {
  plugins: {
    tailwindcss: {
      config: {
        content: [
          './pages/**/*.{js,ts,jsx,tsx}',
          './components/**/*.{js,ts,jsx,tsx}',
          './app/**/*.{js,ts,jsx,tsx}',
          './src/**/*.{js,ts,jsx,tsx}',
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      }
    },
    autoprefixer: {},
  },
};

export default config;