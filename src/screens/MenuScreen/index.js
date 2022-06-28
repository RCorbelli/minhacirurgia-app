import React, {useEffect} from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import { Button } from '../../components/Button';
import { ButtonHome } from '../../components/ButtonHome';
import anaImg from '../../images/personas/ana2.png';
import { styles } from "./styles";
import { postScreenAccess } from '../../utils/reqMethods';
import {useAuth} from '../../hooks/auth';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export function MenuScreen({navigation}){
  const {user} = useAuth();
  useEffect(() => {
    postScreenAccess(11, user.id)
  }, []);
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.img} source={anaImg} />
          <Text style={styles.title}>Minha Cirurgia</Text>
        </View>
      </View>
      <View style={styles.content}>
          <ButtonHome title="Comece por aqui" onPress={() => navigation.navigate("Apresentações")}>
            <FontAwesome name='home' color='#fff' size={35}/>
          </ButtonHome>
          <ButtonHome title="Segurança do paciente" onPress={() => navigation.navigate("Segurança do Paciente")}>
            <FontAwesome5 name='hand-holding-heart' color='#fff' size={35}/>
          </ButtonHome>
          <ButtonHome title="Orientações pré-operatórias" onPress={() => navigation.navigate("Orientações Pré-Operatórias")}>
            <FontAwesome name='comments' color='#fff' size={35}/>
          </ButtonHome>
          <ButtonHome title="O momento da cirurgia" onPress={() => navigation.navigate("Momento da Cirurgia")}>
            <FontAwesome name='stethoscope' color='#fff' size={35}/>
          </ButtonHome>
          <ButtonHome title="Cuidados pós-operatórios" onPress={() => navigation.navigate("Pós-Operatório")}>
            <FontAwesome name='medkit' color='#fff' size={35}/>
          </ButtonHome>
          {/* <ButtonHome title="Para se divertir - Jogos" onPress={() => navigation.navigate("Games")}>
            <FontAwesome name='gamepad' color='#fff' size={35}/>
          </ButtonHome> */}
          <ButtonHome title="Minhas informações" onPress={() => navigation.navigate("Minhas informações")}>
            <FontAwesome name='id-badge' color='#fff' size={35}/>
          </ButtonHome>
          <ButtonHome title="Sobre o aplicativo" onPress={() => navigation.navigate("Sobre o aplicativo")}>
            <FontAwesome name='info-circle' color='#fff' size={35}/>
          </ButtonHome>
      </View>
      <View style={styles.footer}>

      </View>
    </View>
  )
}