import React, {ReactNode} from 'react';
import { ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build()
export function Background({children}){

    return (
        <SafeAreaView
            style={styles.container}

        >
            {children}
        </SafeAreaView>
        // <View style={styles.container}>
        //     {children}
        // </View>
    );
}