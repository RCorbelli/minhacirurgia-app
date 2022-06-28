import { theme } from '../../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build() 
export const styles = EStyleSheet.create({
  content:{
    flex: 1,
    backgroundColor: theme.colors.blank,
    alignItems: 'center',
    paddingTop: '1rem',
  },
  contentBlue:{
    flex: 1,
    backgroundColor: theme.colors.backgroud,
    alignItems: 'center',
    paddingTop: '1rem',
    paddingHorizontal: '1rem'
  },
  imgBalao1Screen1:{
    width: '15rem',
    height: '12rem',
    left: "-3rem",
    top: '-2.5rem',
    paddingLeft: '1.2rem',
    paddingRight: '1.4rem',
  },
  text1Screen1:{
    color: theme.colors.backgroud,
    textAlign: 'left',
    fontSize: '0.8rem',
    paddingTop: '3rem'
  },
  imgBalao2Screen1:{
    width: '15rem',
    height: '12rem',
    left: "-3rem",
    top: '-11rem',
    paddingLeft: '1.2rem',
    paddingRight: '1.4rem',
    transform: [{
      rotateX: '180deg'
    }]
  },
  text2Screen1:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    marginTop: '2rem',
    transform: [{
      rotateX: '-180deg'
    }]
  },
  imgScreen1:{
    width: '4rem',
    height: '8rem',
    left: '7rem',
    top: '-8rem',
  },
  bandaid:{
    width: '3.5rem',
    height: '3.5rem',
    left: '-8rem',
    top: '-3rem'
  },
  imgBalao1Screen2:{
    width: '18rem',
    height: '10rem',
    paddingHorizontal: '1.5rem',
    top: '-2rem',
    left: '-2rem',
    transform: [
      { rotateY: "180deg"},
      {rotateZ: '-3deg'}
    ]
  },
  text1Screen2:{
    color: theme.colors.backgroud,
    textAlign: 'left',
    paddingTop: '1.2rem',
    transform: [
      { rotateY: "-180deg"},
      {rotateZ: '-3deg'}
    ]
  },
  imgBalao2Screen2:{
    width: '13rem',
    height: '13rem',
    justifyContent: 'center',
    top: '-14rem',
    left: '3rem',
    paddingHorizontal: '1.5rem',
    paddingTop: '1rem',
    transform: [
      { rotateY: "180deg"}
    ]
  },
  text2Screen2:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    transform: [
      { rotateY: "-180deg"}
    ]
  },
  imgScreen2:{
    width: '5rem',
    height: '10rem',
    left: '-7rem',
    top: '0rem',
    transform: [
      { rotateY: "180deg" }
    ]
  },
  ferida:{
    width: '7rem',
    height: '7rem',
    top: '-13rem'
  },

  imgBalao1Screen3:{
    width: '19rem',
    height: '11rem',
    paddingHorizontal: '1.5rem',
    top: '0rem',
    left: '-1rem',
    transform: [
      {rotateZ: '-3deg'}
    ]
  },
  text1Screen3:{
    color: theme.colors.backgroud,
    textAlign: 'left',
    paddingTop: '1.2rem',
    transform: [
      {rotateZ: '3deg'}
    ]
  },
  imgBalao2Screen3:{
    width: '14rem',
    height: '9rem',
    justifyContent: 'center',
    top: '-9rem',
    left: '-3rem',
    paddingHorizontal: '1.5rem',
    paddingTop: '1rem',
  },
  text2Screen3:{
    color: theme.colors.backgroud,
    textAlign: 'center',
  },
  imgScreen3:{
    width: '5rem',
    height: '10rem',
    left: '7rem',
    top: '-5rem',
  },
  groupImg:{
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: '-1rem',
    left: '-5rem',
  },
  sol:{
    width: '4rem',
    height: '4rem',
  },
  sutura:{
    width: '4rem',
    height: '4rem',
  },
  footer:{
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.blank
  }
})