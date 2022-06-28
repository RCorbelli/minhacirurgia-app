import { theme } from "../../global/styles/theme";
import EStyleSheet from 'react-native-extended-stylesheet';
export const styles = EStyleSheet.create({
    container:{
      width: '100%',
      height: '3.5rem',
      backgroundColor: theme.colors.backgroud,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: '0.5rem',
    },
    btnVoltar:{
      width: '3.5rem',
      height: '3.5rem',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title:{
      fontSize: '1.2rem',
      fontWeight: 'bold',
      fontFamily: theme.fonts.Roboto700,
      color: theme.colors.blank
    }
});