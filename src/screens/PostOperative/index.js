import React, {useState} from 'react';
import {View, Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { theme } from '../../global/styles/theme';
import { Background } from '../../components/Background';
import { SurgicalWound } from './SurgicalWound';
import { ImportantQuestions } from './ImportantQuestions';

export function PostOperative({navigation}){
  const Tab = createMaterialTopTabNavigator();

  return (
    <Background>
      <Tab.Navigator screenOptions={{
                                  tabBarLabelStyle: { fontFamily: 
                                                      theme.fonts.Roboto500, 
                                                      fontSize: 15, 
                                                      color: theme.colors.overlay },
                                  tabBarIndicatorStyle:{backgroundColor: theme.colors.lineMomentoCirurgia, height: 3},
                                }}>
        <Tab.Screen name="Cuidados com a ferida cirurgica" component={SurgicalWound} />
        <Tab.Screen name="Perguntas Importantes" component={ImportantQuestions} />
      </Tab.Navigator>
    </Background>
  )
}