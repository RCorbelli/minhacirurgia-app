import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './styles';
export function Header({title, color, navigation}){
    return(
      <View style={[styles.container, {backgroundColor: color}]}>
        <TouchableOpacity style={[styles.btnVoltar]} onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' color='#fff' size={25} style={{ marginRight: 10}} />
          </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    )
}