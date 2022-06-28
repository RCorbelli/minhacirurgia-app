import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build() 
export const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    height: '5rem',
    backgroundColor: theme.colors.backgroud,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: '1rem',
  },
  textHeader:{
    color: theme.colors.blank,
    fontSize: '1rem',
    textAlign: 'center',
    flex: 1,
  },
  icon:{
    width: '4rem',
    height: '4rem',
  },
  content:{
    flex: 1,
    backgroundColor: theme.colors.blank,
    borderBottomEndRadius: '4rem',
    borderBottomStartRadius: '4rem',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '2rem',
    paddingTop: '1rem',
  },
  buttonSpeech:{
    position: "absolute",
    bottom: '1rem',
    right: '2rem'
  },
  imgBalao:{
    width: '21rem',
    height: '9rem',
    paddingHorizontal: '0.6rem',
    top: '4rem',
  },
  text:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    fontSize: '1rem',
    marginTop: '0.2rem'
  },
  imgBalao2:{
    width: '14rem',
    height: '14rem',
    justifyContent: 'center',
    left: '-3rem',
    top: '3rem',
    paddingHorizontal: '1.2rem'
  },
  img:{
    width: '4.5rem',
    height: '8.5rem',
    left: '6rem',
    top: '-8rem',
  },
  text2:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    fontSize: '1rem',
    left: '-0.3rem'
  },
  contentScreen2:{
    flex: 1,
    backgroundColor: theme.colors.blank,
    borderBottomEndRadius: '4rem',
    borderBottomStartRadius: '4rem',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '2rem',
    paddingTop: '1rem',
  },
  imgBalaoScreen2:{
    width: '20rem',
    height: '11rem',
    paddingHorizontal: '1.4rem',
    top: '2rem',
    transform:[{
      rotateZ: '-3deg'
    }]
  },
  text1Screen2:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    fontSize: '1rem',
    marginTop: '1.5rem',
    transform:[{
      rotateZ: '3deg'
    }]
  },
  imgBalao2Screen2:{
    width: '11rem',
    height: '8rem',
    justifyContent: 'center',
    left: '-3rem',
    top: '2.5rem',
    paddingHorizontal: '1rem',
  },
  text2Screen2:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    fontSize: '1rem',
  },
  
  imgCarlos:{
    width: '4.5rem',
    height: '8.5rem',
    left: '7rem',
    top: '-4rem',
  },
  imgBalaoScreen3:{
    width: '16rem',
    height: '11.2rem',
    top: '1rem',
    paddingHorizontal: '1.4rem',
    transform: [{
      rotateY: '180deg'
    }]
  },
  textScreen3:{
    color: theme.colors.backgroud,
    textAlign: 'center',
    marginTop: '1.2rem',
    fontSize: '1rem',
    transform: [{
      rotateY: '180deg'
    }]
  },
  imgCardScreen3:{
    width: '15rem',
    justifyContent: 'center',
    left: '-3rem',
    top: '5rem',
    paddingHorizontal: '0.2rem',
    borderWidth: '0.1rem',
    backgroundColor: theme.colors.lineMomentoCirurgia,
    borderColor: theme.colors.lineMomentoCirurgia,
    borderRadius: '0.2rem'
  },
  textCardScreen3:{
    color: theme.colors.blank,
    textAlign: 'center',
    fontSize: '1rem',
  },
  imgScreen3:{
    width: '4.5rem',
    height: '8.5rem',
    left: '7rem',
    top: '-6rem'
  },
  contentDicas:{
    flex: 1,
    backgroundColor: theme.colors.blank,
    borderBottomEndRadius: '4rem',
    borderBottomStartRadius: '4rem',
    alignItems: 'center',
    paddingHorizontal: '1rem',
  },
  textHeader2:{
    marginTop: '1rem',
    color: theme.colors.backgroud,
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  footer:{
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
