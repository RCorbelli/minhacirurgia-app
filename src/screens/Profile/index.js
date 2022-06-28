import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {styles} from './styles';
import {useAuth} from '../../hooks/auth';
import { Button } from '../../components/Button';
import { surgeries } from '../../config/surgeries';
import api from '../../service/api';
import { saveNotifications } from '../../utils/SaveNotifications';
import DatePicker from 'react-native-date-picker'
import Notifications from '../../utils/Notifications';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { postScreenAccess } from '../../utils/reqMethods';
export function Profile(){
  const [surgeryDate, setSurgeryDate] = useState();
  const [surgeryTime, setSurgeryTime] = useState();
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const {user, signOut} = useAuth();
  function setNewsNotification(){
    saveNotifications(date);
  }

  function testeNotification(){
    Notifications.scheduleLocalNotification("Teste Notificação!", "Esse é um teste de notificação.", new Date());
  }
  async function getSurgeryTime(){
    try{
      const response = await api.get("surgery-time", {
        params: {
          userId: user.id
        }
      });
      if(response.data){
        setSurgeryTime(response.data);
        setDate(new Date(response.data.surgeryTime))
      }
    }catch(error){
      console.log(error);
    }
  }
  async function saveSurgeryTime(){
    try{
      const response = await api.post("surgery-time", {userId: user.id, surgeryTime: date});
      setNewsNotification();
      Alert.alert("Tudo certo", response.data);
    }catch(error){
      console.log(error)
      Alert.alert("Erro ao salvar.", "Por favor, tente novamente")
    }finally{

    }
  }

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Deseja sair?",
      "Tem certeza que deseja sair de sua conta do aplicativo?",
      [
        {
          text: "Cancelar",
          onPress: () => {},
          style: "cancel"
        },
        { text: "Sair", onPress: () => signOut() }
      ]
    );

  useEffect(() => {
    postScreenAccess(40, user.id)
    getSurgeryTime();
  }, [])
  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Olá, <Text style={styles.textName}>{user.name}.</Text> Abaixo estão seus dados cadastrais.</Text>
        <Text style={styles.text}>Email: <Text style={styles.textBold}>{user.email}</Text></Text>
        <Text style={styles.text}>Data de Nascimento: <Text style={styles.textBold}>{user.birthdate}</Text></Text>
        <Text style={styles.text}>Cirurgia: <Text style={styles.textBold}>{surgeries.filter(item => item.value === user.surgery)[0].title}</Text></Text>
        {surgeryTime ? 
          <Text style={styles.textInfo}>Você já informou a data de sua cirurgia antes, caso deseje alterar informe a nova data e clique em atualizar.</Text>      
        :
          <Text style={styles.textInfo}>Caso deseje receber notificações com lembretes sobre preparo pré-operatório, coloque no quadro abaixo a data de sua cirurgia e clique em salvar.</Text>      
        }
        <Text style={styles.label}>Data da Cirurgia: </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <TouchableOpacity 
              onPress={() => setOpen(true)}
              style={styles.input}
          >
            <Text style={styles.date}>{date.getDate()+'/'+(date.getMonth() + 1)+'/'+date.getFullYear()+' '+date.getHours()+'h'+date.getMinutes()}</Text>
          </TouchableOpacity>
          <DatePicker
            modal
            open={open}
            minimumDate={new Date(Date.now())}
            title="Selecione a data de sua cirurgia."
            is24hourSource={true}
            date={date}
            locale="pt-br"
            onConfirm={(date) => {
              setOpen(false)
              setDate(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />
          {!surgeryTime ? 
          <View style={{width: '40%'}}>
            <Button title='Salvar' onPress={saveSurgeryTime} />
          </View>
          :
          <View style={{width: '40%'}}>
            <Button title='Atualizar Data' onPress={saveSurgeryTime} />
          </View>
          }
        </View>
      </View>
        <View style={styles.footer}>
        {/* <Button isOutline={true} title="Testar notificação." onPress ={() => testeNotification()} /> */}
          {/* <Button isOutline={true} title="Sair" onPress ={() => signOut()} /> */}
          <TouchableOpacity style={styles.btnLogOut} onPress = {createTwoButtonAlert}>
            <Text style={styles.textLogOut}>sair do aplicativo</Text>
            <Icon name='logout-variant' color='red' size={25}/>
          </TouchableOpacity>
        </View>
    </View>
  );
}