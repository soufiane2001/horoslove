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
import { RFPercentage } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider'; // Install this library
import * as ImagePicker from 'expo-image-picker';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { AntDesign } from '@expo/vector-icons';


const { width } = Dimensions.get('window');

export default function App({navigation}) {
  const [msgs, setmsgs] = useState([]);
  const [msg, setms] = useState('');
  const [recording, setRecording] = useState(null);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [playingSound, setPlayingSound] = useState(null);
  const [playbackStatus, setPlaybackStatus] = useState(null);

  const sendmsg = () => {
    if (msg.trim()) {
      setmsgs([...msgs, { type: 'text', content: msg }]);
      setms('');
    }
  };

  const handleStartRecording = async () => {
    try {
      const { granted } = await Audio.requestPermissionsAsync();
      if (!granted) {
        alert('Permission Denied');
        return;
      }

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const newRecording = new Audio.Recording();
      await newRecording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await newRecording.startAsync();
      setRecording(newRecording);

      setTimer(0);
      const id = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);
    } catch (err) {
      console.error('Error starting recording:', err);
    }
  };

  const handleStopRecording = async () => {
    if (!recording) return;

    try {
      clearInterval(intervalId);

      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setmsgs([...msgs, { type: 'audio', uri }]);
      setRecording(null);
    } catch (err) {
      console.error('Error stopping recording:', err);
    }
  };

const handleSelectPhoto = async () => {
  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Use this if MediaType is undefined
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      alert(result.uri )
      setmsgs([...msgs, { type: 'photo', uri: result.uri }]);
    }
  } catch (err) {
    console.error('Error selecting photo:', err);
  }
};


  const handlePlayPauseAudio = async (uri) => {
    if (playingSound) {
      await playingSound.pauseAsync();
      setPlayingSound(null);
      return;
    }

    try {
      const { sound } = await Audio.Sound.createAsync({ uri }, {}, (status) => {
        setPlaybackStatus(status);
        if (status.didJustFinish) {
          sound.unloadAsync();
          setPlayingSound(null);
          setPlaybackStatus(null);
        }
      });
      setPlayingSound(sound);
      await sound.playAsync();
    } catch (err) {
      console.error('Error playing audio:', err);
    }
  };

  const renderMessage = (message, index) => {
    if (message.type === 'text') {
      return (
        <View key={index} style={styles.messageContainer}>
          <Text style={styles.messageText}>{message.content}</Text>
        </View>
      );
    } else if (message.type === 'audio') {
      return (
        <View key={index} style={styles.audioMessageContainer}>
          <TouchableOpacity
            onPress={() => handlePlayPauseAudio(message.uri)}
            style={styles.playButton}
          >
            <MaterialIcons
              name={playingSound ? 'pause' : 'play-arrow'}
              size={RFPercentage(2.5)}
              color="#fff"
            />
          </TouchableOpacity>
          {playbackStatus && (
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={playbackStatus.durationMillis || 1}
              value={playbackStatus.positionMillis || 0}
              onValueChange={async (value) => {
                if (playingSound) {
                  await playingSound.setPositionAsync(value);
                }
              }}
              minimumTrackTintColor="#7f2ce3"
              maximumTrackTintColor="#e0e0e0"
              thumbTintColor="#7f2ce3"
            />
          )}
        </View>
      );
    } else if (message.type === 'photo') {
      return (
        <View key={index} style={styles.photoContainer}>
          <Image source={{ uri: message.uri }} style={styles.photo} />
        </View>
      );
    }
  };

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


          <Image
          style={{ width: scale(40), height: verticalScale(45),borderRadius:scale(50)/2}}
           
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReTvwEYcVF5Wf20NMtebQ_yor16CNriuXnxdIrQ_2Nz8mMXhDya7W4QQk4ErhkzIuGFRY&usqp=CAU',
            }}
            resizeMode='cover'
          />
 

</View> 


<TouchableOpacity onPress={()=>{navigation.navigate('6',{n:9})}} style={{paddingHorizontal:'5%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
<AntDesign name="arrowleft" size={RFPercentage(3.5)} color="black" />
</TouchableOpacity>

      <LinearGradient
        colors={['white', '#fe6292', 'white']}
        style={{
          flex: 1,
          padding: '3%',
        }}
      >







      
        <ScrollView style={styles.messageList}>
          {msgs.map((message, index) => renderMessage(message, index))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={handleSelectPhoto}>
            <MaterialIcons name="attach-file" size={RFPercentage(4)} color="#7f2ce3" />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Type your message..."
            placeholderTextColor="#999"
            value={msg}
            onChangeText={setms}
          />
          <TouchableOpacity onPress={sendmsg}>
            <MaterialIcons name="send" size={RFPercentage(4)} color="#7f2ce3" />
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={handleStartRecording}
            onPressOut={handleStopRecording}
          >
            <View style={styles.micButton}>
              <MaterialIcons name="keyboard-voice" size={RFPercentage(4)} color="white" />
            </View>
          </TouchableOpacity>
          {recording && (
            <View style={styles.recordingTimer}>
              <Text style={styles.timerText}>{timer}s</Text>
            </View>
          )}
        </View>
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
});
