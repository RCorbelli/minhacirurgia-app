import React, { useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import balaoLuciana from '../../images/baloes/balaoLuciana1.png';
import balaoLuciana2 from '../../images/baloes/balaoLuciana2.png';
import dicas from '../../images/baloes/dicas.png';
import luciana from '../../images/personas/luciana1.png';
import { Button } from "../../components/Button";
import  {  WebView  }  from  'react-native-webview' ;
import { PATIENT_ID_SCREEN_STRINGS } from "../../config/strings";
import { stopSpeech } from "../../utils";
import {SpeechTexts} from '../../components/SpeechText';
import { postScreenAccess } from '../../utils/reqMethods';
import {useAuth} from '../../hooks/auth';
export function PatientId({navigation}){
  const [btnVoltar, setBtnVoltar] = useState(false);
  const [screen, setScreen] = useState(1);
  const PATIENT_ID_TEXT1 = PATIENT_ID_SCREEN_STRINGS.firstScreen.text1 + PATIENT_ID_SCREEN_STRINGS.firstScreen.text2
  const PATIENT_ID_TEXT2 = PATIENT_ID_SCREEN_STRINGS.secondScreen.text1;
  const PATIENT_ID_TEXT3 = PATIENT_ID_SCREEN_STRINGS.thirdScreen.text1;
  const {user} = useAuth();
  function FirstScreen(){
    postScreenAccess(16, user.id);
    return(
      <View style={styles.content}>
      <SpeechTexts text={PATIENT_ID_TEXT1} color="#333" customStyle={styles.buttonSpeech} />
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <ImageBackground  source={balaoLuciana} 
            resizeMode="cover" style={styles.imgBalao}
          >
            <Text style={styles.text}>{PATIENT_ID_SCREEN_STRINGS.firstScreen.text1}</Text>
      </ImageBackground>
      <ImageBackground  source={balaoLuciana2}
            resizeMode="cover" style={styles.imgBalao2}
          >
            <Text style={styles.text}>{PATIENT_ID_SCREEN_STRINGS.firstScreen.text2}</Text>
      </ImageBackground>
      <Image style={styles.img} source={luciana} />
      </View>
    );
  }

  function SecondScreen(){
    postScreenAccess(17, user.id);
    return(
      <View style={styles.content}>
      <SpeechTexts text={PATIENT_ID_TEXT2} color="#333" customStyle={styles.buttonSpeech} />
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <ImageBackground  source={balaoLuciana2}
            resizeMode="cover" style={styles.imgBalaoSecondScreen}
          >
            <Text style={styles.textSecondScreen}>{PATIENT_ID_SCREEN_STRINGS.secondScreen.text1}</Text>
      </ImageBackground>
      <Image style={styles.imgSecondScreen} source={luciana} />
      </View>
    );
  }

  function ThirdScreen(){
    postScreenAccess(18, user.id);
    return(
      <View style={styles.contentDicas}>
        <SpeechTexts text={PATIENT_ID_TEXT3} color="#333" customStyle={styles.buttonSpeech} />
        <Text style={styles.textHeader}>Anotem as dicas!</Text>
       <ImageBackground  source={dicas}
            resizeMode="cover" style={styles.dicas}
          >
            <Text style={styles.textDicas}>{PATIENT_ID_SCREEN_STRINGS.thirdScreen.text1}</Text>
      </ImageBackground>
      </View>
    );
  }

  function QuarterScreen(){
    postScreenAccess(19, user.id);
    return(
      <View style={styles.contentDicas}>
        <Text style={styles.textHeader2}>{PATIENT_ID_SCREEN_STRINGS.fourthScreen.text1}</Text>
       <View style={{width: 350, height: 300, backgroundColor: "#333", borderRadius: 20}}>
       <WebView
                style={{flex:1}}
                javaScriptEnabled={true}
                source={{uri: PATIENT_ID_SCREEN_STRINGS.fourthScreen.uriMovie}}
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
        <Text style={styles.textHeader}>Ai vão algumas dicas.</Text>:
        <Text style={styles.textHeader}>Porque é importante higienizar as mãos?</Text>}
      </View> */}
      {screen === 1? 
      <FirstScreen /> : screen === 2 ? 
      <SecondScreen />  : screen === 3 ?
      <ThirdScreen /> : <QuarterScreen />
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