import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroud,
    
  },
  header:{
    flex: 0.6,
    backgroundColor: theme.colors.blank,
    borderBottomEndRadius: '4rem',
    borderBottomStartRadius: '4rem',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 40
  },
  img:{
    width: '4rem',
    height: '8rem',
  },
  title:{
    fontSize: '1.7rem',
    fontWeight: 'bold',
    color: theme.colors.backgroud,
    textAlign: 'center',
    lineHeight: '1.9rem',
    marginLeft: 10
  },
  content:{
    flex: 1,
    paddingHorizontal: '2rem',
    justifyContent: 'center'
  },
  label:{
    fontSize: '1rem',
    marginBottom: '0.4rem',
    marginTop: '0.4rem',
    textAlign: 'left',
    color: theme.colors.blank
  },
  btnRecoverPass:{
    paddingVertical: '0.4rem'
  },
  textRecoverPass:{
    fontSize: '1rem',
    textAlign: 'right',
    color: theme.colors.blank
  },
  footer:{
    flex: 0.1,
    alignItems: 'center'
  }
});
