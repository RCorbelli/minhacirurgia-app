import React, { useState, useEffect } from "react";
import { Image, ImageBackground, Text, View, Modal } from "react-native";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import balao from '../../images/baloes/novo-balao6.png';
import balaoRight from '../../images/baloes/balaoright.png';
import balaoazul from '../../images/baloes/balaoazul.png';
import anaImg from '../../images/personas/ana1-inverida.png';
import antonioImg from '../../images/personas/antonio.png';
import mariaImg from '../../images/personas/maria.png';
import claudia from '../../images/personas/claudia.png';
import carlos from '../../images/personas/carlos.png';
import luciana from '../../images/personas/luciana1.png';
import gleyce from '../../images/personas/gleyce.png';
import drjorge from '../../images/personas/drjorge.png';
import teresaImg from '../../images/personas/teresa.png';
import { Button } from "../../components/Button";
import { PRESENTATION_SCREEN_STRINGS } from "../../config/strings";
import { stopSpeech } from "../../utils";
import { SpeechTexts } from "../../components/SpeechText";
import { postScreenAccess } from '../../utils/reqMethods';
import {useAuth} from '../../hooks/auth';
import { Tuturial } from "../../components/Tuturial";
export function StartHere({navigation}){
  const PRESENTATION_TEXTS_SCREEN1 = PRESENTATION_SCREEN_STRINGS.text1;
  const PRESENTATION_TEXTS_SCREEN2 = PRESENTATION_SCREEN_STRINGS.text2 + PRESENTATION_SCREEN_STRINGS.text3;
  const PRESENTATION_TEXTS_SCREEN3 = PRESENTATION_SCREEN_STRINGS.text4 + PRESENTATION_SCREEN_STRINGS.text5;
  const PRESENTATION_TEXTS_SCREEN4 = PRESENTATION_SCREEN_STRINGS.text6 + PRESENTATION_SCREEN_STRINGS.text7 + PRESENTATION_SCREEN_STRINGS.text8;
  const [btnVoltar, setBtnVoltar] = useState(false);
  const [screen, setScreen] = useState(1);
  const {user} = useAuth();
  
  function FirstScreen(){
    postScreenAccess(44, user.id);
    return(
      <View style={styles.content}>
        <Tuturial />
        <SpeechTexts text={PRESENTATION_TEXTS_SCREEN1} color="#333"/>
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <ImageBackground  source={balao}
            resizeMode="cover" style={styles.imgBalao}
          >
            <Text style={styles.text}>{PRESENTATION_SCREEN_STRINGS.text1}</Text>
      </ImageBackground>
      <Image style={styles.img} source={anaImg} />
      </View>
    );
  }

  function SecondScreen(){
    postScreenAccess(45, user.id);
    return(
      <View style={styles.content}>
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <SpeechTexts text={PRESENTATION_TEXTS_SCREEN2} color="#333"/>
      <ImageBackground  source={balao}
            resizeMode="cover" style={styles.imgBalaoAntonio}
          >
            <Text style={styles.textAntonio}>
            {PRESENTATION_SCREEN_STRINGS.text2}
            </Text>
      </ImageBackground>
      <Image style={styles.imgAntonio} source={antonioImg} />
      <Image style={styles.imgMaria} source={mariaImg} />
      <Image style={styles.imgTeresa} source={teresaImg} />
      <ImageBackground  source={balao}
            resizeMode="cover" style={styles.imgBalaoMariaTeresa}
          >
            <Text style={styles.textMaria}>
            {PRESENTATION_SCREEN_STRINGS.text3}
            </Text>
      </ImageBackground>
      </View>
    );
  }

  function ThirdScreen(){
    postScreenAccess(46, user.id);
    return(
      <View style={styles.content}> 
        <SpeechTexts text={PRESENTATION_TEXTS_SCREEN3} color="#333"/>
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <ImageBackground  source={balaoazul}
            resizeMode="cover" style={styles.imgBalaoClaudia}
          >
            <Text style={styles.textClaudia}>
            {PRESENTATION_SCREEN_STRINGS.text4} 
            </Text>
      </ImageBackground>
      <Image style={styles.imgClaudia} source={claudia} />
      <ImageBackground  source={balaoazul}
            resizeMode="cover" style={styles.imgBalaoCarlos}
          >
            <Text style={styles.textCarlos}>
            {PRESENTATION_SCREEN_STRINGS.text5}
            </Text>
      </ImageBackground>
      <Image style={styles.imgCarlos} source={carlos} />
      </View>
    );
  }

  function FourthScreen(){
    postScreenAccess(47, user.id);
    return(
      <View style={styles.content}>
        <SpeechTexts text={PRESENTATION_TEXTS_SCREEN4} color="#333"/>
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <ImageBackground  source={balaoazul}
            resizeMode="cover" style={styles.imgBalaoLuciana}
          >
            <Text style={styles.textLuciana}>
              {PRESENTATION_SCREEN_STRINGS.text6}
            </Text>
      </ImageBackground>
      <Image style={styles.imgLuciana} source={luciana} />
      <ImageBackground  source={balaoazul}
            resizeMode="cover" style={styles.imgBalaoGleyce}
          >
            <Text style={styles.textGleyce}>
            {PRESENTATION_SCREEN_STRINGS.text7}
            </Text>
      </ImageBackground>
      <Image style={styles.imgGleyce} source={gleyce} />
      <ImageBackground  source={balaoazul}
            resizeMode="cover" style={styles.imgBalaoJorge}
          >
            <Text style={styles.textJorge}>
            {PRESENTATION_SCREEN_STRINGS.text8}
            </Text>
      </ImageBackground>
      <Image style={styles.imgJorge} source={drjorge} />
      </View>
    );
  }

  function screenUp(){
    if(screen === 1){
      setBtnVoltar(true);
      setScreen(screen + 1);
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
            <Button title="Ir para o Menu" isOutline onPress={() => navigation.navigate('Menu')}></Button>
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