import Tts from "react-native-tts";
import { WELCOME_SCREEN_STRINGS } from "../config/strings";

export function speech(text){
  Tts.setDefaultLanguage("pt-BR");
  Tts.speak(text);
}

export function stopSpeech(){
  Tts.stop();
}