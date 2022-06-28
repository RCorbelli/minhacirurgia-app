import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
import { RootTagContext } from 'react-native/Libraries/ReactNative/RootTag';
EStyleSheet.build() 
export const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  content:{
    flex: 1,
    backgroundColor: theme.colors.blank,
    borderBottomEndRadius: '4rem',
    borderBottomStartRadius: '4rem',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '1rem',
  },
  buttonSpeech:{
    position: "absolute",
    bottom: '1rem',
    right: '2rem'
  },
  imgBalao:{
    width: '21rem',
    height: '12rem',
    paddingHorizontal: '1.4rem',
    top: '6rem',
    transform: [
      { rotateZ: "-4deg" }
    ]
  },
  text1FirstScreen:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    marginTop: '1.5rem',
    transform: [
      { rotateZ: "4deg" }
    ]
  },
  imgBalao2:{
    width: '10rem',
    height: '10rem',
    justifyContent: 'center',
    top: '6rem',
    left: '-4rem',
    paddingHorizontal: '1rem'
  },
  text2FirstScreen:{
    color: theme.colors.backgroud,
    textAlign: 'center',
  },
  imgBalao3:{
    width: '14rem',
    height: '6rem',
    justifyContent: 'center',
    top: '6rem',
    left: '-4rem',
    paddingHorizontal: '1rem'
  },
  img:{
    width: '5rem',
    height: '10rem',
    left: '7rem',
    top: '-7rem'
  },
  text3FirstScreen:{
    color: theme.colors.backgroud,
    textAlign: 'center',
  },
  content2:{
    flex: 1,
    backgroundColor: theme.colors.backgroud,
    borderBottomEndRadius: '4rem',
    borderBottomStartRadius: '4rem',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '1rem',
  },
  blur1:{
    width: '13rem',
    height: '6.5rem',
    justifyContent: 'center',
    top: '1rem',
    left: '3rem',
    paddingHorizontal: '1rem'
  },
  blur2:{
    width: '13rem',
    height: '6.5rem',
    justifyContent: 'center',
    top: '2rem',
    left: '-3rem',
    paddingHorizontal: '1rem'
  },
  blur3:{
    width: '13rem',
    height: '6.5rem',
    justifyContent: 'center',
    top: '3rem',
    left: '3rem',
    paddingHorizontal: '1rem'
  },
  text2:{
    color: theme.colors.backgroud,
    textAlign: 'center',
  },
  text:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    marginTop: '1.5rem',
  },
  img2:{
    width: '5rem',
    height: '10rem',
    left: '-7rem',
  },
  textHeader:{
    color: theme.colors.backgroud,
    fontSize: '1rem',
    textAlign: 'center',
    marginTop: '1.5rem',
    marginBottom: '2rem'
  },
  textBlank:{
    color: theme.colors.blank,
    fontSize: 13,
    textAlign: 'center'
  },
  footer:{
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
