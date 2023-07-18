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
          '0%':{width:'0px', height:'0px', opacity:0},
          '50%':{width:'0px', height:'0px', opacity:0},
          '50.1%':{width:'0px', height:'0px', opacity:1},
          '75%':{width:'500px', height:'0px', opacity:1},
          '100%':{width:'500px',height:'500px',opacity:1}
          
        }
      },
      animation:{
        timeout:'timeout 3s infinite alternate'
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

