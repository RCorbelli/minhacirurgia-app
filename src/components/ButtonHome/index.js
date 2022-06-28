import React, {ReactNode} from 'react';
import {Text, View, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import { styles } from './styles';


export function ButtonHome({ title, children, ...rest }) {
  return (
      <TouchableOpacity 
      style={styles.container} 
      {...rest }
    >
      {children}
      <Text style={styles.title}>
        { title }
      </Text>
      
    </TouchableOpacity>
  );
}
