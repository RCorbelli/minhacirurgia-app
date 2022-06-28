import { theme } from '../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build();

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blank,
  },
  header:{
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: '1rem'
  },
  img:{
    width: '3rem',
    height: '5rem',
  },
  title:{
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: theme.colors.title,
    textAlign: 'center',
    marginLeft: 10
  },
  content:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap",
    paddingHorizontal: '1rem',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // borderBottomEndRadius: '4rem',
    // borderBottomStartRadius: '4rem',
    paddingBottom: 20,
  },
  label:{
    fontSize: '2rem',
    marginBottom: 6,
    marginTop: 4,
    textAlign: 'left',
    color: theme.colors.blank
  },
  footer:{
    flex: 0.0,
    alignItems: 'center'
  }
});
