import React, { useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import balao3 from '../../images/baloes/balao3.png';
import balao4 from '../../images/baloes/balao4.png';
import balao6 from '../../images/baloes/balao6.png';
import blurWhite from '../../images/baloes/blurwithe.png';
import anaImg from '../../images/personas/ana2.png';
import anaImg1 from '../../images/personas/ana1-inverida.png';
import { Button } from "../../components/Button";
import  {  WebView  }  from  'react-native-webview' ;
import { FALL_PREVENTION_SCREEN_STRINGS } from "../../config/strings";
import { stopSpeech } from "../../utils";
import {SpeechTexts} from '../../components/SpeechText';
import { postScreenAccess } from '../../utils/reqMethods';
import {useAuth} from '../../hooks/auth';

export function FallPrevention({navigation}){
  const [btnVoltar, setBtnVoltar] = useState(false);
  const [screen, setScreen] = useState(1);
  const {user} = useAuth();
  const FALL_PREVENTION_TEXT1 = FALL_PREVENTION_SCREEN_STRINGS.firstScreen.text1 + FALL_PREVENTION_SCREEN_STRINGS.firstScreen.text2 + FALL_PREVENTION_SCREEN_STRINGS.firstScreen.text3;
  const FALL_PREVENTION_TEXT2 = FALL_PREVENTION_SCREEN_STRINGS.secondScreen.text1 + FALL_PREVENTION_SCREEN_STRINGS.secondScreen.text2 + FALL_PREVENTION_SCREEN_STRINGS.secondScreen.text3

  function FirstScreen(){
    postScreenAccess(2, user.id);
    return(
      <View style={styles.content}>
      <SpeechTexts text={FALL_PREVENTION_TEXT1} color="#333" customStyle={styles.buttonSpeech} />
      <ImageBackground  source={balao3}
            resizeMode="cover" style={styles.imgBalao}
          >
            <Text style={styles.text1FirstScreen}>{FALL_PREVENTION_SCREEN_STRINGS.firstScreen.text1}</Text>
      </ImageBackground>
      <ImageBackground  source={balao4}
            resizeMode="cover" style={styles.imgBalao2}
          >
            <Text style={styles.text2FirstScreen}>{FALL_PREVENTION_SCREEN_STRINGS.firstScreen.text2}</Text>
      </ImageBackground>
      <ImageBackground  source={balao6}
            resizeMode="cover" style={styles.imgBalao3}
          >
            <Text style={styles.text3FirstScreen}>{FALL_PREVENTION_SCREEN_STRINGS.firstScreen.text3}</Text>
      </ImageBackground>
      <Image style={styles.img} source={anaImg} />
      </View>
    );
  }

  function SecondScreen(){
    postScreenAccess(3, user.id);
    return(
      <View style={styles.content2}>
      <SpeechTexts text={FALL_PREVENTION_TEXT2} color="#fff" customStyle={styles.buttonSpeech} />
      <ImageBackground  source={blurWhite}
            resizeMode="cover" style={styles.blur1}
          >
            <Text style={styles.text2}>{FALL_PREVENTION_SCREEN_STRINGS.secondScreen.text1}</Text>
      </ImageBackground>
      <ImageBackground  source={blurWhite}
            resizeMode="cover" style={styles.blur2}
          >
            <Text style={styles.text2}>{FALL_PREVENTION_SCREEN_STRINGS.secondScreen.text2}</Text>
      </ImageBackground>
      <ImageBackground  source={blurWhite}
            resizeMode="cover" style={styles.blur3}
          >
            <Text style={styles.text2}>{FALL_PREVENTION_SCREEN_STRINGS.secondScreen.text3}</Text>
      </ImageBackground>
      <Image style={styles.img2} source={anaImg1} />
      </View>
    );
  }

  function ThirdScreen(){
    postScreenAccess(4, user.id);
    return(
      <View style={styles.content}>
      {/* <Image style={styles.imgBalao} source={balao} /> */}
        <Text style={styles.textHeader}>{FALL_PREVENTION_SCREEN_STRINGS.thirdScreen.text1}</Text>
       <View style={{width: 350, height: 300, backgroundColor: "#333", borderRadius: 20}}>
       <WebView
                style={{flex:1}}
                javaScriptEnabled={true}
                source={{uri: FALL_PREVENTION_SCREEN_STRINGS.thirdScreen.uriMovie}}
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
      {screen === 1? 
        <Text style={styles.textHeader}>O que é segurança do Paciente e porquê é importante que você conheça este tema?</Text>:
        <Text style={styles.textHeader}>Sabia que você pode auxiliar na prevenção dos erros e fortalecer a segurança do Paciente?</Text>}
        <Image style={styles.icon} source={oque} />
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