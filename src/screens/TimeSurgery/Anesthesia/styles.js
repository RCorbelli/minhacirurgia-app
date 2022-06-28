import { theme } from '../../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build() 
export const styles = EStyleSheet.create({
  content:{
    flex: 1,
    backgroundColor: theme.colors.blank,
    alignItems: 'center',
    paddingTop: '1rem',
    paddingHorizontal: '1rem',
  },
  contentBlue:{
    flex: 1,
    backgroundColor: theme.colors.backgroud,
    alignItems: 'center',
    paddingTop: '1rem',
    paddingHorizontal: '1rem'
  },
  imgBalao1Screen1:{
    width: '16rem',
    height: '9rem',
    left: "0rem",
    top: '-1rem',
    alignItems: 'center',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  text1Screen1:{
    color: theme.colors.blank,
    textAlign: 'center',
    fontSize: '1rem',
    paddingTop: '0.6rem',
  },
  imgBalao2Screen1:{
    width: '12rem',
    height: '9rem',
    left: "2rem",
    top: '-10rem',
    paddingLeft: '2rem',
    paddingRight: '0.2rem',
    transform: [{
      rotateX: '180deg'
    }]
  },
  text2Screen1:{
    color: theme.colors.blank,
    textAlign: 'center',
    marginTop: '1.6rem',
    fontSize: '1rem',
    transform: [{
      rotateX: '-180deg'
    }]
  },
  imgBalao3Screen1:{
    width: '19.5rem',
    height: '15.5rem',
    left: "-1rem",
    top: '-10rem',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '3rem'
  },
  text3Screen1:{
    color: theme.colors.blank,
    textAlign: 'center',
    fontSize: '0.93rem',
    marginTop: '1.5rem'
  },
  imgScreen1:{
    width: '5rem',
    height: '9rem',
    left: '-8rem',
    top: '1rem',
    transform: [{
      rotateY: '180deg'
    }]
  },
  imgBalao1Screen2:{
    width: '14rem',
    height: '11.5rem',
    left: "0rem",
    top: '-1rem',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '0.5rem',
  },
  text1Screen2:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    fontSize: '1rem',
  },
  imgBalao2Screen2:{
    width: '13rem',
    height: '8.5rem',
    left: "0rem",
    top: '-6rem',
    justifyContent: 'center',
    transform: [{
      rotateY: '180deg'
    }
  ]
  },
  text2Screen2:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    marginTop: '2.5rem',
    fontSize: '1rem',
    transform: [{
      rotateY: '-180deg'
    }]
  },
  batePapo:{
    width: '7rem',
    height: '6rem',
    top: '-7rem',
    left: '2rem',
  },
  imgScreen2:{
    width: '5rem',
    height: '9rem',
    left: '-8rem',
    top: '0rem',
    transform: [{
      rotateY: '180deg'
    }]
  },
  
  imgBalao1Screen3:{
    width: '18rem',
    height: '12.6rem',
    left: "0rem",
    top: '-1rem',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '2rem',
  },
  text1Screen3:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    top: '-0.9rem'
  },
  imgBalao2Screen3:{
    top: '-0rem',
    justifyContent: 'center',
    paddingHorizontal: '1rem',
    paddingVertical: '1rem',
    backgroundColor: theme.colors.lineMomentoCirurgia,
    borderRadius: '1rem',
  },
  text2Screen3:{
    color: theme.colors.blank,
    fontSize: '1rem',
    textAlign: 'center',
  },
  imgScreen3:{
    width: '5rem',
    height: '9rem',
    left: '-8rem',
    top: '-2rem',
    transform: [{
      rotateY: '180deg'
    }]
  },
  groupAnesthesia:{
    flexDirection: 'row'
  },
  buttonTypeAnesthesia:{
    width: '50%',
    paddingHorizontal: '0.2rem',
    paddingVertical: '0.7rem',
    borderRadius: '0.3rem',
    borderColor: theme.colors.lineMomentoCirurgia,
    borderWidth: '0.1rem',
    alignItems: 'center'
  },
  button:{
    paddingHorizontal: '0.2rem',
    paddingVertical: '0.2rem',
    borderRadius: '0.3rem',
    borderColor: theme.colors.lineMomentoCirurgia,
    borderWidth: '0.1rem',
    top: '-12rem',
    left: '2.5rem',
  },
  textButton:{
    color: theme.colors.lineMomentoCirurgia,
    fontSize: '1rem'
  },
  imgBalao1Screen4:{
    width: '18rem', 
    height: '10.3rem',
    left: "-1.5rem",
    top: '-1rem',
    alignItems: 'center',
    paddingHorizontal: '0.6rem',
  },
  text1Screen4:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    fontSize: '1rem',
    paddingTop: '0.5rem'
  },
  imgBalao2Screen4:{
    width: '17rem',
    height: '11.5rem',
    left: "-2.5rem",
    top: '-10rem',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '0.6rem',
  },
  text2Screen4:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    top: '1.1rem',
    paddingHorizontal: '1.35rem'
  },
  card:{
    top: '-8rem',
    justifyContent: 'center',
    paddingVertical: '1rem',
    borderRadius: '1rem',
  },
  textCardScreen4:{
    color: theme.colors.blank,
    fontSize: '1rem',
    textAlign: 'center',
  },
  imgScreen4:{
    width: '4rem',
    height: '9rem',
    left: '8rem',
    top: '-1rem',
    transform: [{
      rotateY: '180deg'
    }]
  },


  
  imgBalao1Screen5:{
    width: '17rem',
    height: '11.3rem',
    left: "-1.5rem",
    top: '-1rem',
    alignItems: 'center',
    paddingHorizontal: '1.4rem',
    justifyContent: 'center',
    transform:[
      {
        rotateX: "180deg"
      }
    ]
  },
  text1Screen5:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    top: '1rem',
    fontSize: '1rem',
    transform:[
      {
        rotateX: "180deg"
      }
    ]
  },
  cardScreen5:{
    top: '0rem',
    justifyContent: 'center',
    paddingVertical: '0.5rem',
    borderRadius: '1rem',
    paddingHorizontal: '2rem',
    backgroundColor: theme.colors.lineMomentoCirurgia
  },
  textCardScreen5:{
    color: theme.colors.blank,
    fontSize: '1rem',
    textAlign: 'center',
  },
  imgScreen5:{
    width: '4rem',
    height: '9rem',
    left: '8rem',
    top: '-1rem',
    transform: [{
      rotateY: '180deg'
    }]
  },


  
  imgBalao1Screen6:{
    width: '20rem',
    height: '13.5rem',
    left: "-1.5rem",
    top: '-1rem',
    alignItems: 'center',
    paddingHorizontal: '1.8rem',
    justifyContent: 'center',
    transform:[
      {
        rotateX: "180deg"
      }
    ]
  },
  text1Screen6:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    top: '1rem',
    fontSize: '1rem',
    transform:[
      {
        rotateX: "180deg"
      }
    ]
  },
  cardScreen6:{
    top: '-2rem',
    justifyContent: 'center',
    paddingVertical: '0.5rem',
    borderRadius: '1rem',
    paddingHorizontal: '1.2rem',
    backgroundColor: theme.colors.blank
  },
  textCardScreen6:{
    color: theme.colors.backgroud,
    fontSize: '1rem',
    textAlign: 'center',
  },
  imgScreen6:{
    width: '4rem',
    height: '9rem',
    left: '8rem',
    top: '-4rem',
    transform: [{
      rotateY: '180deg'
    }]
  },
  
  footer:{
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.blank
  }
})