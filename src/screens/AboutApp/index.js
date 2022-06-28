import React, { useEffect } from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, Linking} from 'react-native';
import { Button } from '../../components/Button';
import logoUfsj from '../../images/logo-ufsj.png';
import logoUsp from '../../images/logo-usp.png';
import {SOBRE_O_APP} from '../../config/strings';
import {useAuth} from '../../hooks/auth';
import { postScreenAccess } from '../../utils/reqMethods';

import {styles} from './styles';

export function AboutApp({navigation}){

  const {user} = useAuth();
  useEffect(() => {
    postScreenAccess(1, user.id)
  }, []);

  return(
    <ScrollView style={styles.container}>
      <View style={styles.developers}>
        <Text style={styles.text}>{SOBRE_O_APP.text1}</Text>
        <Text style={styles.text2}>{SOBRE_O_APP.text2}</Text>
      </View>
      <View style={styles.instituições}>
        <Image style={styles.imgUfsj} source={logoUfsj} />
        <Image style={styles.imgUsp} source={logoUsp} />
      </View>
      <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate("Políticas de privacidade")}>
        <Text style={styles.title}>Politicas de privacidade</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}