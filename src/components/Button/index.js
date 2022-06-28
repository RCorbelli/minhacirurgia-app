import React, {ReactNode} from 'react';
import {Text, View, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import { styles } from './styles';


export function Button({ title, children, isOutline, ...rest }) {
  return (
    <View style={isOutline ? styles.containerOutline : styles.container}>
      <TouchableOpacity 
      style={styles.containerBtn} 
      {...rest }
    >
      {children  &&
      <View style={styles.iconWrapper}>
        {children}
      </View>
      }
      <Text style={isOutline ? styles.titleOutline : styles.title}>
        { title }
      </Text>
      
    </TouchableOpacity>
    </View>
  );
}
