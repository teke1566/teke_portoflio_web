module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
      playfair: ["Playfair Display", "serif"],
      opensans: ["Open Sans", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        blue: "#3498db",

        

      }, content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
      backgroundImage: {
        site: "url('./bg/15.svg')",
        about: "url('./assets/ser.png')",
       
      "gradient-rainblue":
        "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      },
    },
  },
  plugins: [],
};
