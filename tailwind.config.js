/** @type {import('tailwindcss').Config} */
// import { Select, initTE } from "tw-elements";
// initTE({ Select });
module.exports = {
  content:  [
    "./pub/**/*.{html,js}",
    // "./node_modules/tw-elements/dist/js/**/*.js"
  ],  
  theme: {
    extend: {
      backgroundImage: {
        'checkbox-on': "url('/pub/img/checkbox-on.svg')",
        'checkbox-d': "url('/pub/img/checkbox-d.svg')",
        'radio-check': "url('/pub/img/radio-check.svg')",
        'radio-check-on': "url('/pub/img/radio-check-on.svg')",
        'select': "url('/pub/img/icon-onoff.svg')",
      }

    },
    fontFamily: {
      Pretendard: ["Pretendard"],
    },
    colors: {
      'gray-300': '#BCC1C5',
      'gray-400': '#A4AAB0',
      'gray-600': '#727A82',
      'gray-700': '#5B6168',
      'gray-900': '#2C3036',
      'gray-line': '#E9EAEB',      
      'primary-woori': '#0067AC',
      'primary-dark': '#090909',
      'primary-blue': '#3A8DFD',
      'primary-err': '#EA1917',
      'light': '#F7F8F9',
      'dark': '#F0F2F4',
      'disabled': '#EEF0F2',
      'white': '#FFFFFF',
    },
    backgroundPosition: {
      'right-1-center':'right 1rem center'
    },
    fontSize:{
      'md': '0.938rem',
    }
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require("tw-elements/dist/plugin.cjs")
  ],
  
}


