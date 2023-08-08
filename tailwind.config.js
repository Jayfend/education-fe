/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily:{
        'dela': ['Dela Gothic One','sans-serif'],
        'mont':['Montserrat','sans-serif']
      },
      keyframes:{
        fadeOut:{
          '0%':{opacity: 1},
          '100%':{opacity:0}
          
        }
      },
      animation:{
        fadeOut:'fadeOut 5s ease-out forwards',
      },
    },
    
    borderColor:{
      'gray':{
        1:'#E0E0E0',
        2:'#BABABA'
      },
      'cyan':{
        1:'#2B788B',
        2:'#C3DCE3',
        3:'#5996A5'
      },
      'yellow':{
        1:'#C4A24C'
      },
      'orange':{
        1:'#CB5B43'
      },
      'red':{
        1:'#A95151'
      },
      'pink':{
        1:'#A15993',
        2:'#F2D4DC'
      },
      'green':{
        1:'#639B6D'
      },
      'black':{
        1:'#000000'
      },
      'transparent':{
        1:'#ffffff'
      }
    },
    borderWidth:{
      '1':'1px'
    },
    textColor:{
      'gray':{
        3:'#757575',
        4:'#585858',
        5:'#828282',
        2:'#757575'
      },
      'cyan':{
        1:'#2B788B',
        2:'#C3DCE3',
        3:'#5996A5',
        4:'#D9EADB'
      },
      'black':{
        1:'#000000'
      },
      'white':{
        1:'#FFFFFF',
      },
      'yellow':{
        1:'#C4A24C',
        2:'#FD8D14'
      },
      'orange':{
        1:'#CB5B43'
      },
      'red':{
        1:'#A95151',
        2:'#FE0000'
      },
      'pink':{
        1:'#A15993',
        2:'#945069',
        3:'#F2D4DC'
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
        1:'#000000',
       
      },
      'cyan':{
        1:'#2B788B',
        2:'#C3DCE3',
        4:'#D9EADB'
      },
      'pink':{
        1:'#F2D4DC',
        2:'#FFD1DA'
      },
      'yellow':{
        1:'#FFDBAA',
        2:'#FFE17B'
      },
      'orange':{
        1:'#CB5B43'
      }
    },
    placeholderColor:{
      'cyan':{
        1:'#2B788B'
      }
    }
  },
  plugins: [ require("@tailwindcss/forms"),require('tailwindcss-animated')],
}

