/** @type {import('tailwindcss').Config} */
// import { Select, initTE } from "tw-elements";
// initTE({ Select });
module.exports = {
  content:  [
    "./pub/**/*.{html,js}",
    // "./node_modules/tw-elements/dist/js/**/*.js"
  ],  
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        'checkbox-on': "url('/pub/img/checkbox-on.svg')",
        'checkbox-d': "url('/pub/img/checkbox-d.svg')",
        'radio-check': "url('/pub/img/radio-check.svg')",
        'radio-check-on': "url('/pub/img/radio-check-on.svg')",
        'select': "url('/pub/img/icon-onoff.svg')",
      },
      minWidth:{
        '4':'16px',
      },
      minHeight:{
        '15':'60px',
      },
      height:{
        '13':'50px',
        '15':'60px',
      },
      lineHeight: {
        '13': '50px',
      },
      colors: {
        'gray-50': '#F9FAFB',
        'gray-300': '#BCC1C5',
        'gray-400': '#A4AAB0',
        'gray-600': '#727A82',
        'gray-700': '#5B6168',
        'gray-700': '#44494E',      
        'gray-900': '#2C3036',
        'gray-date': '#8A919A',  
        'gray-box':'#F4F7FA',
        'gray-line': '#E9EAEB',      
        'primary-woori': '#0067AC',
        'primary-dark': '#090909',
        'primary-blue': '#3A8DFD',
        'primary-err': '#EA1917',
        'red': '#F0360D',
        'light': '#F7F8F9',
        'dark': '#F0F2F4',
        'disabled': '#EEF0F2',
        'transparent' : 'transparent',        
      },
      fontSize:{
        '12': '12px',
        '14': '14px',
        '15': '15px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '40': '40px'
      },
      borderRadius: {
        '4':'4px',
        '8':'8px',
        '16':'16px',
        '20':'20px',
        '40':'40px',
      },
      fontFamily: {
        RobotoMono: ["RobotoMono"],
      },
      gap: {
        '15' : '60px'
      },
      padding: {
        '15' : '60px'
      },
      margin: {
        '15' : '60px',
        '25' : '100px',
      },
      opacity: {
        '85': '.85'
      },
      boxShadow: {
        'blue': '0px 8px 20px 0px rgba(58, 141, 253, 0.48);',
        'card-blue': '0px 4px 10px 0px rgba(58, 141, 253, 0.48);',
        'card-blue-w': '0px 4px 20px 0px rgba(58, 141, 253, 0.48);',
        'card': '0px 4px 10px 0px rgba(0, 0, 0, 0.08);',
        'card-w': '0px 4px 20px 0px rgba(0, 0, 0, 0.08);',
        'nav': '30px 0px 30px 0px rgba(255, 255, 255, 0.7);',
        
      },
      letterSpacing: {
        '4': "-0.4px"
      }
    },
    fontFamily: {
      NotoSansKR: ["NotoSansKR"],
    },    
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require("tw-elements/dist/plugin.cjs")
  ],
  
}


