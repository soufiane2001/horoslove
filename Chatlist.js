import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Audio } from 'expo-av';
import { Swipeable } from 'react-native-gesture-handler';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider'; // Install this library
import * as ImagePicker from 'expo-image-picker';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { AntDesign } from '@expo/vector-icons';


const { width } = Dimensions.get('window');

export default function App() {
  const [msgs, setmsgs] = useState([
 {
    name: "Ava",
    age: 24,
    country: "Australia",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReTvwEYcVF5Wf20NMtebQ_yor16CNriuXnxdIrQ_2Nz8mMXhDya7W4QQk4ErhkzIuGFRY&usqp=CAU",
    flag: "https://flagcdn.com/w320/au.png",
    description: "Ava is a free-spirited adventurer from Australia who loves the thrill of exploring new horizons. She spends her days surfing on Australia’s iconic beaches, snorkeling in the Great Barrier Reef, and connecting with nature in the Outback. Ava also has a talent for storytelling and dreams of creating a travel blog that captures the essence of her adventures."
  }
]);
  const [msg, setms] = useState('');
  const [recording, setRecording] = useState(null);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [playingSound, setPlayingSound] = useState(null);
  const [playbackStatus, setPlaybackStatus] = useState(null);

  const renderRightActions = () => (
    <TouchableOpacity style={styles.deleteButton}>
      <Text style={styles.deleteText}>Delete</Text>
    </TouchableOpacity>
  );

 
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: 'white' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >


<View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:scale(6),alignItems:'center',paddingHorizontal:scale(15)}}> 
       <Image
          style={{ width: scale(105), height:verticalScale(65),marginLeft:'1%' }}
          source={require('./horoslogo.png')}
          resizeMode='contain'
        />


 
 

</View> 


<TouchableOpacity style={{paddingHorizontal:'5%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
<AntDesign name="arrowleft" size={RFPercentage(3.5)} color="black" />
</TouchableOpacity>

      <LinearGradient
        colors={['white', '#fe6292', 'white']}
        style={{
          flex: 1,
          padding: '0%',
        }}
      >







      
        <ScrollView style={{backgroundColor:'white',padding:scale(5)}}>
          {msgs.map((message, index) =>{
return(

  <Swipeable renderRightActions={renderRightActions}>
  <TouchableOpacity style={{marginTop:verticalScale(10),borderBottomColor:'#f4f4f4',borderBottomWidth:1,display:'flex',flexDirection:'row',padding:scale(10)}}>
   <Image
          style={{ width: scale(55), height: verticalScale(60),borderRadius:scale(60)/2}}
           
            source={{
              uri:message.img,
            }}
            resizeMode='cover'
          />
  <Image
        source={{
          uri: message.flag, // Replace with the appropriate flag URL
        }}
        style={styles.flag}

      />
<View style={{marginLeft:scale(15)}}>
<Text style={{fontSize:RFPercentage(3)}}>{message.name}</Text>
<Text style={{fontSize:RFPercentage(2),color:'gray',marginTop:scale(5)}}>Hi ,How are you</Text>



</View>

  </TouchableOpacity>
  </Swipeable>
)

          })}
        </ScrollView>
    
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  messageList: {
    flex: 1,
    padding: 10,
  },
  textInput: {
    flex: 1,
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: RFPercentage(2.5),
    marginHorizontal: 10,
    color: '#000',
  },
  messageContainer: {
    backgroundColor:'white',
    marginBottom: RFPercentage(2),
    maxWidth: '75%',
    padding: RFPercentage(1.5),
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  audioMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RFPercentage(2),
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 3,
    alignSelf: 'flex-start',
  },
  playButton: {
    width: RFPercentage(5),
    height: RFPercentage(5),
    backgroundColor: '#7f2ce3',
    borderRadius: RFPercentage(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  slider: {
    flex: 1,
    height: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    borderTopWidth: 1,
    borderTopColor: '#f1f1f1',
  },
  micButton: {
    backgroundColor: '#7f2ce3',
    borderRadius: RFPercentage(3),
    width: RFPercentage(6),
    height: RFPercentage(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  recordingTimer: {
    marginLeft: 10,
  },
  timerText: {
    fontSize: RFPercentage(2),
    color: 'red',
  },
  photoContainer: {
    marginBottom: RFPercentage(2),
    padding: RFPercentage(1.5),
    alignSelf: 'flex-start',
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(70),
    height: '100%',
  },
  deleteText: {
    color: 'white',
    fontSize: scale(14),
    fontWeight: 'bold',
  }, flag: {
    width: scale(27),
    height: verticalScale(20),
    marginLeft: scale(10),
    marginTop:verticalScale(15)
  },
});
