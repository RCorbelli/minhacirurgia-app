// import { Inter_100Thin } from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import EStyleSheet from 'react-native-extended-stylesheet';
export const styles = EStyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: theme.colors.blank,
        borderRadius: '0.3rem',
        borderWidth: 0,
        paddingHorizontal: '1rem',
        overflow: "hidden",
    },
    containerNotEdit:{
        width: '100%',
        backgroundColor: theme.colors.blank,
        borderRadius: '0.3rem',
        borderWidth: 0,
        paddingHorizontal: '1rem',
        overflow: "hidden",
    },
    input:{
        flex: 1,
        height: '3rem',
        backgroundColor: '#fff',
        color: theme.colors.backgroud,
        fontFamily: theme.fonts.Roboto400,
    },
    separator:{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0,
    }
});