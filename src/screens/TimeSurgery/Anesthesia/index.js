import React, {useState} from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { Button } from '../../../components/Button';
import { SpeechTexts } from '../../../components/SpeechText';
import { stopSpeech } from '../../../utils';
import { ANESTHESIA_STRINGS } from '../../../config/strings';
import { IMAGES_ANESTHESIA_1 } from '../../../config/images';
import balao1Screen1 from '../../../images/baloes/balaoLuciana1.png';
import balao2Screen1 from '../../../images/baloes/balaoLuciana2.png';
import balao3Screen1 from '../../../images/baloes/balaoLuciana3.png';
import balaoNovo1 from '../../../images/baloes/novo-balao1.png';
import balaoNovo2 from '../../../images/baloes/novo-balao2.png';
import balaoNovo3 from '../../../images/baloes/novo-balao3.png';
import balaoNovo4 from '../../../images/baloes/novo-balao4.png';
import balaoNovo5 from '../../../images/baloes/novo-balao5.png';
import balaoRight from '../../../images/baloes/balaoright.png';
import anaImg from '../../../images/personas/anaAzul.png';
import lucianaImg from '../../../images/personas/luciana1.png';
import batePapo from '../../../images/bate-papo.png';
import {styles} from './styles';
import { Header } from '../../../components/Header';
import { theme } from '../../../global/styles/theme';
import { postScreenAccess } from '../../../utils/reqMethods';
import {useAuth} from '../../../hooks/auth';
export function Anesthesia({navigation}){
  const [screen, setScreen] = useState(1);
  const {user} = useAuth();
  const [btnVoltar, setBtnVoltar] = useState(false);
  const ANESTHESIA_TEXTS_SCREEN1 = ANESTHESIA_STRINGS.firstScreen.text1 + ANESTHESIA_STRINGS.firstScreen.text2 + ANESTHESIA_STRINGS.firstScreen.text2;
  const ANESTHESIA_TEXTS_SCREEN2 = ANESTHESIA_STRINGS.secondScreen.text1 + ANESTHESIA_STRINGS.secondScreen.text2;
  const ANESTHESIA_TEXTS_SCREEN3 = ANESTHESIA_STRINGS.thirdScreen.text1 + ANESTHESIA_STRINGS.thirdScreen.text2;
  const ANESTHESIA_TEXTS_SCREEN4 = "Clique nos botões abaixo para conhecer mais sobre cada tipo de anestesia.";
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
    postScreenAccess(48, user.id);
    return(
        <View style={styles.content}>
          <SpeechTexts text={ANESTHESIA_TEXTS_SCREEN1} color="#333" customStyle={styles.buttonSpeech} />
          {/* <Image style={styles.imgBalao} source={balao} /> */}
          <ImageBackground  source={balao1Screen1}
                resizeMode="cover" style={styles.imgBalao1Screen1}
              >
                <Text style={styles.text1Screen1}>{ANESTHESIA_STRINGS.firstScreen.text1}</Text>
          </ImageBackground>
          <Image style={styles.imgScreen1} source={anaImg} />
          <ImageBackground  source={balao2Screen1}
                resizeMode="cover" style={styles.imgBalao2Screen1}
              >
                <Text style={styles.text2Screen1}>{ANESTHESIA_STRINGS.firstScreen.text2}</Text>
          </ImageBackground>
          <ImageBackground  source={balao3Screen1}
                resizeMode="cover" style={styles.imgBalao3Screen1}
              >
                <Text style={styles.text3Screen1}>{ANESTHESIA_STRINGS.firstScreen.text3}</Text>
          </ImageBackground>
        </View>
    )
  }

  function SecondScreen(){
    postScreenAccess(49, user.id);
    return(
        <View style={styles.contentBlue}>
          <SpeechTexts text={ANESTHESIA_TEXTS_SCREEN2} color="#fff" customStyle={styles.buttonSpeech} />
          {/* <Image style={styles.imgBalao} source={balao} /> */}
          <ImageBackground  source={balaoNovo2}
                resizeMode="cover" style={styles.imgBalao1Screen2}
              >
                <Text style={styles.text1Screen2}>{ANESTHESIA_STRINGS.secondScreen.text1}</Text>
          </ImageBackground>
          <Image style={styles.imgScreen2} source={anaImg} />
          <Image style={styles.batePapo} source={batePapo} />
          <ImageBackground  source={balaoNovo3}
                resizeMode="cover" style={styles.imgBalao2Screen2}
              >
                <Text style={styles.text2Screen2}>{ANESTHESIA_STRINGS.secondScreen.text2}</Text>
          </ImageBackground>
        </View>
    )
  }

  function ThirdScreen(){
    postScreenAccess(50, user.id);
    return(
        <View style={styles.content}>
          <SpeechTexts text={ANESTHESIA_TEXTS_SCREEN3} color="#333" customStyle={styles.buttonSpeech} />
          {/* <Image style={styles.imgBalao} source={balao} /> */}
          <ImageBackground  source={balaoNovo1}
                resizeMode="cover" style={styles.imgBalao1Screen3}
              >
                <Text style={styles.text1Screen3}>{ANESTHESIA_STRINGS.thirdScreen.text1}</Text>
          </ImageBackground>
          <Image style={styles.imgScreen3} source={anaImg} />
          <View style={styles.imgBalao2Screen3}
          >
                <Text style={styles.text2Screen3}>{ANESTHESIA_STRINGS.thirdScreen.text2}</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Swiper", 
            {
              images: IMAGES_ANESTHESIA_1,
              headerTitle: 'Aparelhos de anestesia'
            })}>
            <Text style={styles.textButton}>Clique para visualizar os aparelhos</Text>
          </TouchableOpacity>
        </View>
    )
  }

  function FourthScreen(){
    postScreenAccess(51, user.id);
    return(
        <View style={styles.content}>
          <SpeechTexts text={ANESTHESIA_TEXTS_SCREEN4} color="#333" customStyle={styles.buttonSpeech} />
          {/* <Image style={styles.imgBalao} source={balao} /> */}
          <ImageBackground  source={balaoNovo1}
                resizeMode="cover" style={styles.imgBalao1Screen3}
              >
                <Text style={styles.text1Screen3}>{ANESTHESIA_TEXTS_SCREEN4}</Text>
          </ImageBackground>
          <Image style={styles.imgScreen3} source={anaImg} />
          <View style={styles.groupAnesthesia}>
            <TouchableOpacity style={styles.buttonTypeAnesthesia} onPress={() => setScreen(5)}>
              <Text style={styles.textButton}>Anestesia Geral</Text>
            </TouchableOpacity>
            <View style={{width: 10}}></View>
            <TouchableOpacity style={styles.buttonTypeAnesthesia} onPress={() => setScreen(6)}>
              <Text style={styles.textButton}>Anestesia Raqui-Peridual</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
  }

  function FourthScreen1(){
    postScreenAccess(52, user.id);
    return(
        <View style={styles.contentBlue}>
          <SpeechTexts text={ANESTHESIA_TEXTS_SCREEN3} color="#fff" customStyle={styles.buttonSpeech} />
          {/* <Image style={styles.imgBalao} source={balao} /> */}
          <ImageBackground  source={balaoNovo4}
                resizeMode="cover" style={styles.imgBalao1Screen4}
              >
                <Text style={styles.text1Screen4}>{ANESTHESIA_STRINGS.fourthScreen.text1}</Text>
          </ImageBackground>
          <Image style={styles.imgScreen4} source={lucianaImg} />
          <ImageBackground  source={balaoNovo5}
                resizeMode="cover" style={styles.imgBalao2Screen4}
              >
                <Text style={styles.text2Screen4}>{ANESTHESIA_STRINGS.fourthScreen.text2}</Text>
          </ImageBackground>
          <View style={styles.card}
          >
                <Text style={styles.textCardScreen4}>{ANESTHESIA_STRINGS.fourthScreen.text3}</Text>
          </View>
        </View>
    )
  }

  function FiveScreen(){
    postScreenAccess(53, user.id);
    return(
        <View style={styles.content}>
          <SpeechTexts text={ANESTHESIA_TEXTS_SCREEN3} color="#333" customStyle={styles.buttonSpeech} />
          {/* <Image style={styles.imgBalao} source={balao} /> */}
          <ImageBackground  source={balaoNovo5}
                resizeMode="cover" style={styles.imgBalao1Screen5}
              >
                <Text style={styles.text1Screen5}>{ANESTHESIA_STRINGS.fiveScreen.text1}</Text>
          </ImageBackground>
          <Image style={styles.imgScreen5} source={lucianaImg} />
          <View style={styles.cardScreen5}
          >
                <Text style={styles.textCardScreen5}>{ANESTHESIA_STRINGS.fiveScreen.text2}</Text>
          </View>
        </View>
    )
  }

  function SixthScreen(){
    postScreenAccess(54, user.id);
    return(
        <View style={styles.contentBlue}>
          <SpeechTexts text={ANESTHESIA_TEXTS_SCREEN3} color="#fff" customStyle={styles.buttonSpeech} />
          {/* <Image style={styles.imgBalao} source={balao} /> */}
          <ImageBackground  source={balaoNovo5}
                resizeMode="cover" style={styles.imgBalao1Screen6}
              >
                <Text style={styles.text1Screen6}>{ANESTHESIA_STRINGS.sixthScreen.text1}</Text>
          </ImageBackground>
          <Image style={styles.imgScreen6} source={lucianaImg} />
          <View style={styles.cardScreen6}
          >
                <Text style={styles.textCardScreen6}>{ANESTHESIA_STRINGS.sixthScreen.text2}</Text>
          </View>
        </View>
    )
  }

  return(
    <>
    <Header 
      color={theme.colors.backgroud} 
      navigation={navigation}
      title={ (screen === 5) ? "Anestesia Geral" : (screen === 6 || screen == 7) ? "Anestesia Raquidiana e Peridural" : "Anestesia"}
      />
    {screen === 1 ? 
      <FirstScreen /> : screen === 2 ? 
      <SecondScreen /> : screen === 3 ?
      <ThirdScreen /> : screen === 4 ?
      <FourthScreen /> : screen === 5 ? 
      <FourthScreen1 /> : screen === 6 ?
      <FiveScreen /> : <SixthScreen />}
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
        {screen === 7 ? 
        <View style={{width: '45%'}}>
          <Button title="Menu Anterior" isOutline onPress={() => navigation.navigate("Momento da Cirurgia")}></Button>
        </View>  : screen === 4 ? 
        <View style={{width: '45%'}}>
          <Button title="Anestesia Geral" isOutline onPress={() => screenUp()}></Button>
        </View> :
        screen === 5 ?
        <View style={{width: '45%'}}>
          <Button title="Anestesia Raqui" isOutline onPress={() => screenUp()}></Button>
        </View> :
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