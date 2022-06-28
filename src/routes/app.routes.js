import React, { useState } from 'react';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
const {Navigator, Screen} =  createNativeStackNavigator ();
import { theme } from '../global/styles/theme';
import { MenuScreen } from '../screens/MenuScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { StartHere } from '../screens/StartHere';
import { MenuPacientSafe } from '../screens/MenuPacientSafe';
import { PacientSafet } from '../screens/PacientSafet';
import { HandClean } from '../screens/HandClean';
import { PatientId } from '../screens/PatientId';
import { FallPrevention } from '../screens/FallPrevention';
import { SafeSurgery } from '../screens/SafeSurgery';
import {PreOperative} from '../screens/PreOperative';
import { PostOperative } from '../screens/PostOperative';
import { TimeSurgery } from '../screens/TimeSurgery';
import { Anesthesia } from '../screens/TimeSurgery/Anesthesia';
import { SwiperImage } from '../screens/Swiper';
import { SurgeryCenter } from '../screens/TimeSurgery/SurgeryCenter';
import { PdfRead } from '../screens/PdfRead';
import { AboutApp } from '../screens/AboutApp';
import { Profile } from '../screens/Profile';
import { PrivacyPolicy } from '../screens/PrivacyPolicy';
import Games from '../screens/Games';

export function AppRoutes(){
    const [isSpeech, setIsSpeech] = useState(false);
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
                name="Inicio"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Screen 
                name="Menu"
                component={MenuScreen}
                options={{
                    headerShown: false
                }}
            />
            <Screen 
                name="Apresentações"
                component={StartHere}
            />
            <Screen 
                name="Segurança do Paciente"
                component={MenuPacientSafe}
            />
            <Screen 
                name="Sobre Segurança"
                component={PacientSafet}
            />
            <Screen 
                name="Higienização das Mãos"
                component={HandClean}
            />
            <Screen 
                name="Identificação do Paciente"
                component={PatientId}
            />
            <Screen 
                name="Prevenção de Quedas"
                component={FallPrevention}
            />
            <Screen 
                name="Cirurgia Segura"
                component={SafeSurgery}
            />
            <Screen 
                name="Orientações Pré-Operatórias"
                component={PreOperative}
            />
            <Screen 
                name="Momento da Cirurgia"
                component={TimeSurgery}
            />
            <Screen 
                name="Anestesia"
                component={Anesthesia}
                options={{
                    headerShown: false
                }}
            />
            <Screen 
                name="Centro Cirurgico"
                component={SurgeryCenter}
                options={{
                    headerShown: false
                }}
            />
            <Screen 
                name="A história de Antônio"
                component={PdfRead}
            />
            <Screen 
                name="Pós-Operatório"
                component={PostOperative}
            />
            <Screen  
                name="Swiper"
                component={SwiperImage}
                options={{
                    headerShown: false
                }}
            />
            <Screen  
                name="Sobre o aplicativo"
                component={AboutApp}
            />
            <Screen  
                name="Políticas de privacidade"
                component={PrivacyPolicy}
            />
            <Screen  
                name="Minhas informações"
                component={Profile}
            />
            <Screen 
                name="Games"
                component={Games}
                options={{
                    headerShown: false
                }}
            />
        </Navigator>
    );
}