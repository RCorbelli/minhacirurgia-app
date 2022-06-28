import React, { useEffect, useState } from "react";
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from "../Button/index.js";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Feather';
import img1 from '../../images/tutorial-1.png';
import img2 from '../../images/tutorial-2.png';
import {styles} from './styles.js';
import { theme } from "../../global/styles/theme.js";

export function Tuturial(){
  const [visible, setVisible] = useState(false);
  const [notVisibleReturn, setNotVisibleReturn] = useState(false);

  async function getVisibleModal(){
    const isVisibleStorage = await AsyncStorage.getItem('IS_VISIBLE_TUTORIAL');
    if (!isVisibleStorage) {
      setVisible(true);
    }else{
      setVisible(false);
    }
  };

  async function handleGoApp(){
    if(notVisibleReturn){
      await AsyncStorage.setItem('IS_VISIBLE_TUTORIAL', JSON.stringify(true));
      setVisible(false);
    }else{
      setVisible(false);
    }
  }
  useEffect(() => {
    getVisibleModal();
  }, []);

  function FirstInfo(){
    return(
      <View style={styles.contentInfoScreen}>
        <Text style={styles.textInfo}>Caso deseje escutar o texto que se encontra nas telas do aplicativo, utilize o botão: </Text>
        <Icon name='volume-2' color={theme.colors.backgroud} size={50} style={{ marginRight: 10}} />
        <Text style={styles.textInfo}>Para pausar o audio, utilize este botão: </Text>
        <Icon name='volume-x' color={theme.colors.backgroud} size={50} style={{ marginRight: 10}} />
      </View>
    );
  };

  function SecondInfo(){
    return(
      <View style={styles.contentInfoScreen}>
        <Text style={styles.textInfo}>Dentro de cada tema, você encontrará os botões a seguir: </Text>
        <Text style={styles.textInfo}>Avançar para próxima página: </Text>
        <Button title="Próximo" isOutline onPress={() => {}}></Button>
        <Text style={styles.textInfo}>Voltar para página anterior: </Text>
        <Button title="Voltar" isOutline onPress={() => {}}></Button>
        <Text style={styles.textInfo}>Voltar ao menu do tema que está lendo: </Text>
        <Button title="Ir para o Menu" isOutline onPress={() => {}}></Button>
      </View>
    );
  };

  function ThirdInfo(){
    return(
      <View style={styles.contentInfoScreen}>
        <Text style={styles.textInfo}>No menu "Minhas informações" você poderá cadastrar a data de sua cirurgia, que será utilizada para lhe enviar notificações com informações sobre as ações que devem ser tomadas. </Text>
        <Image style={styles.img1} source={img1} />
      </View>
    );
  };

  function FourthInfo(){
    return(
      <View style={styles.contentInfoScreen}>
        <Text style={styles.textInfo}>Caso deseje desconectar sua conta de usuário do aplicativo, clique no botão a seguir, que encontra-se no menu "Minhas informações". </Text>
        <Image style={styles.img2} source={img2} />
      </View>
    );
  };

  function FiveInfo(){
    return(
      <View style={styles.contentInfoScreen}>
        <Text style={styles.textInfo}>Após escolher algum tema, caso queira voltar ao menu principal utilize o botão no canto superior esquerdo de seu app. </Text>
        <Icon name='arrow-left' color={theme.colors.backgroud} size={50} style={{ marginRight: 10}} />
      </View>
    );
  };
  return (
    <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
              setVisible(!visible); 
            }}
          >
        <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>Seja bem-vindo.</Text>
              <Text style={styles.subTitle}>Aqui vão algumas dicas para aproveitar melhor o app.</Text>  
            </View>
            <View style={styles.content}>
              <Swiper style={styles.wrapper} showsButtons={false}>
                <FirstInfo />
                <SecondInfo />
                <ThirdInfo />
                <FourthInfo />
                <FiveInfo />
              </Swiper>
            </View>
            <View style={styles.footer}>
                <View style={styles.groupCheckBox}>
                  <TouchableOpacity
                      onPress={() => setNotVisibleReturn(!notVisibleReturn)}
                      style={styles.checkbox}
                  >
                    {notVisibleReturn && 
                      <FontAwesome5 name='check' color='green' size={10}/>
                    }
                  </TouchableOpacity>
                  <Text style={styles.textNotVisible}>Não exibir a introdução novamente.</Text>
                </View>
                <Button title="Pular Introdução" isOutline={true} onPress={() => handleGoApp()}/>
            </View>
        </View>
      </Modal>
  ); 
}