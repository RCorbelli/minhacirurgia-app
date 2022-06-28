import React, {useState} from "react";
import { Alert, Image, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import anaImg from '../../images/personas/ana2.png';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import EStyleSheet from 'react-native-extended-stylesheet';
import { useAuth } from "../../hooks/auth";
import api from '../../service/api';
EStyleSheet.build()
export function SignIn({navigation}){
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const {loading, signIn} = useAuth()

  async function login(){
    try{
      signIn({email: data.email.split(' ')[0], password: data.password});
    }catch(error){
      Alert.alert("Erro ao entrar!", "Usuário ou senha incorretos.");
    }
  }
  return(
    <Background>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.img} source={anaImg} />
          <Text style={styles.title}>Minha Cirurgia</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>E-mail</Text>
        <Input 
          value={data.email}
          placeholder="adelinep@gmail.com" 
            onChangeText={(text) => {
                    setData({
                      ...data,
                      email: text
                    });
                  }}>
        </Input>
        <Text style={styles.label}>Senha</Text>
        <Input 
            password={true} 
            value={data.password}
            placeholder="*******"
              onChangeText={(text) => {
                      setData({
                        ...data,
                        password: text
                      });
                    }}>
        </Input>
        <TouchableOpacity style={styles.btnRecoverPass}>
          <Text style={styles.textRecoverPass}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        {loading ? <ActivityIndicator size={20} color={"#fff"}/> : 
        <Button title="Entrar" isOutline onPress={() => login()}></Button>
        }
      </View>
      <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate("Cadastrar")}>
        <Text style={{color: "#fff"}}>Não possui cadastro? <Text style={{fontWeight: "bold", fontSize: 16}}> Registre-se</Text></Text>
      </TouchableOpacity>
    </Background>
  )
}