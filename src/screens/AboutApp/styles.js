import { theme } from '../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build() 
export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '0.2rem',
    backgroundColor: "#fff"
  },
  developers:{
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  instituições:{
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
    
  },
  imgUfsj:{
    width: '15rem',
    height: '4rem',
  },
  imgUsp:{
    width: '7rem',
    height: '3rem',
  },
  title:{
    marginTop: 2,
    marginBottom: 2,
    fontWeight: 'bold',
    fontSize: '1rem',
    color: "#333"
  },
  text:{
    fontSize: '1rem',
    color: "#333"
  },
  text2:{
    fontSize: '1rem',
    marginTop: 10,
    color: "#333",
  },
  footer:{
    paddingHorizontal: 20,
    borderRadius: 2,
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center'
  }
})