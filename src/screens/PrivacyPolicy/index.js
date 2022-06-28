import React, { useEffect } from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from './styles';
import {PRIVACY_POLICY_TEXT} from '../../config/strings';
import { postScreenAccess } from '../../utils/reqMethods';
import {useAuth} from '../../hooks/auth';
export function PrivacyPolicy(){
  const {user} = useAuth();
    useEffect(() => {
        postScreenAccess(39, user.id)
    }, []);
  return(
    <ScrollView style={styles.container}>
      <Text style={styles.text}>
        {PRIVACY_POLICY_TEXT}
      </Text>
    </ScrollView>
  );
}