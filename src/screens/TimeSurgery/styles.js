import { theme } from '../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build()
export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blank,
    paddingHorizontal: '2rem',
    alignItems: 'center'
  },
  content:{
    marginTop: 40
  },
})