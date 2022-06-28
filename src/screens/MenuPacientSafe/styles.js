import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build()
export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroud,
  },
  header:{
    backgroundColor: theme.colors.blank,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    paddingTop: 40
  },
  title:{
    fontWeight: 'bold',
    color: theme.colors.title,
    textAlign: 'center',
  },
  content:{
    flex: 1,
    paddingHorizontal: '3.2rem',
    paddingTop: '3rem',
    backgroundColor: theme.colors.blank,
    borderBottomEndRadius: '4rem',
    borderBottomStartRadius: '4rem',
  },
  img:{
    width: '4rem',
    height: '4rem'
  },
  label:{
    fontSize: '1rem',
    marginBottom: '1rem',
    marginTop: '2rem',
    textAlign: 'left',
    color: theme.colors.blank
  },
  btnRecoverPass:{
    paddingVertical: 10
  },
  textRecoverPass:{
    fontSize: 14,
    textAlign: 'right',
    color: theme.colors.blank
  },
  footer:{
    flex: 0.1,
    alignItems: 'center'
  }
});
