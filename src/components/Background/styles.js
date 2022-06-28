import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import EStyleSheet from 'react-native-extended-stylesheet';
export const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backgroud
    }
});