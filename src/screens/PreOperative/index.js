import React, { useState } from "react";
import { Modal, Pressable, Image, ImageBackground, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Background } from "../../components/Background";
import { styles } from "./styles";
import balao3 from '../../images/baloes/balao3.png';
import balao4 from '../../images/baloes/balao4.png';
import balao6 from '../../images/baloes/balao6.png';
import balaoRight from '../../images/baloes/balaoright.png';
import balaoLeft from '../../images/baloes/balaoleft2.png';
import balaoLuciana1 from '../../images/baloes/balaoLuciana1.png';
import anaImg from '../../images/personas/ana2.png';
import anaInvertida from '../../images/personas/ana1-inverida.png';
import carlos from '../../images/personas/carlos.png';
import exercicio from '../../images/exercicio.png';
import alimento from '../../images/alimento.png';
import maconha from '../../images/maconha.png';
import bebida from '../../images/bebidas.png';
import cigarro from '../../images/cigarro.png';
import remedio from '../../images/remedio.png';
import seringa from '../../images/seringa.png';
import cha from '../../images/cha.png';
import quadroAzul from '../../images/baloes/quadroazul.png';
import balaoScreen6 from '../../images/baloes/balaoScreen6.png';
import xampu from '../../images/xampu.png';
import pijama from '../../images/pijama.png';
import meia from '../../images/meia.png';
import prancheta from '../../images/prancheta.png';
import banheira from '../../images/banheira.png';
import gilete from '../../images/gilete.png';
import escova from '../../images/escova.png';
import depilar from '../../images/depilar.png';
import brinco from '../../images/brinco.png';
import terco from '../../images/terco.png';
import alianca from '../../images/alianca.png';
import dentadura from '../../images/dentadura.png';
import urinar from '../../images/urinar.png';
import dorBarriga from '../../images/dorBarriga.png';
import dorPeito from '../../images/dorPeito.png';
import espirro from '../../images/espirro.png';
import febre from '../../images/febre.png';
import sono from '../../images/sono.png';
import tontura from '../../images/tontura.png';
import tosse from '../../images/tosse.png';
import vomito from '../../images/vomito.png';
import { Button } from "../../components/Button";
import { PRE_OPERATIVE_STRINGS } from "../../config/strings";
import { stopSpeech } from "../../utils";
import { SpeechTexts } from "../../components/SpeechText";
import WebView from "react-native-webview";
import { theme } from "../../global/styles/theme";
import { postScreenAccess } from '../../utils/reqMethods';
import {useAuth} from '../../hooks/auth';
export function PreOperative({navigation}){
  const Tab = createMaterialTopTabNavigator();
  const [btnVoltarAntes, setBtnVoltarAntes] = useState(false);
  const [btnVoltarVespera, setBtnVoltarVespera] = useState(false);
  const [screenAntes, setScreenAntes] = useState(2);
  const [screenVespera, setScreenVespera] = useState(6);
  const [isOpen, setIsOpen] = useState(true);
  const {user} = useAuth();

  const PRE_OPERATIVE_TEXT1 = PRE_OPERATIVE_STRINGS.firstScreen.text1 + PRE_OPERATIVE_STRINGS.firstScreen.text2;
  const PRE_OPERATIVE_TEXT2 = PRE_OPERATIVE_STRINGS.secondScreen.text1 + PRE_OPERATIVE_STRINGS.secondScreen.text2;
  const PRE_OPERATIVE_TEXT3 = PRE_OPERATIVE_STRINGS.thirdScreen.text1;
  const PRE_OPERATIVE_TEXT4 = PRE_OPERATIVE_STRINGS.fourthScreen.text1 + PRE_OPERATIVE_STRINGS.fourthScreen.text2;
  const PRE_OPERATIVE_TEXT5 = PRE_OPERATIVE_STRINGS.fiveScreen.text1 + PRE_OPERATIVE_STRINGS.fiveScreen.text2;
  const PRE_OPERATIVE_TEXT6 = PRE_OPERATIVE_STRINGS.sixthScreen.text1 + PRE_OPERATIVE_STRINGS.sixthScreen.text2;
  const PRE_OPERATIVE_TEXT7 = PRE_OPERATIVE_STRINGS.seventhScreen.text1 + PRE_OPERATIVE_STRINGS.seventhScreen.text2 + PRE_OPERATIVE_STRINGS.seventhScreen.card;
  const PRE_OPERATIVE_TEXT8 = PRE_OPERATIVE_STRINGS.octaveScreen.text1 + PRE_OPERATIVE_STRINGS.octaveScreen.text2;
  const PRE_OPERATIVE_TEXT9 = PRE_OPERATIVE_STRINGS.ninthScreen.text1 + PRE_OPERATIVE_STRINGS.ninthScreen.text2;
  const PRE_OPERATIVE_TEXT11 = PRE_OPERATIVE_STRINGS.eleventhScreen.text1 + "." + PRE_OPERATIVE_STRINGS.eleventhScreen.text2;
  const PRE_OPERATIVE_TEXT12 = PRE_OPERATIVE_STRINGS.twelfthScreen.text1 + "." + PRE_OPERATIVE_STRINGS.twelfthScreen.card;

  function FirstScreen(){
    postScreenAccess(26, user.id);
    return(
      <View style={styles.contentModal}>
        <SpeechTexts text={PRE_OPERATIVE_TEXT1} color="#fff" customStyle={styles.buttonSpeech} />
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <View style={styles.centeredview}>
      <ImageBackground  source={balao3}
            resizeMode="cover" style={styles.imgBalaoModal}
          >
            <Text style={styles.text}>{PRE_OPERATIVE_STRINGS.firstScreen.text1}</Text>
      </ImageBackground>
      <ImageBackground  source={balao4}
            resizeMode="cover" style={styles.imgBalao2Modal}
          >
            <Text style={styles.text2}>{PRE_OPERATIVE_STRINGS.firstScreen.text2}</Text>
      </ImageBackground>
      <Image style={styles.imgModal} source={anaImg} />
      <Button title="Continuar" isOutline onPress={() => setIsOpen(false)}></Button>
      </View>
      </View>
    );
  }

  function SecondScreen(){
    postScreenAccess(27, user.id);
    return(
      <View style={styles.content}>
        <SpeechTexts text={PRE_OPERATIVE_TEXT2} color="#333" customStyle={styles.buttonSpeech} />
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <ImageBackground  source={balaoRight}
            resizeMode="cover" style={styles.imgBalaoRight}
          >
            <Text style={styles.text1SecondScreen}>{PRE_OPERATIVE_STRINGS.secondScreen.text1}</Text>
      </ImageBackground>
      <Image style={styles.exercicio} source={exercicio} />
      <ImageBackground  source={balaoLeft}
            resizeMode="cover" style={styles.imgBalaoLeft}
          >
            <Text style={styles.text2SecondScreen}>{PRE_OPERATIVE_STRINGS.secondScreen.text2}</Text>
      </ImageBackground>
      <Image style={styles.alimento} source={alimento} />
      <Image style={styles.imgScreen2} source={anaInvertida} />
      </View>
    );
  }

  function ThirdScreen(){
    postScreenAccess(28, user.id);
    return(
      <View style={styles.contentBlue}>
        <SpeechTexts text={PRE_OPERATIVE_TEXT3} color="#fff" customStyle={styles.buttonSpeech} />
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <ImageBackground  source={balao3}
            resizeMode="cover" style={styles.imgAntesBalaoScreen2}
          >
            <Text style={styles.textAntesScreen2}>{PRE_OPERATIVE_STRINGS.thirdScreen.text1}</Text>
      </ImageBackground>
      <Image style={styles.imgBebida} source={bebida} />
      <Image style={styles.imgCigarro} source={cigarro} />
      <Image style={styles.imgMaconha} source={maconha} />
      <Image style={styles.imgAntesScreen2} source={anaImg} />
      </View>
    );
  }

  function FourthScreen(){
    postScreenAccess(29, user.id);
    return(
      <View style={styles.content}>
        <SpeechTexts text={PRE_OPERATIVE_TEXT4} color="#333" customStyle={styles.buttonSpeech} />
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      
      <ImageBackground  source={balao4}
            resizeMode="cover" style={styles.imgAntesBalao1Screen3}
          >
            <Text style={styles.text}>{PRE_OPERATIVE_STRINGS.fourthScreen.text1}</Text>
      </ImageBackground>
      <ImageBackground  source={balao6}
            resizeMode="cover" style={styles.imgAntesBalao2Screen3}
          >
            <Text style={styles.text2AntesScreen3}>{PRE_OPERATIVE_STRINGS.fourthScreen.text2}</Text>
      </ImageBackground>
      <Image style={styles.imgAntesScreen3} source={anaImg} />
      <View style={styles.groupImgRemedio}>
        <Image style={styles.imgRemedio} source={remedio} />
        <Image style={styles.imgSeringa} source={seringa} />
        <Image style={styles.imgSeringa} source={cha} />
      </View>
      </View>
    );
  }

  function FiveScreen(){
    postScreenAccess(30, user.id);
    return(
      <View style={styles.content}>
        <SpeechTexts text={PRE_OPERATIVE_TEXT5} color="#333" customStyle={styles.buttonSpeech} />
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <ImageBackground  source={balaoLeft}
            resizeMode="cover" style={styles.balaoScreen5}
          >
            <Text style={styles.text1Screen5}>{PRE_OPERATIVE_STRINGS.fiveScreen.text1}</Text>
      </ImageBackground>
      <Image style={styles.imgScreen5} source={anaInvertida} />
      <View style={styles.cardScreen5}
          >
            <Text style={styles.text2Screen5}>{PRE_OPERATIVE_STRINGS.fiveScreen.text2}</Text>
      </View>
      {/* <Image style={styles.imgCalendar} source={cha} /> */}
      </View>
    );
  }

  function SixthScreen(){
    postScreenAccess(31, user.id);
    return(
      <View style={styles.content}>
        <SpeechTexts text={PRE_OPERATIVE_TEXT6} color="#333" customStyle={styles.buttonSpeech} />
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <ImageBackground  source={balaoScreen6}
            resizeMode="cover" style={styles.balaoScreen6}
          >
            <Text style={styles.text1Screen6}>{PRE_OPERATIVE_STRINGS.sixthScreen.text1}</Text>
      </ImageBackground>
      <Image style={styles.imgScreen6} source={anaImg} />
      <ImageBackground  source={quadroAzul}
            resizeMode="cover" style={styles.cardScreen6}
          >
            <Text style={styles.text2Screen6}>{PRE_OPERATIVE_STRINGS.sixthScreen.text2}</Text>
      </ImageBackground>
      <View style={styles.groupImgPijama}>
        <Image style={styles.imgXampu} source={xampu} />
        <Image style={styles.imgPijama} source={pijama} />
        <Image style={styles.imgPijama} source={meia} />
      </View>
      </View>
    );
  }

  function SeventhScreen(){
    postScreenAccess(32, user.id);
    return(
      <View style={styles.contentBlue}>
        <SpeechTexts text={PRE_OPERATIVE_TEXT7} color="#fff" customStyle={styles.buttonSpeech} />
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <ImageBackground  source={balaoRight}
            resizeMode="cover" style={styles.imgBalao1Screen7}
          >
            <Text style={styles.text1Screen7}>{PRE_OPERATIVE_STRINGS.seventhScreen.text1}</Text>
      </ImageBackground>
      {/* <Image style={styles.exercicio} source={prancheta} /> */}
      <ImageBackground  source={balaoLeft}
            resizeMode="cover" style={styles.imgBalao2Screen7}
          >
            <Text style={styles.text1Screen7}>{PRE_OPERATIVE_STRINGS.seventhScreen.text2}</Text>
      </ImageBackground>
      <View style={styles.cardScreen7}>
        <Text style={styles.textCardScreen7}>{PRE_OPERATIVE_STRINGS.seventhScreen.card}</Text>
      </View>
      <Image style={styles.imgScreen7} source={anaInvertida} />
      </View>
    );
  }

  function OctaveScreen(){
    postScreenAccess(33, user.id);
    return(
      <View style={styles.content}>
        <SpeechTexts text={PRE_OPERATIVE_TEXT8} color="#333" customStyle={styles.buttonSpeech} />
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <ImageBackground  source={balao3}
            resizeMode="cover" style={styles.imgBalao1Screen8}
          >
            <Text style={styles.text1Screen8}>{PRE_OPERATIVE_STRINGS.octaveScreen.text1}</Text>
      </ImageBackground>
      <ImageBackground  source={balao4}
            resizeMode="cover" style={styles.imgBalao2Screen8}
          >
            <Text style={styles.text2Screen8}>{PRE_OPERATIVE_STRINGS.octaveScreen.text2}</Text>
      </ImageBackground>
      <Image style={styles.imgScreen8} source={anaImg} />
      <Image style={styles.banheira} source={banheira} />
      </View>
    );
  }

  function NinthScreen(){
    postScreenAccess(34, user.id);
    return(
      <View style={styles.contentBlue}>
        <SpeechTexts text={PRE_OPERATIVE_TEXT9} color="#333" customStyle={styles.buttonSpeech} />
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <ImageBackground  source={balaoRight}
            resizeMode="cover" style={styles.imgBalao1Screen9}
          >
            <Text style={styles.text1Screen9}>{PRE_OPERATIVE_STRINGS.ninthScreen.text1}</Text>
      </ImageBackground>
      <Image style={styles.escova} source={escova} />
      <ImageBackground  source={balaoLeft}
            resizeMode="cover" style={styles.imgBalao2Screen9}
          >
            <Text style={styles.text2Screen9}>{PRE_OPERATIVE_STRINGS.ninthScreen.text2}</Text>
      </ImageBackground>
      <Image style={styles.imgScreen9} source={anaInvertida} />
      <Image style={styles.depilar} source={depilar} />
      <Image style={styles.gilete} source={gilete} />
      </View>
    );
  }

  function TenthScreen(){
    postScreenAccess(35, user.id);
    return(
      <View style={styles.content}>
        <SpeechTexts text={PRE_OPERATIVE_STRINGS.tenthScreen.text1} color="#333" customStyle={styles.buttonSpeech} />
      <ImageBackground  source={balao3}
            resizeMode="cover" style={styles.imgBalao1Screen8}
          >
            <Text style={styles.text1Screen10}>{PRE_OPERATIVE_STRINGS.tenthScreen.text1}</Text>
      </ImageBackground>
      <Image style={styles.img} source={anaImg} />
      <View style={styles.groupImgBrinco}>
        <Image style={styles.imgAlianca} source={alianca} />
        <Image style={styles.imgBrinco} source={brinco} />
      </View>
      <View style={styles.groupImgTerco}>
        <Image style={styles.imgTerco} source={terco} />
        <Image style={styles.imgDentadura} source={dentadura} />
      </View>
      </View>
    );
  }
  function EleventhScreen(){
    postScreenAccess(36, user.id);
    return(
      <View style={styles.contentBlue}>
        <SpeechTexts text={PRE_OPERATIVE_TEXT11} color="#fff" customStyle={styles.buttonSpeech} />
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <ImageBackground  source={balaoRight}
            resizeMode="cover" style={styles.imgBalao1Screen11}
          >
            <Text style={styles.text1Screen11}>{PRE_OPERATIVE_STRINGS.eleventhScreen.text1}</Text>
      </ImageBackground>
      <Image style={styles.urinar} source={urinar} />
      <ImageBackground  source={balaoLeft}
            resizeMode="cover" style={styles.imgBalao2Screen11}
          >
            <Text style={styles.text2Screen11}>{PRE_OPERATIVE_STRINGS.eleventhScreen.text2}</Text>
      </ImageBackground>
      <Image style={styles.imgScreen11} source={anaInvertida} />
      </View>
    );
  }

  function TwelfthScreen(){
    postScreenAccess(37, user.id);
    return(
      <View style={styles.content}>
        <SpeechTexts text={PRE_OPERATIVE_TEXT12} color="#333" customStyle={styles.buttonSpeech} />
      {/* <Image style={styles.imgBalao} source={balao} /> */}
      <ImageBackground  source={balaoLuciana1}
            resizeMode="cover" style={styles.balaoScreen12}
          >
            <Text style={styles.screen12Text1}>{PRE_OPERATIVE_STRINGS.twelfthScreen.text1}</Text>
      </ImageBackground>
      <Image style={styles.imgScreen12} source={anaInvertida} />
      <View style={styles.screen12Group1}>
        <Image style={styles.tosse} source={tosse} />
        <Image style={styles.vomito} source={vomito} />
        <Image style={styles.dorBarriga} source={dorBarriga} />
        <Image style={styles.sono} source={sono} />
      </View>
      <View style={styles.screen12Group2}>
        <Image style={styles.espirro} source={espirro} />
        <Image style={styles.febre} source={febre} />
        <Image style={styles.dorPeito} source={dorPeito} />
        <Image style={styles.tontura} source={tontura} />
      </View>
      <View style={styles.screen12CardAlert}>
        <Text style={styles.screen12TextCard}>{PRE_OPERATIVE_STRINGS.twelfthScreen.card}</Text>
      </View>
      </View> 
    );
  }

  function ThirteenthScreen(){
    postScreenAccess(38, user.id);
    return(
    <View style={styles.contentDicas}>
      <Text style={styles.textHeader2}>{PRE_OPERATIVE_STRINGS.thirteenthScreen.text1}</Text>
     <View style={{width: 350, height: 300, backgroundColor: "#333", borderRadius: 20}}>
     <WebView
              style={{flex:1}}
              javaScriptEnabled={true}
              source={{uri: PRE_OPERATIVE_STRINGS.thirteenthScreen.uriMovie}}
          />
     </View>
    </View>
    );
  }

  function screenAntesUp(){
    if(screenAntes === 2){
      setBtnVoltarAntes(true);
      setScreenAntes(screenAntes + 1);
      stopSpeech();
    }else{
      setScreenAntes(screenAntes + 1);
      stopSpeech();
    }
  }

  function screenAntesDown(){
    if(screenAntes === 3){
      setScreenAntes(screenAntes - 1);
      setBtnVoltarAntes(false);
      stopSpeech();
    }else{
      setScreenAntes(screenAntes-1);
      stopSpeech();
    }
  }

  function screenVesperaUp(){
    if(screenVespera === 6){
      setBtnVoltarVespera(true);
      setScreenVespera(screenVespera + 1);
      stopSpeech();
    }else{
      setScreenVespera(screenVespera + 1);
      stopSpeech();
    }
  }

  function screenVesperaDown(){
    if(screenVespera === 7){
      setScreenVespera(screenVespera - 1);
      setBtnVoltarVespera(false);
      stopSpeech();
    }else{
      setScreenVespera(screenVespera-1);
      stopSpeech();
    }
  }

  function AntesDaCirurgia(){
    return(
      <>
        {screenAntes === 2?  
          <SecondScreen />  : screenAntes === 3?
          <ThirdScreen /> : screenAntes === 4 ? 
          <FourthScreen /> :
          <FiveScreen />  }
      {!btnVoltarAntes ? 
      <View style={styles.footer}>
        <View style={{paddingHorizontal: 100}}>
          <Button title="Próximo" isOutline onPress={() => screenAntesUp()}></Button>
        </View>
      </View>  : 
      <View style={styles.footer}>
        <View style={{width: '100%', flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20}}>
          <View style={{width: '45%'}}>
            <Button title="Voltar" isOutline onPress={() => screenAntesDown()}></Button>
          </View>
          {screenAntes === 5 ? 
          <View style={{width: '45%'}}>
            <Button title="Próximo" isOutline onPress={() => navigation.navigate('Véspera da cirurgia')}></Button>
          </View>  : 
          <View style={{width: '45%'}}>
            <Button title="Próximo" isOutline onPress={() => screenAntesUp()}></Button>
          </View>
        }
        </View>
      </View>
      }
      </>
    )
  }

  function VesperaDaCirurgia(){
    return(
      <>
      {screenVespera === 6? 
        <SixthScreen /> : screenVespera === 7 ?
        <SeventhScreen /> : screenVespera === 8 ?
        <OctaveScreen /> : screenVespera === 9 ?
        <NinthScreen /> : screenVespera === 10 ?
        <TenthScreen /> : screenVespera === 11 ?
        <EleventhScreen /> : screenVespera === 12 ?
        <TwelfthScreen /> : 
        <ThirteenthScreen />}
      {!btnVoltarVespera ? 
      <View style={styles.footer}>
        <View style={{paddingHorizontal: 100}}>
          <Button title="Próximo" isOutline onPress={() => screenVesperaUp()}></Button>
        </View>
      </View>  : 
      <View style={styles.footer}>
        <View style={{width: '100%', flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20}}>
          <View style={{width: '45%'}}>
            <Button title="Voltar" isOutline onPress={() => screenVesperaDown()}></Button>
          </View>
          {screenVespera === 13 ? 
          <View style={{width: '45%'}}>
            <Button title="Ir para o Menu" isOutline onPress={() => navigation.navigate('Menu')}></Button>
          </View>  : 
          <View style={{width: '45%'}}>
            <Button title="Próximo" isOutline onPress={() => screenVesperaUp()}></Button>
          </View>
        }
        </View>
      </View>
      }
      </>
    )
  }

  return(
    <Background>
      {/* <View style={styles.header}>
      {screen < 6? 
        <Text style={styles.textHeader}>Dias antes da cirurgia</Text>:
        <Text style={styles.textHeader}>Véspera da cirurgia</Text>}
      </View> */}
      <Tab.Navigator screenOptions={{
                                  tabBarLabelStyle: { fontFamily: 
                                                      theme.fonts.Roboto500, 
                                                      fontSize: 14, 
                                                      color: theme.colors.backgroud },
                                  tabBarIndicatorStyle:{backgroundColor: theme.colors.line, height: 3},
                                }}>
        <Tab.Screen name="Antes da cirurgia" component={AntesDaCirurgia} />
        <Tab.Screen name="Véspera da cirurgia" component={VesperaDaCirurgia} />
      </Tab.Navigator>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setIsOpen(!isOpen);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FirstScreen />
          </View>
        </View>
      </Modal>
    </Background>
  )
}