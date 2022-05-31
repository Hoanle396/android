import React, { useState, useEffect} from 'react';
import {View, StyleSheet,Image} from 'react-native';
import logo from '../assets/logo.gif';
import axios from '../../axios.config'
const SplashScreen = props => {
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    axios.get('auth/profile')
    .then(() => {
      setAuthLoaded(true);
    })
    .catch( () => {
      props.navigation.replace('Login');
    })
  }, []);

  useEffect(() => {
    if (authLoaded) {
      props.navigation.replace('Home');
    }
  }, [authLoaded, props.navigation]);

  return (
    <View style={styles.root}>
      <Image style={styles.image} source={logo}/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFFFFF'
  },
  image: {
     width:100,
     height:100
  }
});

export default SplashScreen;