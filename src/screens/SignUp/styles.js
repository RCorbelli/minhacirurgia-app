import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { theme } from '../../global/styles/theme';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroud,
    
  },
  header:{
    flex: 0.3,
    backgroundColor: theme.colors.blank,
    borderBottomEndRadius: '1rem',
    borderBottomStartRadius: '1rem',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: '4rem'
  },
  img:{
    width: '3rem',
    height: '6rem',
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
    justifyContent: 'center',
    paddingVertical: '1rem'
  },
  label:{
    marginBottom: 6,
    marginTop: 4,
    textAlign: 'left',
    color: theme.colors.blank
  },
  picker: {
    height: 50, 
    width:'100%', 
    color: theme.colors.backgroud, 
    backgroundColor: "#fff",
    borderRadius: '1rem',
  },
  footer:{
    flex: 0.1,
    alignItems: 'center'
  },
  privacyPolice:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  textPrivacyPolice:{
    color: theme.colors.blank,
    marginLeft: 10
  },
  textPrivacyPoliceBold:{
    fontSize: '1rem',
    fontWeight: 'bold',
    color: theme.colors.blank,
    textDecorationLine: 'underline'
  },
  checkbox:{
    width: 20,
    height: 20,
    backgroundColor: theme.colors.blank,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
