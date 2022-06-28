import React, {useState} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import anaImg from '../../../images/personas/anaAzul.png';
import balao from '../../../images/baloes/balao3.png';
import balao2Screen2 from '../../../images/baloes/balao4.png';
import { POST_OPERATIVE_STRINGS } from '../../../config/strings';
import { SpeechTexts } from '../../../components/SpeechText';
import {styles} from './styles';
import { Button } from '../../../components/Button';
import { stopSpeech } from '../../../utils';
import card from '../../../images/baloes/quadroazul.png';
import { postScreenAccess } from '../../../utils/reqMethods';
import {useAuth} from '../../../hooks/auth';

export function ImportantQuestions({navigation}){
  const [screen, setScreen] = useState(1);
  const {user} = useAuth();
  const [btnVoltar, setBtnVoltar] = useState(false);
  const POST_OPERATIVE_TEXTS1 = POST_OPERATIVE_STRINGS.firstScreen.text1 + POST_OPERATIVE_STRINGS.firstScreen.text2;
  const POST_OPERATIVE_TEXTS2 = POST_OPERATIVE_STRINGS.secondScreen.text1 + POST_OPERATIVE_STRINGS.secondScreen.text2;
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


  function FirstScreen(){
    postScreenAccess(21, user.id)
    return(
        <View style={styles.content}>
        <SpeechTexts text={POST_OPERATIVE_TEXTS1} color="#333" customStyle={styles.buttonSpeech} />
        {/* <Image style={styles.imgBalao} source={balao} /> */}
        <ImageBackground  source={balao}
              resizeMode="cover" style={styles.imgBalaoScreen1}
            >
              <Text style={styles.text1Screen1}>{POST_OPERATIVE_STRINGS.firstScreen.text1}</Text>
        </ImageBackground>
        <Image style={styles.imgScreen1} source={anaImg} />
        <ImageBackground  source={card}
              resizeMode="cover" style={styles.imgCardScreen1}
            >
              <Text style={styles.text2Screen1}>{POST_OPERATIVE_STRINGS.firstScreen.text2}</Text>
        </ImageBackground>
        </View>
    );
  }

  function SecondScreen(){
    postScreenAccess(22, user.id)
    return(
        <View style={styles.contentBlue}>
        <SpeechTexts text={POST_OPERATIVE_TEXTS2} color="#fff" customStyle={styles.buttonSpeech} />
        {/* <Image style={styles.imgBalao} source={balao} /> */}
        <ImageBackground  source={balao}
              resizeMode="cover" style={styles.imgBalao1Screen2}
            >
              <Text style={styles.text1Screen2}>{POST_OPERATIVE_STRINGS.secondScreen.text1}</Text>
        </ImageBackground>
        <Image style={styles.imgScreen2} source={anaImg} />
        <ImageBackground  source={balao2Screen2}
              resizeMode="cover" style={styles.imgBalao2Screen2}
            >
              <Text style={styles.text2Screen2}>{POST_OPERATIVE_STRINGS.secondScreen.text2}</Text>
        </ImageBackground>
        
        </View>
    );
  }

  return(
    <>
      {screen === 1 ? 
        <FirstScreen /> : <SecondScreen />}
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
          {screen === 2 ? 
          <View style={{width: '45%'}}>
            <Button title="Ir para o Menu" isOutline onPress={() => navigation.navigate("Menu")}></Button>
          </View>  : 
          <View style={{width: '45%'}}>
            <Button title="Próximo" isOutline onPress={() => screenUp()}></Button>
          </View>
        }
        </View>
      </View>
      }
      </>
  )
}