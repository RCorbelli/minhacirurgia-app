import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build()
export const styles = EStyleSheet.create({
  container: {
    width: '100%',
    height: '3.2rem',
    backgroundColor: theme.colors.backgroud,
    borderRadius: '0.4rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0.7rem',
  },
  containerOutline: {
    width: '100%',
    height: '3.2rem',
    backgroundColor: theme.colors.blank,
    borderRadius: '0.4rem',
    borderWidth: '0.1rem',
    borderColor: theme.colors.secondary80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0.7rem',
  },
  containerBtn:{
    width: '100%',
    height: '100%',
    borderRadius: '0.4rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1rem'
  },
  titleOutline: {
    flex: 1,
    color: theme.colors.backgroud,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1rem'
  },
  iconWrapper: {
    width: '4.5rem',
    height: '4.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    left: '-0.8rem',
    borderWidth: '0.2rem',
    borderColor: '#f55b64',
    backgroundColor: '#f55b64',
    borderRadius: '2.5rem'
  },
  icon: {
    width: '5rem',
    height: '5rem',
  }
});