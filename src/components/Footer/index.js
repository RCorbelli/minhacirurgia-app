import React from 'react';
import { styles } from './styles';
import { Button } from '../Button';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build();
export function Footer({...rest}){
  return(
    <View style={styles.container}>
      <Button isOutline={true} title="Próximo" {...rest}/>
    </View>
  )
}