import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image, Alert } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import  Icon  from 'react-native-vector-icons/FontAwesome5'
import axiosInstance from '../../axios.config'
import CourseList from '../components/CourseList/index'
import Loadding from '../components/Loadding'
import Voice from 'react-native-voice';
export const HomeScreen = (props) => {
  const [loading, setLoading] = useState(true)
  const [row,setRow] = useState([])
  const [search, setSearch] = useState(null)
  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
  const loadData = () => {
    axiosInstance.get('/course')
      .then((response) => {
        setRow(response.data)
      })
      .catch((error) => {
        Alert(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  const onSpeechStart = (e) => {
    console.log('onSpeechStart: ', e);
  };
 
  const onSpeechEnd = (e) => {
    console.log('onSpeechEnd: ', e);
  };
  const startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    try {
      await Voice.start('vi-VN');
    } catch (e) {
      console.error(e);
    }
  };
  const onSpeechPartialResults = async (e) => {
    if (e.value[0]) {
      console.log('Results: ', e.value[0]);
      setSearch(e.value[0]);
      searchSpeech(e.value[0]);
    }
  };
  const searchSpeech = (e) => {
    axiosInstance.get('/course/search/' + e)
      .then((response) => {
        setRow(response.data)
      })
      .catch((error) => {
        Alert.alert(error)
      })
  }
  const handleChange = () => {
    if (search) {
      axiosInstance.get('/course/search/' + search)
        .then((response) => {
          setRow(response.data)
        })
        .catch((error) => {
          Alert.alert(error)
        })
    }
    else loadData()
  }
  if (loading) {
    return (<Loadding />)
  }
  else {
    return (
      <ImageBackground
        source={require('../assets/hinhnen.png')}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView>
          <Text style={{
            paddingHorizontal: 20,
            fontSize: 35,
            paddingTop: 40,
            fontFamily: "Bold",
            color: "#3286D7"
          }}>
            Welcome back Study
          </Text>

          <View style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FFF",
            padding: 10,
            borderRadius: 12,
            marginHorizontal: 20,
            marginTop: 20
          }}>
            <TextInput
              placeholder="Search for new knowledge!"
              placeholderTextColor="#345c74"
              style={{
                fontFamily: "Bold",
                fontSize: 15,
                width: 280,
                paddingHorizontal: 12
              }}
              value={search}
              onChangeText={(e)=>setSearch(e)}
              onBlur={() => handleChange()}
            />
            <TouchableOpacity onPress={startRecognizing}>
            <Icon name="microphone"  size={30}/>
            </TouchableOpacity>
            {/* <Image
              source={require('../images/sear.png')}
              style={{ height: 14, width: 14 }}
            /> */}
          </View>
          <View style={{
            flexDirection: "row",
            backgroundColor: "#FFF2F2",
            marginTop: 15,
            marginHorizontal: 20,
            borderRadius: 20,
            paddingVertical: 30,
            paddingLeft: 30
          }}>
            <View>
              <Text style={{
                color: "#345c74",
                fontSize: 20,
                fontFamily: "Bold",
                width: 250,
                paddingRight: 100
              }}>
                Start learning new Staff
              </Text>
              <TouchableOpacity
                // onPress={() => props.navigation.navigate('Cources')}
                style={{
                  flexDirection: "row",
                  backgroundColor: "#f58084",
                  alignItems: "center",
                  marginTop: 20,
                  width: 150,
                  paddingVertical: 10,
                  borderRadius: 14,
                  paddingHorizontal: 10
                }}
              >
                <Text style={{
                  color: "#FFF",
                  fontFamily: "Bold",
                  fontSize: 12
                }}>Categories</Text>
                {/* <Image
                  source={require('../images/a3.png')}
                  style={{ marginLeft: 20, width: 8, height: 8 }}
                /> */}
              </TouchableOpacity>
            </View>
            <Image
              source={require('../images/undraw.png')}
              style={{ marginLeft: -80, marginTop: 35 }}
            />

          </View>
          <Text style={{
            color: "#345ccc",
            fontFamily: "Bold",
            fontSize: 24,
            paddingHorizontal: 20,
            marginTop: 20,
            marginBottom: 10
          }}>Courses in progress</Text>
         {row&&row.map((item,index) =>{
          //  console.log(item.image)
           return<CourseList key={index}
            id={item.id}
            img={item.image}
            title={item.title}
            bg={item.background}
            onPress={()=>{ props.navigation.navigate('Details',{id:item.id})}}
          />
         })}
          
        </ScrollView>
      </ImageBackground>
    )
  }
}
