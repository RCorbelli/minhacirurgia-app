import React, { useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import balao3 from '../../images/baloes/balaoazul2.png';
import balaoBolinha from '../../images/baloes/balaobolinha.png';
import quadroazul from '../../images/baloes/quadroazul.png';
import claudia from '../../images/personas/claudia.png';
import maos1 from '../../images/seguranca/higienemaos/maos1.png';
import maos2 from '../../images/seguranca/higienemaos/maos2.png';
import maos3 from '../../images/seguranca/higienemaos/maos3.png';
import maos4 from '../../images/seguranca/higienemaos/maos4.png';
import maos5 from '../../images/seguranca/higienemaos/maos5.png';
import maos6 from '../../images/seguranca/higienemaos/maos6.png';
import higieneMaos from '../../images/seguranca/higienemaos/higiene.png';
import { Button } from "../../components/Button";
import  {  WebView  }  from  'react-native-webview' ;
import { HAND_CLEAN_SCREEN_STRINGS } from "../../config/strings";
import {  stopSpeech } from "../../utils";
import { SpeechTexts } from "../../components/SpeechText";
import { postScreenAccess } from '../../utils/reqMethods';
import {useAuth} from '../../hooks/auth';

export function HandClean({navigation}){
  const [btnVoltar, setBtnVoltar] = useState(false);
  const [screen, setScreen] = useState(1);
  const HAND_CLEAN_TEXT1 = HAND_CLEAN_SCREEN_STRINGS.firstScreen.text1 + "." + HAND_CLEAN_SCREEN_STRINGS.firstScreen.text2
  const HAND_CLEAN_TEXT2 = HAND_CLEAN_SCREEN_STRINGS.secondScreen.text1 + "." + HAND_CLEAN_SCREEN_STRINGS.secondScreen.text2
  const {user} = useAuth();
  function FirstScreen(){
    postScreenAccess(5, user.id);
    return(
      <View style={styles.content}>
       <SpeechTexts text={HAND_CLEAN_TEXT1} color="#333" customStyle={styles.buttonSpeech} />
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <ImageBackground  source={balao3}
            resizeMode="cover" style={styles.imgBalao}
          >
            <Text style={styles.text}>{HAND_CLEAN_SCREEN_STRINGS.firstScreen.text1}</Text>
      </ImageBackground>
      <ImageBackground  source={quadroazul}
            resizeMode="cover" style={styles.quadroAzul}
          >
            <Text style={styles.textQuadro}>
            {HAND_CLEAN_SCREEN_STRINGS.firstScreen.text2}
            </Text>
      </ImageBackground>
      <Image style={styles.img} source={claudia} />
      </View>
    );
  }

  function SecondScreen(){
    postScreenAccess(6, user.id);
    return(
      <View style={styles.content}>
      <SpeechTexts text={HAND_CLEAN_TEXT2} color="#333" customStyle={styles.buttonSpeech} />
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <ImageBackground  source={balao3}
            resizeMode="cover" style={styles.imgBalaoScreen2}
          >
            <Text style={styles.text}>{HAND_CLEAN_SCREEN_STRINGS.secondScreen.text1}</Text>
      </ImageBackground>
      <ImageBackground  source={balaoBolinha}
            resizeMode="cover" style={styles.imgBalao2Screen2}
          >
            <Text style={styles.text3}>{HAND_CLEAN_SCREEN_STRINGS.secondScreen.text2}</Text>
      </ImageBackground>
      <Image style={styles.img} source={claudia} />
      </View>
    );
  }

  function ThirdScreen(){
    postScreenAccess(7, user.id);
    return(
      <View style={styles.contentScreen3}>
        <Text style={styles.textMaos}>Siga os passos abaixo na hora de higienizar suas mãos.</Text>
        <Image style={styles.imgHigieneMaos} source={higieneMaos} />
      </View>
    );
  }

  function FourthScreen(){
    postScreenAccess(8, user.id);
    return(
      <View style={styles.contentScreen3}>
        <Text style={styles.textMaos}>Assista o vídeo para saber mais sobre a higienização das mãos.</Text>
        <View style={styles.movie}>
            <WebView
                style={styles.webView}
                javaScriptEnabled={true}
                resizeMode="cover"
                source={{uri: HAND_CLEAN_SCREEN_STRINGS.thirdScreen.uriMovie}}
            />
        </View>
      </View>
    );
  }

  function screenUp(){
    if(screen === 1){
      setBtnVoltar(true);
      setScreen(screen + 1)
      stopSpeech();
    }else{
      setScreen(screen + 1)
      stopSpeech();
    }
  }

  function screenDown(){
    if(screen === 2){
      setScreen(screen - 1)
      setBtnVoltar(false);
      stopSpeech();
    }else{
      setScreen(screen-1)
      stopSpeech();
    }
  }

  return(
    <Background>
      {/* <View style={{height: 20, backgroundColor: "#fff"}}>
      </View> */}
      {/* <View style={styles.header}>
      {screen === 3? 
        <Text style={styles.textHeader}>Como lavar as mãos</Text>:
        <Text style={styles.textHeader}>Porque é importante higienizar as mãos?</Text>}
        <Image style={styles.icon} source={higieneMaos} />
      </View> */}
      {screen === 1? 
      <FirstScreen /> : screen === 2 ? 
      <SecondScreen />  : screen === 3 ? 
      <ThirdScreen /> : 
      <FourthScreen />
    }
      {!btnVoltar ? 
      <View style={styles.footer}>
        <View style={{paddingHorizontal: 100}}>
          <Button title="Próximo" isOutline onPress={() => screenUp()}></Button>
        </View>
      </View>  : 
      <View style={styles.footer}>
        <View style={{width: '100%', flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20}}>
          <View style={{width: '45%'}}>
            <Button title="Voltar" isOutline onPress={() => screenDown()}></Button>
          </View>
          {screen === 4 ? 
          <View style={{width: '45%'}}>
            <Button title="Ir para o Menu" isOutline onPress={() => navigation.navigate('Segurança do Paciente')}></Button>
          </View>  : 
          <View style={{width: '45%'}}>
            <Button title="Próximo" isOutline onPress={() => screenUp()}></Button>
          </View>
        }
        </View>
      </View>
      }
    </Background>
  )
}