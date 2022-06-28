import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build() 
export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '1rem',
  },
  content:{
    flex: 5
  },
  buttonSpeech:{ 
    top: '1rem',
    alignSelf: 'flex-end'
  },
  imgBalao1:{
    width: '22rem',
    height: '7.8rem',
    top: '2rem',
    alignSelf: 'center',
    paddingHorizontal: '1rem',
  },
  text:{
    fontSize: '1rem',
    textAlign: 'center',
    top: '0.2rem',
    color: theme.colors.backgroud
  },
  imgBalao2:{
    width: '17rem',
    height: '9.4rem',
    top: '1.5rem',
    left: "4rem",
    justifyContent: 'center',
    paddingHorizontal: '1.5rem',
  },
  text2:{
    fontSize: '1rem',
    textAlign: 'center',
    color: theme.colors.backgroud,
  },
  imgAna:{
    top: '0rem',
    left: '-0.4rem',
    width: '5rem',
    height: '10rem',
  },
  card:{
    paddingVertical: '1rem',
    backgroundColor: theme.colors.title,
    borderRadius: '1rem',
    padding: '0.1rem',
    justifyContent: 'center',
  },
  
  textCard:{
    fontSize: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.colors.blank
  }
});
