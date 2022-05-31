import React from 'react'
import { StyleSheet, View } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import YouTube from 'react-native-youtube';
export default function Learning({ route, navigation }) {
   const { url } = route.params;
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
            video={{ uri: url }}
            videoHeight={1200}
            videoWidth={2000}
            autoPlay={false}
            showDuration={true} 
            disableFullscreen={false}
            thumbnail={require('../../assets/hinhnen1.png')}/>
         {/* // style={{
         //    position: 'absolute',
         //    top: 0,
         //    left: 0,
         //    bottom: 0,
         //    right: 0,
         // }} /> */}
      </View>)
}
var styles = StyleSheet.create({
   backgroundVideo: {
      width: '100%', height: '100%',
   },
});