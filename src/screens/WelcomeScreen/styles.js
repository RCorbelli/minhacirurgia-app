import { theme } from '../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build()
export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroud,
  },
  content:{
    flex: 3,
    backgroundColor: theme.colors.blank,
    borderBottomEndRadius: '4rem',
    borderBottomStartRadius: '4rem',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: '1rem',
    paddingBottom: '2rem'
  },
  buttonSpeech:{
    marginTop: '1rem',
    alignSelf: 'flex-end'
  },
  img:{
    width: '6rem',
    height: '11rem',
  },
  title:{
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: theme.colors.title,
    textAlign: 'center',
    lineHeight: '1.9rem'
  },
  destaque:{
    fontSize: '1.7rem',
    fontWeight: 'bold',
    color: theme.colors.backgroud,
    textAlign: 'center',
    lineHeight: '1.9rem'
  },
  description:{
    color: theme.colors.text,
    textAlign: 'center',
    marginTop: '1rem',
    lineHeight: '1.2rem',
    fontSize: '1rem'
  },
});
