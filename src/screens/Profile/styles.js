import { theme } from '../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build() 
export const styles = EStyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: theme.colors.blank,
    paddingHorizontal: '1rem',
  },
  content:{
    flex: 1,
    marginTop: 20,
  },
  text:{
    fontSize: '1rem',
    marginTop: 8,
    color: "#333"
  },
  textName:{
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: "#333"
  },
  textBold:{
    fontSize: '1rem',
    fontWeight: 'bold',
    color: "#333"
  },
  textInfo:{
    fontSize: '1rem',
    marginTop: 50,
    color: "#333"
  },
  label:{
    fontSize: '1rem',
    marginBottom: '0.4rem',
    marginTop: '1.5rem',
    textAlign: 'left',
    color: "#333"
  },
  input:{
    width: '50%',
    height: '3rem',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  date:{
    fontSize: '1.1rem',
    color: "#333"
  },
  footer:{
    bottom: 10,
    alignItems: 'flex-end'
  },
  btnLogOut:{
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 4
  },
  textLogOut:{
    fontSize: '1.2rem',
    marginRight: 10,
    color: "#333",
  }
})