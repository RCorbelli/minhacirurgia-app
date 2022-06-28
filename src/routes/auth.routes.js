import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const {Navigator, Screen} =  createNativeStackNavigator();
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { PrivacyPolicy } from '../screens/PrivacyPolicy';
import { theme } from '../global/styles/theme';

export function AuthRoutes(){
    return(
        <Navigator
            headerMode='none'
            screenOptions={{
                cardStyle:{
                    backgroundColor: theme.colors.line
                },
                headerStyle: { 
                    backgroundColor: theme.colors.backgroud,
                },
                headerTintColor: '#fff'
            }}>
            <Screen 
                name="Boas Vindas"
                component={WelcomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Screen 
                name="Entrar"
                component={SignIn}
                options={{
                    headerShown: false
                }}
                               
            />
            <Screen 
                name="Cadastrar"
                component={SignUp}
                options={{
                    cardStyle:{
                        backgroundColor: theme.colors.line
                    },
                    headerStyle: { 
                        backgroundColor: theme.colors.blank,
                    },
                    headerTintColor: theme.colors.title,
                }}
            /> 
            <Screen  
                name="Políticas de privacidade"
                component={PrivacyPolicy}
            />
        </Navigator>
    );
}