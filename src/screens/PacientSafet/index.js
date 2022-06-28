import React, { useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import balao3 from '../../images/baloes/balao3.png';
import balao4 from '../../images/baloes/balao4.png';
import balaoInvertido from '../../images/baloes/balaoinvertido.png';
import balaoRight from '../../images/baloes/balao5.png';
import balao7 from '../../images/baloes/novo-balao7.png';
import balaoNovo4 from '../../images/baloes/novo-balao1.png';
import anaImg from '../../images/personas/ana2.png';
import carlos from '../../images/personas/carlos.png';
import oque from '../../images/seguranca/oque.png';
import { Button } from "../../components/Button";
import { PACIENT_SAFETY_SCREEN_STRINGS } from "../../config/strings";
import {SpeechTexts} from '../../components/SpeechText';
import {  stopSpeech } from "../../utils";
import { postScreenAccess } from '../../utils/reqMethods';
import {useAuth} from '../../hooks/auth';
import WebView from "react-native-webview";
export function PacientSafet({navigation}){
  const PACIENT_SAFETY_TEXTS1 = "O que é segurança do Paciente e porquê é importante que você conheça este tema?" + "." + PACIENT_SAFETY_SCREEN_STRINGS.firstScreen.text1 + "." + PACIENT_SAFETY_SCREEN_STRINGS.firstScreen.text2;
  const PACIENT_SAFETY_TEXTS2 = "Sabia que você pode auxiliar na prevenção dos erros e fortalecer a segurança do Paciente?" + "." + PACIENT_SAFETY_SCREEN_STRINGS.secondScreen.text1 + "." + PACIENT_SAFETY_SCREEN_STRINGS.secondScreen.text2 ;
  const PACIENT_SAFETY_TEXTS3 = PACIENT_SAFETY_SCREEN_STRINGS.thirdScreen.text1 + "." + PACIENT_SAFETY_SCREEN_STRINGS.thirdScreen.text2 + "." + PACIENT_SAFETY_SCREEN_STRINGS.thirdScreen.text3;
  const [btnVoltar, setBtnVoltar] = useState(false);
  const [screen, setScreen] = useState(1);
  const {user} = useAuth();
  function FirstScreen(){
    postScreenAccess(12, user.id);
    return(
      <View style={styles.content}>
      <SpeechTexts text={PACIENT_SAFETY_TEXTS1} color="#333" customStyle={styles.buttonSpeech} />
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <ImageBackground  source={balao7}
            resizeMode="cover" style={styles.imgBalao}
          >
            <Text style={styles.text}>{PACIENT_SAFETY_SCREEN_STRINGS.firstScreen.text1}</Text>
      </ImageBackground>
      <ImageBackground  source={balao4}
            resizeMode="cover" style={styles.imgBalao2}
          >
            <Text style={styles.text2}>{PACIENT_SAFETY_SCREEN_STRINGS.firstScreen.text2}</Text>
      </ImageBackground>
      <Image style={styles.img} source={anaImg} />
      </View>
    );
  }

  function SecondScreen(){
    postScreenAccess(13, user.id);
    return(
      <View style={styles.contentScreen2}>
      <SpeechTexts text={PACIENT_SAFETY_TEXTS2} color="#333" customStyle={styles.buttonSpeech} />
      <ImageBackground  source={balao3}
            resizeMode="cover" style={styles.imgBalaoScreen2}
          >
            <Text style={styles.text1Screen2}>{PACIENT_SAFETY_SCREEN_STRINGS.secondScreen.text1}</Text>
      </ImageBackground>
      <ImageBackground  source={balaoRight}
            resizeMode="cover" style={styles.imgBalao2Screen2}
          >
            <Text style={styles.text2Screen2}>{PACIENT_SAFETY_SCREEN_STRINGS.secondScreen.text2}</Text>
      </ImageBackground>
      <Image style={styles.imgCarlos} source={carlos} />
      </View>
    );
  }

  function ThirdScreen(){
    postScreenAccess(14, user.id);
    return(
      <View style={styles.content}>
      <SpeechTexts text={PACIENT_SAFETY_TEXTS3} color="#333" customStyle={styles.buttonSpeech} />
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <ImageBackground  source={balaoNovo4}
            resizeMode="cover" style={styles.imgBalaoScreen3}
          >
            <Text style={styles.textScreen3}>{PACIENT_SAFETY_SCREEN_STRINGS.thirdScreen.text1}</Text>
      </ImageBackground>
      <View  style={styles.imgCardScreen3}>
            <Text style={styles.textCardScreen3}>{PACIENT_SAFETY_SCREEN_STRINGS.thirdScreen.text2 +' '+ PACIENT_SAFETY_SCREEN_STRINGS.thirdScreen.text3}</Text>
      </View>
      <Image style={styles.imgScreen3} source={carlos} />
      </View>
    );
  }

  function FourthScreen(){
    postScreenAccess(15, user.id);
    return(
    <View style={styles.contentDicas}>
      <Text style={styles.textHeader2}>{PACIENT_SAFETY_SCREEN_STRINGS.fourthScreen.text1}</Text>
     <View style={{width: 350, height: 300, backgroundColor: "#333", borderRadius: 20}}>
     <WebView
              style={{flex:1}}
              javaScriptEnabled={true}
              source={{uri: PACIENT_SAFETY_SCREEN_STRINGS.fourthScreen.uriMovie}}
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
      <View style={styles.header}>
      {screen === 1? 
        <Text style={styles.textHeader}>O que é segurança do Paciente e porquê é importante que você conheça este tema?</Text>:
        <Text style={styles.textHeader}>Sabia que você pode auxiliar na prevenção dos erros e fortalecer a segurança do Paciente?</Text>}
        <Image style={styles.icon} source={oque} />
      </View>
      {screen === 1? 
      <FirstScreen /> : screen === 2 ? 
      <SecondScreen />  : screen === 3 ?
      <ThirdScreen /> : <FourthScreen />
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