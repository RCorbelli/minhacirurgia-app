import React, { useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import balao3 from '../../images/baloes/balaoLuciana1.png';
import balao4 from '../../images/baloes/balaoLuciana2.png';
import balao7 from '../../images/baloes/balaoLuciana3.png';
import balao5 from '../../images/baloes/balao5.png';
import gleyce from '../../images/personas/gleyce.png';
import claudia from '../../images/personas/claudia.png';
import quadroazul from '../../images/baloes/quadroazul.png';
import { Button } from "../../components/Button";
import  {  WebView  }  from  'react-native-webview' ;
import { SAFE_SURGERY_STRINGS } from "../../config/strings";
import { stopSpeech } from "../../utils";
import {SpeechTexts} from '../../components/SpeechText';
import { postScreenAccess } from '../../utils/reqMethods';
import {useAuth} from '../../hooks/auth';
export function SafeSurgery({navigation}){
  const [btnVoltar, setBtnVoltar] = useState(false);
  const [screen, setScreen] = useState(1);
  const {user} = useAuth();

  const SAFE_SURGERY_TEXT1 = SAFE_SURGERY_STRINGS.firstScreen.text1 + "." + 
                             SAFE_SURGERY_STRINGS.firstScreen.text2 + "." + 
                             SAFE_SURGERY_STRINGS.firstScreen.text3;

  const SAFE_SURGERY_TEXT2 = SAFE_SURGERY_STRINGS.secondScreen.text1 + "." + 
                             SAFE_SURGERY_STRINGS.secondScreen.card;
  
  const SAFE_SURGERY_TEXT3 = SAFE_SURGERY_STRINGS.thirdScreen.text1;

  function FirstScreen(){
    postScreenAccess(41, user.id);
    return(
      <View style={styles.content}>
        {/* <ComponentSpeech text={SAFE_SURGERY_TEXT1} color="#333"/> */}
        <SpeechTexts text={SAFE_SURGERY_TEXT1} color="#333" customStyle={styles.buttonSpeech} />
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <ImageBackground  source={balao3}
            resizeMode="cover" style={styles.imgBalao}
          > 
            <Text style={styles.text1}>{SAFE_SURGERY_STRINGS.firstScreen.text1}</Text>
      </ImageBackground>
      <ImageBackground  source={balao4}
            resizeMode="cover" style={styles.imgBalao2}
          >
            <Text style={styles.text2}>{SAFE_SURGERY_STRINGS.firstScreen.text2}</Text>
      </ImageBackground>
      <ImageBackground  source={balao7}
            resizeMode="cover" style={styles.imgBalao3}
          >
            <Text style={styles.text2}>{SAFE_SURGERY_STRINGS.firstScreen.text3}</Text>
      </ImageBackground>
      <Image style={styles.img} source={gleyce} />
      </View>
    );
  }

  function SecondScreen(){
    postScreenAccess(42, user.id);
    return(
      <View style={styles.content2}> 
      <SpeechTexts text={SAFE_SURGERY_TEXT2} color="#fff" customStyle={styles.buttonSpeech} />
      <ImageBackground  source={balao5}
            resizeMode="cover" style={styles.imgBalao5}
          >
            <Text style={styles.text3}>{SAFE_SURGERY_STRINGS.secondScreen.text1}</Text>
      </ImageBackground>
      <ImageBackground  source={quadroazul}
            resizeMode="cover" style={styles.quadro}
          >
            <Text style={styles.text4}>{SAFE_SURGERY_STRINGS.secondScreen.card}</Text>
      </ImageBackground>
      <Image style={styles.img2} source={claudia} />
      </View>
    );
  }

  function ThirdScreen(){
    postScreenAccess(43, user.id);
    return(
      <View style={styles.content}>
        <Text style={styles.textHeader}>{SAFE_SURGERY_STRINGS.thirdScreen.text1}</Text>
       <View style={{width: '90%', height: 250, backgroundColor: "#333", borderRadius: 20}}>
       <WebView
                style={{flex:1}}
                javaScriptEnabled={true}
                source={{uri: SAFE_SURGERY_STRINGS.thirdScreen.uriMovie}}
            />
       </View>
      </View>
    );
  }

  function screenUp(){
    if(screen === 1){
      setBtnVoltar(true);
      setScreen(screen + 1);
      stopSpeech();
    }else{
      setScreen(screen + 1);
      stopSpeech();
    }
  }

  function screenDown(){
    if(screen === 2){
      setScreen(screen - 1);
      setBtnVoltar(false);
      stopSpeech();
    }else{
      setScreen(screen-1);
      stopSpeech();
    }
  }

  return(
    <Background>
      {/* <View style={{height: 20, backgroundColor: "#fff"}}>
      </View> */}
      {/* <View style={styles.header}>
      {screen === 1? 
        <Text style={styles.textHeader}>O que é segurança do Paciente e porquê é importante que você conheça este tema?</Text>:
        <Text style={styles.textHeader}>Sabia que você pode auxiliar na prevenção dos erros e fortalecer a segurança do Paciente?</Text>}
        <Image style={styles.icon} source={seguraImg} />
      </View> */}
      {screen === 1? 
      <FirstScreen /> : screen === 2 ? 
      <SecondScreen />  :
      <ThirdScreen />
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
          {screen === 3 ? 
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