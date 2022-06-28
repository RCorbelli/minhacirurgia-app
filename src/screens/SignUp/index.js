import React, {useState} from "react";
import { ScrollView, Image, Text, View, Alert, ActivityIndicator, TouchableOpacity } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { Background } from "../../components/Background";
import { styles } from "./styles";
import anaImg from '../../images/personas/ana2.png';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { surgeries } from "../../config/surgeries";
import { theme } from "../../global/styles/theme";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import api from "../../service/api";
export function SignUp({navigation}){
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [loading, setLoading] = useState(false);
  const [isAcceptTerms, setIsAcceptTerms] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    birthdate: "",
    surgery: "",
    password: "",
    confirmPassword: ""
  });

  async function register(){
    try{
      setLoading(true);
      if(isAcceptTerms){
        console.log(data);
        const response = await api.post("users", data);
        Alert.alert("Cadastro realizado!", "\nEntre para acessar o aplicativo.");
        navigation.navigate("Entrar");
      }else{
        Alert.alert("Erro ao cadastrar", "É necessário ler e concordar com as políticas de privacidade para prosseguir com o cadastro.")
      }
    }catch(error){
      if(error.response.data.status === 400){
        Alert.alert("Erro ao cadastrar!", "Preencha todos os dados.");
      }else if(error.response.data.httpCode === 422){
        Alert.alert("Erro ao cadastrar!", error.response.data.error[0].message);
      }else{
        Alert.alert("Erro ao cadastrar!", "Verifique os dados e tente novamente.");
      }
      // Alert.alert("Erro ao registrar", "Houve um erro ao se registrar, por favor, verifique os dados inseridos.");
    }finally{
      setLoading(false);
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
        <ScrollView>
        <Text style={styles.label}>Nome</Text>
        <Input 
            placeholder="Adeline Palmersten"
            value={data.name} 
            onChangeText={(text) => {
                    setData({
                      ...data,
                      name: text
                    });
                  }}>
                
        </Input>
        <Text style={styles.label}>E-mail</Text>
        <Input 
          placeholder="adelinep@email.com"
          value={data.email}
          onChangeText={(text) => {
            setData({
              ...data,
              email: text
            });
          }}>
        </Input>
        <Text style={styles.label}>Data de Nascimento</Text>
        <Input 
          placeholder="17/07/1995"
          value={data.birthdate}
          onChangeText={(text) => {
            setData({
              ...data,
              birthdate: text
            });
          }}>
        </Input>
        <Text style={styles.label}>Cirurgia</Text>
        <Picker
          style={styles.picker}
          itemStyle={{backgroundColor: "#fff", color: "blue", fontFamily: theme.fonts.Roboto400, fontSize:13 }}
          dropdownIconColor={theme.colors.backgroud}
          selectedValue={data.surgery}
          onValueChange={(itemValue, itemIndex) =>
            setData({
              ...data,
              surgery: itemValue
            })
          }>
            {surgeries.map(item => (
              <Picker.Item 
                    style={{color: theme.colors.backgroud}}
                    fontFamily={theme.fonts.Roboto300}
                    key={item.id} 
                    label={item.title}
                    value={item.value} />
            ))}
        </Picker>
        <Text style={styles.label}>Senha</Text>
        <Input 
          password={true} 
          placeholder="*******"
          value={data.password}
          onChangeText={(text) => {
            setData({
              ...data,
              password: text
            });
          }}>
        </Input>
        <Text style={styles.label}>Confirme sua senha</Text>
        <Input 
          password={true} 
          placeholder="*******"
          value={data.confirmPassword}
          onChangeText={(text) => {
              setData({
                ...data,
                confirmPassword: text
              });
            }}>
        </Input>
        <View style={styles.privacyPolice}>
          <TouchableOpacity
            onPress={() => setIsAcceptTerms(!isAcceptTerms)}
            style={styles.checkbox}
          >
            {isAcceptTerms && 
              <FontAwesome5 name='check' color='green' size={10}/>
            }
          </TouchableOpacity>
          <Text style={styles.textPrivacyPolice}>Li e concordo com as <Text onPress={() => navigation.navigate("Políticas de privacidade")} style={styles.textPrivacyPoliceBold}>políticas de privacidade</Text>.</Text>
        </View>
        {loading ? 
          <ActivityIndicator size={20} color={"#fff"}/> :
          <Button title="Cadastrar" isOutline onPress={() => register()}></Button>
          
        }
        <View style={{height: 10}}></View>
        </ScrollView>
      </View>
    </Background>
  )
}