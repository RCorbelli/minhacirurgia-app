import React, {useState} from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { Button } from '../../../components/Button';
import { Header } from '../../../components/Header';
import { SURGERY_CENTER_STRINGS } from '../../../config/strings';
import { theme } from '../../../global/styles/theme';
import {styles} from './styles';
import balaoNovo4 from '../../../images/baloes/novo-balao4.png';
import balaoNovo5 from '../../../images/baloes/novo-balao5.png';
import balaoNovo1 from '../../../images/baloes/novo-balao1.png';
import balaoNovo2 from '../../../images/baloes/novo-balao2.png';
import balaoNovo3 from '../../../images/baloes/novo-balao3.png';
import balaoNovo6 from '../../../images/baloes/novo-balao6.png';
import balaoNovo7 from '../../../images/baloes/novo-balao7.png';
import claudia from '../../../images/personas/claudia.png';
import carlos from '../../../images/personas/carlos.png';
import gleyce from '../../../images/personas/gleyce.png';
import quadro from '../../../images/baloes/quadroazul.png';
import { SpeechTexts } from '../../../components/SpeechText';
import { stopSpeech } from '../../../utils';
import WebView from 'react-native-webview';
import { postScreenAccess } from '../../../utils/reqMethods';
import {useAuth} from '../../../hooks/auth';
import { IMAGES_CENTRO_CIRURGICO } from '../../../config/images';
export function SurgeryCenter({navigation}){
  const [screen, setScreen] = useState(1);
  const {user} = useAuth();
  const [btnVoltar, setBtnVoltar] = useState(false);
  const SURGERY_CENTER_TEXTS1 = SURGERY_CENTER_STRINGS.firstScreen.text1 + SURGERY_CENTER_STRINGS.firstScreen.text2;
  const SURGERY_CENTER_TEXTS2 = SURGERY_CENTER_STRINGS.secondScreen.text1 + SURGERY_CENTER_STRINGS.secondScreen.text2 + SURGERY_CENTER_STRINGS.secondScreen.text3;
  const SURGERY_CENTER_TEXTS3 = SURGERY_CENTER_STRINGS.thirdScreen.text1 + SURGERY_CENTER_STRINGS.thirdScreen.text2;
  const SURGERY_CENTER_TEXTS4 = SURGERY_CENTER_STRINGS.fourthScreen.text1 + SURGERY_CENTER_STRINGS.fourthScreen.text2;
  const SURGERY_CENTER_TEXTS5 = SURGERY_CENTER_STRINGS.fiveScreen.text1 + SURGERY_CENTER_STRINGS.fiveScreen.text2;

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
    postScreenAccess(55, user.id);
    return(
      <View style={styles.content}>
        <SpeechTexts text={SURGERY_CENTER_TEXTS1} color="#333" customStyle={styles.buttonSpeech} />
        {/* <Image style={styles.imgBalao} source={balao} /> */}
        <ImageBackground  source={balaoNovo4}
              resizeMode="cover" style={styles.imgBalao1Screen1}
            >
              <Text style={styles.text1Screen1}>{SURGERY_CENTER_STRINGS.firstScreen.text1}</Text>
        </ImageBackground>
        <Image style={styles.imgScreen1} source={claudia} />
        <ImageBackground  source={quadro}
              resizeMode="cover" style={styles.cardScreen1}
            >
              <Text style={styles.text2Screen1}>{SURGERY_CENTER_STRINGS.firstScreen.text2}</Text>
        </ImageBackground>
      </View>
    )
  }

  function SecondScreen(){
    postScreenAccess(56, user.id);
    return(
        <View style={styles.contentBlue}>
          <SpeechTexts text={SURGERY_CENTER_TEXTS2} color="#fff" customStyle={styles.buttonSpeech} />
          {/* <Image style={styles.imgBalao} source={balao} /> */}
          <ImageBackground  source={balaoNovo4}
                resizeMode="cover" style={styles.imgBalao1Screen2}
              >
                <Text style={styles.text1Screen2}>{SURGERY_CENTER_STRINGS.secondScreen.text1}</Text>
          </ImageBackground>
          <Image style={styles.imgScreen2} source={carlos} />
          <ImageBackground  source={balaoNovo5}
                resizeMode="cover" style={styles.imgBalao2Screen2}
              >
                <Text style={styles.text2Screen2}>{SURGERY_CENTER_STRINGS.secondScreen.text2}</Text>
          </ImageBackground>
          <View style={styles.cardScreen2}
          >
                <Text style={styles.textCardScreen2}>{SURGERY_CENTER_STRINGS.secondScreen.text3}</Text>
          </View>
        </View>
    )
  }

  function ThirdScreen(){
    postScreenAccess(57, user.id);
    return(
        <View style={styles.contentBlue}>
          <SpeechTexts text={SURGERY_CENTER_TEXTS3} color="#fff" customStyle={styles.buttonSpeech} />
          {/* <Image style={styles.imgBalao} source={balao} /> */}
          <ImageBackground  source={balaoNovo6}
                resizeMode="cover" style={styles.imgBalao1Screen3}
              >
                <Text style={styles.text1Screen3}>{SURGERY_CENTER_STRINGS.thirdScreen.text1}</Text>
          </ImageBackground>
          <Image style={styles.imgScreen3} source={gleyce} />
          <ImageBackground  source={balaoNovo3}
                resizeMode="cover" style={styles.imgBalao2Screen3}
              >
                <Text style={styles.text2Screen3}>{SURGERY_CENTER_STRINGS.thirdScreen.text2}</Text>
          </ImageBackground>
          <TouchableOpacity onPress={() => navigation.navigate("Swiper", {images: IMAGES_CENTRO_CIRURGICO, headerTitle: 'Centro Cirúrgico'})} style={styles.cardScreen3}
          >
                <Text style={styles.textCardScreen3}>{"Clique aqui e veja imagens sobre o centro cirurgico."}</Text>
          </TouchableOpacity>
        </View>
    )
  }

  function FourthScreen(){
    postScreenAccess(58, user.id);
    return(
        <View style={styles.contentBlue}>
          <SpeechTexts text={SURGERY_CENTER_TEXTS4} color="#fff" customStyle={styles.buttonSpeech} />
          {/* <Image style={styles.imgBalao} source={balao} /> */}
          <ImageBackground  source={balaoNovo3}
                resizeMode="cover" style={styles.imgBalao2Screen4}
              >
                <Text style={styles.text2Screen4}>{SURGERY_CENTER_STRINGS.fourthScreen.text1}</Text>
          </ImageBackground>
          <Image style={styles.imgScreen4} source={gleyce} />
          <ImageBackground  source={balaoNovo6}
                resizeMode="cover" style={styles.imgBalao1Screen4}
              >
                <Text style={styles.text1Screen4}>{SURGERY_CENTER_STRINGS.fourthScreen.text2}</Text>
          </ImageBackground>
          {/* <TouchableOpacity onPress={() => navigation.navigate("Swiper")} style={styles.cardScreen4}
          >
                <Text style={styles.textCardScreen4}>{"Clique aqui e veja imagens sobre o centro cirurgico."}</Text>
          </TouchableOpacity> */}
        </View>
    )
  }

  function FiveScreen(){
    return(
      <View style={styles.contentFiveScreen}>
        <Text style={styles.textScreen5}>{"Não deixe de ver o vídeo abaixo sobre o centro cirurgico."}</Text>
        <View style={styles.movie}>
              <WebView
                  style={styles.webView}
                  javaScriptEnabled={true}
                  resizeMode="cover"
                  source={{uri: SURGERY_CENTER_STRINGS.fiveScreen.uriMovie}}
              />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("A história de Antônio")} style={{marginTop: 20, borderWidth: 1, paddingHorizontal: 4, borderColor: theme.colors.backgroud}}
          >
            <Text style={styles.textScreen5}>{"Clique aqui para conhecer a trajetória cirurgica de Antônio e seus familiares."}</Text>
          </TouchableOpacity>
        </View>
    );
  }
  return(
    <>
    <Header 
      color={theme.colors.backgroud} 
      navigation={navigation}
      title={"Centro Cirurgico"}
      />
    {screen === 1 ? 
      <FirstScreen />: screen === 2 ? 
      <SecondScreen /> : screen === 3 ? 
      <ThirdScreen />: <FourthScreen />}
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
          <Button title="Menu Anterior" isOutline onPress={() => navigation.navigate("Momento da Cirurgia")}></Button>
        </View>  : 
        <View style={{width: '45%'}}>
          <Button title="Próximo" isOutline onPress={() => screenUp()}></Button>
        </View>
      }
      </View>
    </View>
    }
  </>
  );
}