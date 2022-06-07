import { Center } from 'native-base'
import React, { useEffect, useState } from 'react'
import { AsyncStorage, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Loadding from '../../components/Loadding'
import Icon from 'react-native-vector-icons/AntDesign'
import Banking from '../../components/Banking'
const WalletHome = ({ route, navigation }) => {

   const [loading, setLoading] = useState(true)
   const [money, setMoney] = useState(0)
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
               <View ><Text style={{ fontSize: 30, color: "#000000", fontWeight: "bold", marginLeft: 30 }}>Feature</Text>
                  <View style={{ flexDirection: 'row', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                     <TouchableOpacity
                        onPress={() => navigation.navigate('transfer')}
                        style={{
                           flexDirection: "column",
                           backgroundColor: "#FFFFFF",
                           alignItems: "center",
                           margin: 10,
                           width: 100,
                           paddingVertical: 10,
                           borderRadius: 14,
                           paddingHorizontal: 10
                        }}
                     >
                        <Icon
                           name="swap" color="#FF0000" size={40}
                        />
                        <Text style={{
                           color: "#000",
                           fontFamily: "Bold",
                           fontSize: 12
                        }}>Transfer</Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                        onPress={() => navigation.navigate('recharge')}
                        style={{
                           flexDirection: "column",
                           backgroundColor: "#FFFFFF",
                           alignItems: "center",
                           margin: 10,
                           width: 100,
                           paddingVertical: 10,
                           borderRadius: 14,
                           paddingHorizontal: 10
                        }}
                     >
                        <Icon
                           name="pluscircleo" color="#FF0000" size={40}
                        />
                        <Text style={{
                           color: "#000",
                           fontFamily: "Bold",
                           fontSize: 12
                        }}>Recharge</Text>
                     </TouchableOpacity>
                     {/* <TouchableOpacity
                        // onPress={() => props.navigation.navigate('Cources')}
                        style={{
                           flexDirection: "column",
                           backgroundColor: "#FFFFFF",
                           alignItems: "center",
                           margin: 10,
                           width: 100,
                           paddingVertical: 10,
                           borderRadius: 14,
                           paddingHorizontal: 10
                        }}
                     >
                        <Icon
                           name="swapright" color="#FF0000" size={40}
                        />
                        <Text style={{
                           color: "#000",
                           fontFamily: "Bold",
                           fontSize: 12
                        }}>Withdraw</Text>
                     </TouchableOpacity> */}
                  </View>
               </View>
               {/* {row.detail.map((item, index) =><Lession key={index} id={index+1} description={item.description} pressed={()=>navigation.navigate('learning',{url:item.lessonUrl})}/> ||<Text>no content</Text> )} */}
               <View><Text style={{ fontSize: 30, color: "#000000", fontWeight: "bold", marginLeft: 30 }}>History</Text></View>
               <Center w="100%">
                  <Banking />
               </Center>
            </ScrollView>
         </ImageBackground>
      )
   }
}
export default WalletHome