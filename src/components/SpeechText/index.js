import React, { useState } from 'react';
import {TouchableOpacity} from 'react-native'
import Tts from "react-native-tts";
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './styles';



export function SpeechTexts({text, color, customStyle}){
  function speech(text){
    Tts.setDefaultLanguage("pt-BR");
    Tts.setDefaultVoice("pt-br-x-afs-local");
    Tts.setDefaultRate(0.7, true);
    Tts.setDefaultPitch(1);
    Tts.addEventListener('tts-finish', (event) => setIsSpeech(false));
    Tts.speak(text);
  }
  
  function stopSpeech(){
    Tts.stop();
  }

  const [isSpeech, setIsSpeech] = useState(false);
  return (
    <>
    {isSpeech? 
      <TouchableOpacity
          style={customStyle ? customStyle : styles.buttonSpeech}
          onPress={() => {stopSpeech(); setIsSpeech(false)}}
          title="Info"
          color={color}
        >
            <Icon name='volume-x' color={color} size={25} style={{ marginRight: 10}} />
        </TouchableOpacity>: 
        <TouchableOpacity
          style={customStyle ? customStyle : styles.buttonSpeech}
          onPress={() => {speech(text); setIsSpeech(true)}}
          title="Info"
          color={color}
      >
          <Icon name='volume-2' color={color} size={25} style={{ marginRight: 10}} />
      </TouchableOpacity>
}
</>
  )
}