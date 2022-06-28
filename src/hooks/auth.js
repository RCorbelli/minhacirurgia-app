import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {Alert} from 'react-native';
import api from '../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLLECT_USERS } from '../config/database';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  async function signIn(data) {
    try {
      setLoading(true);
      const response = await api.post("users/login", data);
      await AsyncStorage.setItem(COLLECT_USERS, JSON.stringify(response.data));
      setUser(response.data);
    } catch(error) {
      if(error.response.data.httpCode === 404){
        Alert.alert("Erro ao entrar!", error.response.data.message);
      }else{
        Alert.alert("Erro ao entrar!", "Verifique seus dados e tente novamente.");
      }
      
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    setUser({});
    await AsyncStorage.removeItem(COLLECT_USERS);
  }

  async function loadUserStorageData() {
    setLoading(true);
      try{
        const storageUser = await AsyncStorage.getItem(COLLECT_USERS);
        if (storageUser) {
            var userLogged = JSON.parse(storageUser);
            setUser(userLogged);
          }else{
            setUser({});
            await AsyncStorage.removeItem(COLLECT_USERS);
          }
      }catch(error){
        setUser({});
            await AsyncStorage.removeItem(COLLECT_USERS);
      }finally{
        setLoading(false);
      }
  }

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, signIn, signOut}}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
