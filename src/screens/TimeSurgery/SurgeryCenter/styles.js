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
    width: '18rem', 
    height: '10.3rem',
    left: "-1.4rem",
    top: '0rem',
    alignItems: 'center',
    paddingHorizontal: '0.6rem',
  },
  text1Screen1:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    paddingTop: '0.5rem'
  },
  imgScreen1:{
    width: '4rem',
    height: '9rem',
    left: '6rem',
    top: '0.5rem'
  },
  cardScreen1:{
    top: '-8rem',
    width: '13rem',
    height: '16rem',
    left: '-3rem',
    justifyContent: 'center',
    paddingHorizontal: '0.3rem',
  },
  text2Screen1:{
    color: theme.colors.blank,
    textAlign: 'left',
  },

  imgBalao1Screen2:{
    width: '19rem', 
    height: '10.7rem',
    left: "-1.5rem",
    top: '0.4rem',
    alignItems: 'center',
    paddingHorizontal: '0.6rem',
  },
  text1Screen2:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    paddingTop: '1rem'
  },
  imgBalao2Screen2:{
    width: '17rem',
    height: '11.5rem',
    left: "-2.5rem",
    top: '-6rem',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '1rem',
  },
  text2Screen2:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    top: '1.8rem'
  },
  cardScreen2:{
    top: '-5rem',
    justifyContent: 'center',
    paddingVertical: '1rem',
    borderRadius: '1rem',
  },
  textCardScreen2:{
    color: theme.colors.blank,
    fontSize: '1rem',
    textAlign: 'center',
  },
  imgScreen2:{
    width: '4rem',
    height: '9rem',
    left: '8rem',
    top: '-1rem',
  },

  imgBalao1Screen3:{
    width: '17rem', 
    height: '9.3rem',
    left: "-2rem",
    top: '0.4rem',
    alignItems: 'center',
    paddingHorizontal: '0.5rem',
    transform: [{
      rotateY: '180deg'
    }]
  },
  text1Screen3:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    paddingTop: '1.7rem',
    paddingHorizontal: '1rem',
    transform: [{
      rotateY: '180deg'
    }]
  },
  imgBalao2Screen3:{
    width: '16rem',
    height: '10.5rem',
    left: "-1.5rem",
    top: '-6rem',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '1rem',
  },
  text2Screen3:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    top: '1.8rem',
    fontSize: '1rem'
  },
  cardScreen3:{
    top: '-5rem',
    justifyContent: 'center',
    paddingVertical: '1rem',
    borderRadius: '0.5rem',
    borderColor: theme.colors.blank,
    borderWidth: 1,
    paddingHorizontal: '0.2rem'
  },
  textCardScreen3:{
    color: theme.colors.blank,
    fontSize: '1rem',
    textAlign: 'center',
  },
  imgScreen3:{
    width: '4rem',
    height: '9rem',
    left: '8rem',
    top: '-1rem',
  },

  imgBalao1Screen4:{
    width: '17rem', 
    height: '9.3rem',
    left: "2rem",
    top: '-3rem',
    paddingHorizontal: '0.5rem',
    transform: [{
      rotateZ: '180deg'
    },{
      rotateY: '180deg'
    }]
  },
  text1Screen4:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    top: '1rem',
    fontSize: '1rem',
    transform: [{
      rotateZ: '180deg'
    },{
      rotateY: '180deg'
    }]
  },
  imgBalao2Screen4:{
    width: '16rem',
    height: '10.5rem',
    left: "-1.5rem",
    top: '-1rem',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '1rem',
    transform: [{
      rotateZ: '180deg'
    }]
  },
  text2Screen4:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    top: '1.8rem',
    fontSize: '1rem',
    transform: [{
      rotateZ: '180deg'
    }]
  },
  cardScreen4:{
    top: '-5rem',
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
    left: '-8rem',
    top: '-2rem',
    
  },

  contentFiveScreen:{
    flex: 1,
    backgroundColor: theme.colors.blank,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '1rem',
    paddingHorizontal: '1rem',
  },

  textScreen5:{
    color: theme.colors.backgroud,
    fontSize: '1rem',
    textAlign: 'center',
  },

  movie:{
    width: '100%',
    height: '40%',
    backgroundColor: theme.colors.overlay,
    marginVertical: '1rem',
    justifyContent: 'center',
    borderRadius: '1rem',
  },
  webView:{
    flex: 1,
    borderRadius: '1rem'
  },

  footer:{
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.blank
  }
});