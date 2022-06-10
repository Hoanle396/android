import { Center } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Alert, AsyncStorage, Image, ImageBackground, ScrollView, Text, View } from 'react-native'

import axios from '../../../axios.config'
import Gift from '../../components/Gift'
import Loadding from '../../components/Loadding'
export default function MyGift({ route, navigation }) {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()
  const [avt, setAvt] = useState()
  useEffect(() => {
    axios.get('gift/work')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error))
      .finally(async () => {
        const lname = await AsyncStorage.getItem('lastName')
        const fname = await AsyncStorage.getItem('firstName')
        const avatar = await AsyncStorage.getItem('avatarUrl')
        setLastname(lname)
        setFirstname(fname)
        setAvt(avatar)
        setLoading(false)
      })
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
            {data.map((item, index) => <Gift key={index} data={item} />)}
          </Center>
        </ScrollView>
      </ImageBackground>
    )
  }
}
