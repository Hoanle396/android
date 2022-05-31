
import React, { Component, useEffect, useState } from 'react'
import { StyleSheet, ImageBackground, AsyncStorage, Alert, Touchable, TouchableOpacity } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { Button, Text, Image, Input, Center, Box, Heading, VStack, FormControl, Link, HStack } from "native-base";
import logo from '../assets/study.png'
import ImageBg from '../assets/hinhnen.png'
import googleIM from '../assets/google.jpg'
import { google } from '../../env'
import axios from '../../axios.config'
export default class LoginScreen extends Component {
   state = {}
   componentDidMount() {

   }
   // const handleSigin =  () => {

   //    if (email && password) {
   //       setLoading(true);
   //       axios.post('auth/login', {
   //          username: email,
   //          password: password
   //       })
   //          .then(async response => {
   //             await  AsyncStorage.setItem('access_token', response.data.access_token);
   //             await  AsyncStorage.setItem('money', ""+response.data.user.money);
   //             await  AsyncStorage.setItem('firstName', response.data.user.firstName);
   //             await  AsyncStorage.setItem('lastName', response.data.user.lastName);
   //             await  AsyncStorage.setItem('avatarUrl', response.data.user.avatarUrl);
   //             props.navigation.replace('Home');
   //          })
   //          .catch(error => {
   //             console.log(error)
   //          })
   //          .finally(() => {
   //             setLoading(false);
   //          })
   //    }
   // }

   _signIn = async () => {
      try {
         await GoogleSignin.configure({
            webClientId: '970416655854-pp42pikachlr2g7m96tngejs8vhaacbs.apps.googleusercontent.com',
            offlineAccess: true
         });
         await GoogleSignin.hasPlayServices();
         const accessToken = await GoogleSignin.signIn();
         console.log(accessToken)
         // setloggedIn(true);

      } catch (error) {
         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            alert('Cancel');
         } else if (error.code === statusCodes.IN_PROGRESS) {
            alert('Signin in progress');
            // operation (f.e. sign in) is in progress already
         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            alert('PLAY_SERVICES_NOT_AVAILABLE');
            // play services not available or outdated
         } else {
            alert(error)
         }
      }
   };
   signOut = async () => {
      try {
         await GoogleSignin.revokeAccess();
         await GoogleSignin.signOut();
         setloggedIn(false);
         setuserInfo([]);
      } catch (error) {
         console.error(error);
      }
   };
   render() {
      return (
         <ImageBackground source={ImageBg} resizeMode="cover" style={{
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: "center",
         }}>
            <Center w="100%">
               <Image source={logo} resizeMode="cover" style={{
                  width: 89,
                  height: 89,
                  top: 74,
                  marginTop: 50,
               }} alt="logo" />
               <Box safeArea p="2" py="8" w="90%" maxW="290" top="150">
                  <Heading size="lg" fontWeight="900" color="#b3bef6" _dark={{
                     color: "warmGray.50"
                  }}>
                     Welcome
                  </Heading>
                  <Heading mt="1" _dark={{
                     color: "warmGray.200"
                  }} color="#7c83db" fontWeight="medium" size="lg">
                     Sign in to continue!
                  </Heading>

                  <VStack space={3} mt="70">
                     <TouchableOpacity
                        style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff", borderRadius: 25, height: 50, width: 250 }} onPress={this._signIn}>
                        <Image source={googleIM} size={10} />
                        <Heading size="md" fontWeight="900" color="#7c83db" _dark={{
                           color: "warmGray.50"
                        }}>
                           Continue with google
                        </Heading>
                     </TouchableOpacity>
                  </VStack>
               </Box>
            </Center>
         </ImageBackground>)
   }
}
