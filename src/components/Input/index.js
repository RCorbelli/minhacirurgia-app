import React, {ReactNode, useState} from 'react';
import {View, TextInput, TextInputProps, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';
export function Input({children, password, edit, ...TextInputProps}){
    const [securyText, setSecuryText] = useState(true);
    return(
        <View style={!edit? styles.container : styles.containerNotEdit}>
            {password ?
            <View style={styles.separator}>
                <TextInput 
                    {...TextInputProps}
                    secureTextEntry={securyText}
                    style={styles.input}
                    placeholderTextColor="gray"
                />
                <TouchableOpacity onPress={() => setSecuryText(!securyText)}>
                    {securyText ? 
                        <Icon name='eye' color='#333' size={20} style={{ marginRight: 10}} />
                         :
                        <Icon name='eye-off' color='#333' size={20} style={{ marginRight: 10}} />
                    }
                </TouchableOpacity>
            </View> : 
            <View style={styles.separator}>
                <TextInput 
                    {...TextInputProps}
                    style={styles.input}
                    placeholderTextColor="gray"
                />
                {children}
            </View>
            }
        </View>
    );
}