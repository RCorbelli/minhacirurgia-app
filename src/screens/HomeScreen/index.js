import React, {useEffect} from 'react';
import {  Image, ImageBackground, Text, View, BackHandler, Alert } from 'react-native';
import { Background } from '../../components/Background';
import anaImg from '../../images/personas/ana1-inverida.png';
import balao from '../../images/baloes/balaoleft.png';
import balaoRight from '../../images/baloes/novo-balao6.png';
import { styles } from "./styles";
import { Footer } from '../../components/Footer';
import { HOME_SCREEN_STRINGS } from '../../config/strings';
import { stopSpeech } from '../../utils';
import { SpeechTexts } from '../../components/SpeechText';
import { postScreenAccess } from '../../utils/reqMethods';
import {useAuth} from '../../hooks/auth';
export function HomeScreen({navigation}){
  const HOME_TEXTS = HOME_SCREEN_STRINGS.text1 + '.' + HOME_SCREEN_STRINGS.text2 + '.' + HOME_SCREEN_STRINGS.card;
  const {user} = useAuth();
  
  useEffect(() => {
    postScreenAccess(9, user.id);
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  const backAction = () => {
    if(navigation.isFocused()){
      Alert.alert("Atenção!", "Tem certeza que deseja fechar o aplicativo?", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Sim", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    }
  };
  
  return( 
    <Background>
      <View style={styles.container}>
        <View style={styles.content}>
        <SpeechTexts text={HOME_TEXTS} color="#fff" />
        <ImageBackground  source={balao}
            resizeMode="cover" style={styles.imgBalao1}
          > 
            <Text style={styles.text}>{HOME_SCREEN_STRINGS.text1}</Text>
      </ImageBackground>
      <ImageBackground  source={balaoRight}
            resizeMode="cover" style={styles.imgBalao2}
          >
            <Text style={styles.text2}>{HOME_SCREEN_STRINGS.text2}</Text>
      </ImageBackground>
          <Image style={styles.imgAna} source={anaImg} />
        </View>
        <View style={styles.card}>
          <Text style={styles.textCard}>{HOME_SCREEN_STRINGS.card}</Text>
        </View>
        <Footer onPress={() => {navigation.navigate("Menu"); stopSpeech(false)}}/>
      </View>
    </Background>
  )
}