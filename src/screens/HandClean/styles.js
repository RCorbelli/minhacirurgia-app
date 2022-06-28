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
  buttonSpeech:{
    position: "absolute",
    bottom: '1rem',
    right: '2rem'
  },
  imgBalao:{
    width: '16rem',
    height: '12.2rem',
    paddingHorizontal: '1rem',
    left: '2rem',
    top: '3rem'
  },
  quadroAzul:{
    width: '12rem',
    height: '14rem',
    justifyContent: 'center',
    left: '-4rem',
    top: '4rem',
    paddingHorizontal: '1rem'
  },
  img:{
    width: '4rem',
    height: '9rem',
    left: '7rem',
    top: '-8rem',
  },
  text:{
    color: theme.colors.blank,
    textAlign: 'center',
    marginTop: '2.5rem',
  },
  text2:{
    color: theme.colors.blank,
    textAlign: 'center',
  },
  textQuadro:{
    color: theme.colors.blank,
    textAlign: 'left',
  },
  text3:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    marginRight: '1rem',
    marginTop: '0.5rem'
  },
  imgBalaoScreen2:{
    width: '16rem',
    height: '12.2rem',
    paddingHorizontal: '1rem',
    left: '2rem',
    top: '3rem'
  },
  imgBalao2Screen2:{
    width: '15rem',
    height: '12rem',
    justifyContent: 'center',
    top: '4rem',
    left: '-3rem',
    paddingHorizontal: '2.5rem'
  },
  text3:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    marginRight: '1rem',
    marginTop: '0.5rem'
  },
  textBlank:{
    color: theme.colors.blank,
    textAlign: 'center'
  },
  footer:{
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentScreen3:{
    flex: 1,
    backgroundColor: theme.colors.blank,
    borderBottomEndRadius: '4rem',
    borderBottomStartRadius: '4rem',
    alignItems: 'center',
    paddingHorizontal: '1rem',
  },
  hands:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  imgMaos:{
    width: '4rem',
    height: '4rem',
  },
  textMaos:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: '1.2rem'
  },
  imgHigieneMaos:{
    width: '22rem',
    height: '24rem',
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
  }
});
