/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily:{
        'dela': ['Dela Gothic One','cursive'],
        'mont':['Montserrat','sans-serif']
      },
    },
    borderColor:{
      'gray':{
        1:'#E0E0E0',
        2:'#BABABA'
      }
    },
    borderWidth:{
      '1':'1px'
    },
    textColor:{
      'gray':{
        3:'#757575',
        4:'#585858'
      },
      'cyan':{
        1:'#2B788B',
        2:'#C3DCE3'
      },
      'black':{
        1:'#000000'
      }
    },
    backgroundColor:{
      'white':{
        1:'#FFFFFF'
      },
      'gray':{
        1:'#F6F5F4',
        2:'#E0E0E0'
      },
      'black':{
        1:'#000000'
      },
      'cyan':{
        1:'#2B788B',
        2:'#C3DCE3'
      }
    }
  },
  plugins: [],
}

