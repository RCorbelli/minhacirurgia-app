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
  imgBalaoScreen1:{
    width: '18rem',
    height: '10rem',
    paddingHorizontal: '1.5rem',
    top: '-1rem',
    left: '-2rem',
    transform: [
      { rotateY: "180deg"},
      {rotateZ: '-3deg'}
    ]
  },
  text1Screen1:{
    color: theme.colors.backgroud,
    textAlign: 'left',
    paddingTop: '1.2rem',
    transform: [
      { rotateY: "-180deg"},
      {rotateZ: '-3deg'}
    ]
  },
  imgCardScreen1:{
    width: '15rem',
    height: '17rem',
    justifyContent: 'space-evenly',
    top: '-12rem',
    left: '3.3rem',
    paddingHorizontal: '0.6rem',
  },
  text2Screen1:{
    color: theme.colors.blank,
    textAlign: 'left',
  },
  imgScreen1:{
    width: '5rem',
    height: '10rem',
    left: '-8rem',
    top: '0rem',
    transform: [
      { rotateY: "180deg" }
    ]
  },
  imgBalao1Screen2:{
    width: '19rem',
    height: '11rem',
    paddingHorizontal: '1.5rem',
    top: '2rem',
    left: '-1rem',
    transform: [
      {rotateZ: '-3deg'}
    ]
  },
  text1Screen2:{
    color: theme.colors.backgroud,
    textAlign: 'left',
    paddingTop: '1.5rem',
    transform: [
      {rotateZ: '3deg'}
    ]
  },
  imgBalao2Screen2:{
    width: '14rem',
    height: '14rem',
    justifyContent: 'center',
    top: '-10rem',
    left: '-3rem',
    paddingHorizontal: '1.5rem',
    paddingTop: '0.3rem',
  },
  text2Screen2:{
    color: theme.colors.backgroud,
    textAlign: 'center',
  },
  imgScreen2:{
    width: '5rem',
    height: '10rem',
    left: '7rem',
    top: '2rem',
  },
  footer:{
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.blank
  }
})