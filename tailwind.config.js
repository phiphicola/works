/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./pub/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'checkbox': "url('/pub/img/checkbox.svg')",
        'checkbox-on': "url('/pub/img/checkbox-on.svg')",
        'checkbox-d': "url('/pub/img/checkbox-d.svg')",
      }

    },
    fontFamily: {
      Pretendard: ["Pretendard"],
    },
    colors: {
      'gray-400': '#A4AAB0',
      'gray-600': '#727A82',
      'gray-700': '#5B6168',
      'gray-900': '#2C3036',
      'gray-line': '#E9EAEB',      
      'primary-woori': '#0067AC',
      'primary-dark': '#090909',
      'primary-blue': '#3A8DFD',
      'light': '#F7F8F9',
      'dark': '#F0F2F4',
      'disabled': '#EEF0F2',

    },
  },
  // plugins: [require("@tailwindcss/forms")],
  plugins: [],
}

