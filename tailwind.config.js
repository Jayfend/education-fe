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
        timeout:{
          '0%':{},
         
          
        }
      },
      animation:{
        timeout:'timeout 60s steps(10) infinite'
      }
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
        1:'#A15993'
      },
      'green':{
        1:'#639B6D'
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
        3:'#5996A5'
      },
      'black':{
        1:'#000000'
      },
      'white':{
        1:'#FFFFFF',
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
        2:'#945069'
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
      },
      'pink':{
        1:'#F2D4DC'
      },
      'orange':{
        1:'#CB5B43'
      }
    }
  },
  plugins: [],
}

