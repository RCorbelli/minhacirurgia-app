import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
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
  content2:{
    flex: 1,
    backgroundColor: theme.colors.backgroud,
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
    width: '15rem',
    height: '8.3rem',
    paddingHorizontal: '1rem',
    left: '2rem',
    top: '6rem'
  },
  text1:{
    color: theme.colors.blank,
    textAlign: 'center',
    marginTop: '0.5rem'
  },
  imgBalao2:{
    width: '16rem',
    height: '12.3rem',
    justifyContent: 'center',
    top: '6rem',
    left: '3rem',
    paddingHorizontal: '1.5rem',
    paddingLeft: '4.7rem'
  },
  imgBalao3:{
    width: '15rem',
    height: '12rem',
    justifyContent: 'center',
    top: '4rem',
    left: '-3rem',
    paddingHorizontal: '1.8rem',
    paddingTop: '2rem',
  },
  img:{
    width: '5rem',
    height: '10rem',
    left: '-8rem',
    top: '-18rem',
  },
  imgBalao5:{
    width: '12rem',
    height: '7.5rem',
    justifyContent: 'center',
    top: '4rem',
    left: '-2rem',
    paddingHorizontal: '1rem',
  },
  img2:{
    width: '5rem',
    height: '10rem',
    left: '7rem',
    top: '-12rem'
  },
  quadro:{
    width: '14rem',
    height: '16rem',
    justifyContent: 'center',
    left: '-3.5rem',
    top: '7rem',
    paddingHorizontal: '1rem',
  },
 
  text4:{
    color: theme.colors.blank,
  },
  text3:{
    color: theme.colors.backgroud,
    textAlign: 'center',
  },
  text2:{
    color: theme.colors.blank,
    textAlign: 'center',
  },
  text:{
    color: theme.colors.blank,
    textAlign: 'center',
    marginTop: '0.5rem'
  },
  
  textBlank:{
    color: theme.colors.blank,
    fontSize: '1rem',
    textAlign: 'center'
  },
  textHeader:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    marginBottom: "1rem"
  },
  footer:{
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
