import React ,{useState} from 'react'
import { StyleSheet, View, ScrollView ,Text} from 'react-native';
import { Center } from 'native-base';
import VideoPlayer from 'react-native-video-player';
import Lession from '../../components/Mylession'
import YouTube from 'react-native-youtube';
export default function Learning({ route, navigation }) {
   const { url, row } = route.params;
   const [state,setState]=useState(url);
   return (
      <View style={{ width: '100%', height: '100%', backgroundColor: "#FFFFEE" }}>
         {/* <YouTube
            apiKey='AIzaSyDmCnVcwddIMNrsfXWbdUz-7ULEkcFdP3M'
            videoId={url}
            play 
            onReady={e => console.log(e)}
            onChangeState={e => console.log(e.state)}
            onChangeQuality={e => console.log(e.quality)}
            onError={e => console.log(e.error)}
            style={{ alignSelf: 'stretch', height: 300 }}
         /> */}
         <VideoPlayer
            video={{ uri: state }}
            videoHeight={1200}
            videoWidth={2000}
            autoPlay={false}
            showDuration={true}
            disableFullscreen={false}
            controls={true}
            thumbnail={require('../../assets/hinhnen1.png')} />
         <ScrollView style={{ width: "100%", height: "100%", marginTop: 50 }} >
            <Center w="100%">
               <View style={{ paddingBottom: 30 }}><Text style={{ fontSize: 30, color: "#000000", fontWeight: "bold" }}>{row.title}</Text></View>
               {row.detail.map((item, index) => <Lession
                  key={index} id={index + 1}
                  description={item.description}
                  pressed={() =>setState(item.lessonUrl) }/> || <Text>no content</Text>)}
            </Center>
         </ScrollView>
      </View>)
}
var styles = StyleSheet.create({
   backgroundVideo: {
      width: '100%', height: '100%',
   },
});