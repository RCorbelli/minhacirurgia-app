import React, {useEffect} from 'react';
import { Image, Text, View } from 'react-native';
import { Button } from '../../components/Button';
import anaImg from '../../images/personas/ana2.png';
import higieneMaosImg from '../../images/seguranca/higienemaos.png';
import idPatientImg from '../../images/seguranca/idpatient.png';
import oqueImg from '../../images/seguranca/oque.png';
import quedaImg from '../../images/seguranca/queda.png';
import seguraImg from '../../images/seguranca/segura.png';
import { styles } from "./styles";
import { postScreenAccess } from '../../utils/reqMethods';
import {useAuth} from '../../hooks/auth';
export function MenuPacientSafe({navigation}){
  const {user} = useAuth();
  useEffect(() => {
    postScreenAccess(10, user.id)
  }, []);
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* <Image style={styles.img} source={anaImg} /> */}
          <Text style={styles.title}>Tudo que você precisa saber sobre segurança do paciente, você encontra aqui.</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Button title="O que é e qual a sua importância?" onPress={() => navigation.navigate("Sobre Segurança")}>
          <Image source={oqueImg} style={styles.img}></Image>
        </Button>
        <View style={{height: 20}}></View>
        <Button title="Higienização das mãos" onPress={() => navigation.navigate("Higienização das Mãos")}>
          <Image source={higieneMaosImg} style={styles.img}></Image>
        </Button>
        <View style={{height: 20}}></View>
        <Button title="Identificação do Paciente" onPress={() => navigation.navigate("Identificação do Paciente")}>
        <Image source={idPatientImg} style={styles.img}></Image>
        </Button>
        <View style={{height: 20}}></View>
        <Button title="Prevenção de quedas" onPress={() => navigation.navigate("Prevenção de Quedas")}>
        <Image source={quedaImg} style={styles.img}></Image>
        </Button>
        <View style={{height: 20}}></View>
        <Button title="Cirurgia Segura" onPress={() => navigation.navigate("Cirurgia Segura")}>
        <Image source={seguraImg} style={styles.img}></Image>
        </Button> 
      </View>
      <View style={styles.footer}>

      </View>
    </View>
  )
}