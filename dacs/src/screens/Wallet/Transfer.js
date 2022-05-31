import { Button, Center, FormControl, Input } from 'native-base'
import React, { useEffect, useState } from 'react'
import { AsyncStorage, Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Loadding from '../../components/Loadding'
import Icon from 'react-native-vector-icons/AntDesign'
import Banking from '../../components/Banking'
const Transfer = ({ route, navigation }) => {

  const [loading, setLoading] = useState(true)
  const [money, setMoney] = useState(0)
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [amount, setAmount] = useState()
  const [message, setMessage] = useState()
  useEffect(() => {
    loadData()
  }, [])
  const loadData = async () => {
    const mn = await AsyncStorage.getItem('money')
    setMoney(mn)
    setLoading(false)
  }
  if (loading) {
    return (<Loadding />)
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
            }}>{money} VND
            </Text>
          </View>
          <Icon name="wallet" color="#FF0000" size={100}
            style={{ marginLeft: 0, marginTop: 0 }}
          />
        </View>
        <ScrollView style={{ width: "100%", height: "100%", marginTop: 50 }} >
          <View ><Text style={{ fontSize: 30, color: "#000000", fontWeight: "bold", marginLeft: 30 }}>To</Text>

          </View>

          <Center w="90%">
            <FormControl style={{ marginLeft: '10%' }}>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input value={email} onChangeText={(e) => { setEmail(e) }} type="email" borderRadius="10" bgColor="#FFFFFF" placeholder="Email" />
            </FormControl>
            <FormControl style={{ marginLeft: '10%' }}>
              <FormControl.Label>Name</FormControl.Label>
              <Input value={name} onChangeText={(e) => { setName(e) }} borderRadius="10" bgColor="#FFFFFF" placeholder="Name" />
            </FormControl>
            <FormControl style={{ marginLeft: '10%' }}>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input value={amount} onChangeText={(e) => { setAmount(e) }}  borderRadius="10" bgColor="#FFFFFF" placeholder="Amount" />
            </FormControl>
            <FormControl style={{ marginLeft: '10%' }}>
              <FormControl.Label>Name</FormControl.Label>
              <Input value={message} onChangeText={(e) => { setMessage(e) }} borderRadius="10" bgColor="#FFFFFF" placeholder="Message" />
            </FormControl>
            <FormControl style={{ marginLeft: '10%', marginTop: 50}}>
              <Button borderRadius="10" bgColor="#000cff" >Countinue</Button>
            </FormControl>
          </Center>
        </ScrollView>
      </ImageBackground>
    )
  }
}
export default Transfer