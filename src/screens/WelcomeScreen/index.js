import React from "react";
import { Image, Text, View } from "react-native";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import anaImg from '../../images/personas/ana2.png';
import {WELCOME_SCREEN_STRINGS} from '../../config/strings';
import { Footer } from "../../components/Footer";
import Tts from 'react-native-tts';
import { SpeechTexts } from "../../components/SpeechText";

export function WelcomeScreen({navigation}){
  const WELCOME_TEXTS = WELCOME_SCREEN_STRINGS.text1 + '.' + WELCOME_SCREEN_STRINGS.text2;
  return(
    <Background> 
      <View style={styles.content}>
        <SpeechTexts text={WELCOME_TEXTS} color="#333" />
        <Image style={styles.img} source={anaImg} />
        <Text style={styles.title}>Bem vindo ao <Text style={styles.destaque}>Minha Cirurgia!</Text></Text>
        <Text style={styles.description}>{WELCOME_SCREEN_STRINGS.text2}</Text>
      </View>
      <Footer onPress={() => {navigation.navigate("Entrar"); Tts.stop()}} />
    </Background>
  )
}