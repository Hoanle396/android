import React from 'react'
import { Text, View } from 'react-native'

const Banking = () => {
  return (
   <View style={{ width: '95%', height: 100, backgroundColor: '#FFFF', marginTop: 10,borderRadius: 10 }}>
   <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{
         color: "#000",
         fontWeight: "bold",
         fontSize: 18,
         margin: 5
      }}
      >19/05/2022 10:36:58</Text>
      <Text style={{
         color: "#000",
         fontWeight: "bold",
         fontSize: 18,
         margin: 5
      }}>Buy Course</Text>
   </View>
   <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{
         color: "#000",
         fontSize: 15,
         margin: 5
      }}
      >Số tiền</Text>
      <Text style={{
         color: "#000",
         fontSize: 18,
         margin: 5
      }}>209003 VND</Text>
   </View>
   <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{
         color: "#000",
         fontSize: 15,
         margin: 5
      }}
      >Số dư</Text>
      <Text style={{
         color: "#000",
         fontSize: 18,
         margin: 5
      }}>501000 VND</Text>
   </View>
</View>
  )
}

export default Banking