import React, {useState} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import { stopSpeech } from '../../../utils';
import {Button} from '../../../components/Button';
import {SpeechTexts} from '../../../components/SpeechText';
import { theme } from '../../global/styles/theme';
import anaImg from '../../../images/personas/anaAzul.png';
import claudiaImg from '../../../images/personas/claudia.png'
import balao from '../../../images/baloes/balaoright.png';
import balao1Screen2 from '../../../images/baloes/balao3.png';
import balao2Screen2 from '../../../images/baloes/balao4.png';
import balaoCirugicalWound from '../../../images/baloes/balao-cirugical-wound.png';

import bandaid from '../../../images/bandaid.png';
import ferida from '../../../images/ferida.png';
import sol from '../../../images/sol.png';
import sutura from '../../../images/sutura.png';
import {styles} from './styles';
import { SURGICAL_WOUND_STRINGS } from '../../../config/strings';
import { postScreenAccess } from '../../../utils/reqMethods';
import {useAuth} from '../../../hooks/auth';
export function SurgicalWound({navigation}){
  const {user} = useAuth();
  const [screenSurgeryWound, setScreenSurgeryWound] = useState(1);
  const [btnVoltarSurgeryWound, setBtnVoltarSurgeryWound] = useState(false);
  const SURGICAL_WOUND_TEXTS_SCREEN1 = SURGICAL_WOUND_STRINGS.firstScreen.text1 + SURGICAL_WOUND_STRINGS.firstScreen.text2;
  const SURGICAL_WOUND_TEXTS_SCREEN2 = SURGICAL_WOUND_STRINGS.secondScreen.text1 + SURGICAL_WOUND_STRINGS.secondScreen.text2;
  const SURGICAL_WOUND_TEXTS_SCREEN3 = SURGICAL_WOUND_STRINGS.thirdScreen.text1 + SURGICAL_WOUND_STRINGS.thirdScreen.text2;

    function screenSurgeryWoundUp(){
      if(screenSurgeryWound === 1){
        setBtnVoltarSurgeryWound(true);
        setScreenSurgeryWound(screenSurgeryWound + 1);
        stopSpeech();
      }else{
        setScreenSurgeryWound(screenSurgeryWound + 1);
        stopSpeech();
      }
    }
  
    function screenSurgeryWoundDown(){
      if(screenSurgeryWound === 2){
        setScreenSurgeryWound(screenSurgeryWound - 1);
        setBtnVoltarSurgeryWound(false);
        stopSpeech();
      }else{
        setScreenSurgeryWound(screenSurgeryWound-1);
        stopSpeech();
      }
    }
    
    function FirstScreen(){
      postScreenAccess(23, user.id)
      return(
          <View style={styles.contentBlue}>
          <SpeechTexts text={SURGICAL_WOUND_TEXTS_SCREEN1} color="#fff" customStyle={styles.buttonSpeech} />
          {/* <Image style={styles.imgBalao} source={balao} /> */}
          <ImageBackground  source={balao}
                resizeMode="cover" style={styles.imgBalao1Screen1}
              >
                <Text style={styles.text1Screen1}>{SURGICAL_WOUND_STRINGS.firstScreen.text1}</Text>
          </ImageBackground>
          <Image style={styles.bandaid} source={bandaid} />
          <Image style={styles.imgScreen1} source={anaImg} />
          <ImageBackground  source={balao}
                resizeMode="cover" style={styles.imgBalao2Screen1}
              >
                <Text style={styles.text2Screen1}>{SURGICAL_WOUND_STRINGS.firstScreen.text2}</Text>
          </ImageBackground>
          </View>
      );
    }

    function SecondScreen(){
      postScreenAccess(24, user.id)
      return(
          <View style={styles.content}>
          <SpeechTexts text={SURGICAL_WOUND_TEXTS_SCREEN2} color="#333" customStyle={styles.buttonSpeech} />
          {/* <Image style={styles.imgBalao} source={balao} /> */}
          <ImageBackground  source={balao1Screen2}
                resizeMode="cover" style={styles.imgBalao1Screen2}
              >
                <Text style={styles.text1Screen2}>{SURGICAL_WOUND_STRINGS.secondScreen.text1}</Text>
          </ImageBackground>
          <Image style={styles.imgScreen2} source={claudiaImg} />
          <ImageBackground  source={balao2Screen2}
                resizeMode="cover" style={styles.imgBalao2Screen2}
              >
                <Text style={styles.text2Screen2}>{SURGICAL_WOUND_STRINGS.secondScreen.text2}</Text>
          </ImageBackground>
          <Image style={styles.ferida} source={ferida} />
          </View>
      );
    }

    function ThirdScreen(){
      postScreenAccess(25, user.id)
      return(
          <View style={styles.contentBlue}>
          <SpeechTexts text={SURGICAL_WOUND_TEXTS_SCREEN3} color="#fff" customStyle={styles.buttonSpeech} />
          {/* <Image style={styles.imgBalao} source={balao} /> */}
          <ImageBackground  source={balao1Screen2}
                resizeMode="cover" style={styles.imgBalao1Screen3}
              >
                <Text style={styles.text1Screen3}>{SURGICAL_WOUND_STRINGS.thirdScreen.text1}</Text>
          </ImageBackground>
          <View style={styles.groupImg}>
            <Image style={styles.sol} source={sol} />
            <Image style={styles.sutura} source={sutura} />
          </View>
          <Image style={styles.imgScreen3} source={anaImg} />
          <ImageBackground  source={balaoCirugicalWound}
                resizeMode="cover" style={styles.imgBalao2Screen3}
              >
                <Text style={styles.text2Screen3}>{SURGICAL_WOUND_STRINGS.thirdScreen.text2}</Text>
          </ImageBackground>
          
          </View>
      );
    }

    return(
      <>
      {screenSurgeryWound === 1 ? 
        <FirstScreen /> : screenSurgeryWound === 2 ? 
        <SecondScreen /> : <ThirdScreen />}
      {!btnVoltarSurgeryWound ? 
      <View style={styles.footer}>
        <View style={{paddingHorizontal: 100}}>
          <Button title="Próximo" isOutline onPress={() => screenSurgeryWoundUp()}></Button>
        </View>
      </View>  : 
      <View style={styles.footer}>
        <View style={{width: '100%', flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20}}>
          <View style={{width: '45%'}}>
            <Button title="Voltar" isOutline onPress={() => screenSurgeryWoundDown()}></Button>
          </View>
          {screenSurgeryWound === 3 ? 
          <View style={{width: '45%'}}>
            <Button title="Próximo" isOutline onPress={() => navigation.navigate("Perguntas Importantes")}></Button>
          </View>  : 
          <View style={{width: '45%'}}>
            <Button title="Próximo" isOutline onPress={() => screenSurgeryWoundUp()}></Button>
          </View>
        }
        </View>
      </View>
      }
      </>
    )
  }

