import { theme } from '../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build() 
export const styles = EStyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: theme.colors.backgroud,
  },
  header:{
    backgroundColor: theme.colors.blank,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  content:{
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  contentInfoScreen:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: theme.colors.blank,
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 20
  },
  textInfo:{
    color: theme.colors.overlay,
    textAlign: 'center',
    fontSize: '1rem'
  },
  img1:{
    width: 300,
    height: 70,
  },
  title:{
    marginTop: 10,
    color: theme.colors.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.4rem'
  },
  subTitle:{
    marginTop: 10,
    color: theme.colors.overlay,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1rem'
  },
  footer:{
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  groupCheckBox:{
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  checkbox:{
    width: 20,
    height: 20,
    backgroundColor: theme.colors.blank,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textNotVisible: {
    color: theme.colors.blank,
    marginLeft: 10
  }
})