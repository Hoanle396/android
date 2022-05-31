import { Center } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Alert, AsyncStorage, Image, ImageBackground, ScrollView, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from '../../../axios.config'
import Loadding from '../../components/Loadding'
export default function MyGift({ route, navigation }) {


  const [loading, setLoading] = useState(true)
  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()
  const [avt, setAvt] = useState()
  useEffect(() => {
    (async () => {
      const lname = await AsyncStorage.getItem('lastName')
      const fname = await AsyncStorage.getItem('firstName')
      const avatar = await AsyncStorage.getItem('avatarUrl')
      setLastname(lname)
      setFirstname(fname)
      setAvt(avatar)
      setLoading(false)
    })()
  }, [])
  if (loading) {
    return <Loadding />
  }
  else {
    return (
      <ImageBackground
        source={require('../../assets/hinhnen.png')}
        style={{ width: "100%", height: "100%" }}>
        <View style={{
          flexDirection: "row",
          backgroundColor: "#FEE180",
          marginTop: 0,
          marginHorizontal: 0,
          borderRadius: 20,
          paddingVertical: 30,
          paddingLeft: 30
        }}>
          <View>
            <Text style={{
              color: "#345c74",
              fontSize: 25,
              fontFamily: "Bold",
              width: 250,
              marginTop: 70,
              paddingRight: 100
            }}>
              {firstname + " " + lastname}
            </Text>
          </View>
          <Image
            source={{ uri: avt }}
            style={{ marginLeft: -30, marginTop: 0, width: 100, height: 100, borderRadius: 50, }}
          />

        </View>
        <ScrollView style={{ width: "100%", height: "100%", marginTop: 50 }} >
          <Center w="100%">
            <View style={{
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFF",
              borderRadius: 10,
              padding: 10,
              marginHorizontal: 20,
              marginTop: 20
            }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                  30PERCENTOFDAY
                </Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                  30% decrease of the month
                </Text>
                <View style={{ flexDirection: 'row' ,marginTop: 10 }}>
                  <Icon name="clock" color="#000000" size={16}/>
                  <Text style={{ fontSize: 14, marginLeft:5 }}>
                     28/06/2022
                  </Text>
                  <Text style={{ fontSize: 14, marginLeft:10}}>
                    25/7/2022
                  </Text>
                </View>
              </View>
              <Icon name="gift" color="#FF00AA" size={60} style={{marginLeft:40}}/>
            </View>
          </Center>
        </ScrollView>
      </ImageBackground>
    )
  }
}
