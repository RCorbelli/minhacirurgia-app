import React from 'react';
import {View, Text} from 'react-native';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { styles } from './styles';
import { ButtonHome } from '../../components/ButtonHome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export function TimeSurgery({navigation}){
  return(
      <View style={styles.container}>
        <View style={styles.content}>
          <Button title="O Centro Cirúrgico" onPress={()=>navigation.navigate("Centro Cirurgico")}>
            <FontAwesome5 name='clinic-medical' color='#fff' size={35}/>
          </Button>
        </View>
        <View style={styles.content}>
          <Button title="Anestesia" onPress={() => navigation.navigate("Anestesia")}>
            <FontAwesome5 name='syringe' color='#fff' size={35}/>
          </Button>
        </View>
        <View style={styles.content}>
          <Button title="A trajetória cirúrgica de Antônio e seus familiares" onPress={() => navigation.navigate("A história de Antônio")}>
            <FontAwesome5 name='book-open' color='#fff' size={35}/>
          </Button>
        </View>
      </View>
  )
}