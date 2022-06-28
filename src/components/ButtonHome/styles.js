import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build()
export const styles = EStyleSheet.create({
  container:{
    width: '8.2rem',
    height: '6rem',
    borderRadius: '0.4rem',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: theme.colors.backgroud,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 4
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginTop: 5
  },
  iconWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});