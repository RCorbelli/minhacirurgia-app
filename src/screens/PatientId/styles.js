import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build() 
export const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  contentDicas:{
    flex: 1,
    backgroundColor: theme.colors.blank,
    borderBottomEndRadius: '4rem',
    borderBottomStartRadius: '4rem',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '1rem',
  },
  textHeader:{
    color: theme.colors.backgroud,
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  content:{
    flex: 1,
    backgroundColor: theme.colors.blank,
    borderBottomEndRadius: 60,
    borderBottomStartRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '1rem'
  },
  buttonSpeech:{
    position: "absolute",
    bottom: '1rem',
    right: '2rem'
  },
  imgBalao:{
    width: '16rem',
    height: '8.8rem',
    paddingHorizontal: '1rem',
    paddingTop: '0.2rem',
    left: '2rem',
    top: '4rem'
  },
  imgBalao2:{
    width: '16rem',
    height: '12rem',
    paddingHorizontal: '1rem',
    top: '6rem',
    left: '2.5rem',
    justifyContent: 'center',
    paddingLeft: '4rem',
    paddingRight: '1rem'
  },
  imgBalao3:{
    width: '19rem',
    height: '11.5rem',
    left: '2rem',
    top: '3rem',
    paddingTop: '1rem',
  },
  dicas:{
    width: '21rem',
    height: '21rem',
    justifyContent: 'center',
    paddingHorizontal: '1rem',
    borderWidth: 1,
    borderColor: theme.colors.backgroud
  },
  textDicas:{
    marginTop: '1rem',
    color: theme.colors.overlay,
    textAlign: 'left',
  },
  text:{
    color: theme.colors.blank,
    textAlign: 'center',
    marginTop: '0.2rem'
  },
  img:{
    width: '5rem',
    height: '10rem',
    left: '-8.2rem',
    top: '-6rem',
  },
  imgBalaoSecondScreen:{
    width: '19rem',
    height: '14.5rem',
    paddingHorizontal: '1rem',
    justifyContent: 'center',
    paddingLeft: '4rem',
    paddingRight: '1rem',
    transform: [
      { rotateZ: "-60deg" }
    ]
  },
  textSecondScreen:{
    color: theme.colors.blank,
    textAlign: 'center',
    marginTop: '0.2rem',
    transform: [
      { rotateZ: "60deg" }
    ]
  },
  imgSecondScreen: {
    width: '5rem',
    height: '10rem',
    left: '-7rem',
    top: '2rem',
  },
  footer:{
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textHeader2:{
    marginTop: '1rem',
    color: theme.colors.backgroud,
    fontSize: '1rem',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
});
