
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,FlatList,Modal,
  TouchableOpacity
, Slider, Picker ,ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { RFPercentage } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';
import { useFonts, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  withTiming,
  Easing
} from 'react-native-reanimated';
const AnimatedAntDesign = Animated.createAnimatedComponent(AntDesign);
export default function Home({navigation}) {








  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });
   
  const { width, height } = Dimensions.get('window');
  const scaleFont = (size) => (width / 375) * size; // Assuming 375 is the base width
 


const [ageRange, setAgeRange] = useState([18, 30]); // Default age range
  const [country, setCountry] = useState('Russia'); // Default country

  // Reanimated shared value for the animated filter panel
  const translateY = useSharedValue(-300); // Initially offscreen



/******************************* */

  var users=[{name:"kristina",age:22,country:'russia',img:'https://img.freepik.com/photos-gratuite/portrait-femme-blonde-regarder-photographe_23-2148348970.jpg'},{
  name:"anna",age:19,country:'russia',img:'https://scontent.fcmn1-2.fna.fbcdn.net/v/t39.30808-6/368036462_731235105682386_832498792598238142_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFRmIj8awb1ftdHJQzUbagLg8YNo522El6Dxg2jnbYSXtpINo0jRG5q7isma2zY5fqnyHIDwb9bFCCI4slUxh9W&_nc_ohc=GbcKi-WUdBwQ7kNvgG9lHaz&_nc_zt=23&_nc_ht=scontent.fcmn1-2.fna&_nc_gid=AQG2cJwp8A96GTq_1YTPan6&oh=00_AYBx7GedCliBOBZss0ww3hqUQ6in46oXH8KoznkyFQaJ4g&oe=67557FCA'}
  
  ];
  
  // State to track hearts and close icons that appear on the screen
 
const filterTranslation = useSharedValue(height);

   const visible=useSharedValue(0);
   const filterScale = useSharedValue(0);
  // Animation for main heart scaling
  const animatedHeartStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: 0}],
    };
  });


var filterwidth=useSharedValue(0);


  

var me=useSharedValue(scale(-380));
var him=useSharedValue(scale(250))


  const meStyle = useAnimatedStyle(() => {
    return {
      left:me.value,
    };
  });


  const himStyle = useAnimatedStyle(() => {
    return {
      left:him.value,
    };
  });








  const imageSize = moderateScale(width * 0.5); 




    React.useEffect(() => {

     me.value=withTiming(scale(-120),{duration:1200});
him.value=withTiming(scale(121),{duration:1200});

    }, []);

const scalee = useSharedValue(0.25); // Start with a base scale of 1

  // Define the animated style for scaling
  const animatedStylee = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scalee.value }],
    };
  });

  // Start the scaling animation
  React.useEffect(() => {
    scalee.value = withRepeat(
      withTiming(1, { duration: 1400 }), // Scale up to 2x over 3 seconds
      -1, // Infinite repeat
      true // Reverse direction
    );
  }, []);
    

 
  return (
    <View style={{ flex: 1, paddingTop: width * 0.08 }}>
    
     <Image
          style={{ width: width * 0.3, height: height * 0.05, marginLeft: '1%' }}
          source={require('./horoslogo.png')}
          resizeMode="contain"
        />
       <LinearGradient
        colors={['#fdfdfd','#eedada', '#b07db1']} // Adjust gradient colors as needed
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{flex:1,width:'100%'}}
>
      <View
        style={{
          height: '10%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
       

  






 <Animated.View style={[{position:'absolute',top:verticalScale(100)},meStyle]}>
       <Image
          style={{ width: scale(350), height: verticalScale(350),borderRadius:scale(350)/2}}
          source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReTvwEYcVF5Wf20NMtebQ_yor16CNriuXnxdIrQ_2Nz8mMXhDya7W4QQk4ErhkzIuGFRY&usqp=CAU'}}
          resizeMode="cover"
        />
    
 
</Animated.View>

 
 
 <Animated.View style={[{position:'absolute',zIndex:22,top:verticalScale(350),left:scale(130)},animatedStylee]}>

<AnimatedAntDesign name="heart" size={RFPercentage(13)} color="red" />

</Animated.View>
 
 <Animated.View style={[{position:'absolute',top:verticalScale(100)},himStyle]}>
       <Image
          style={{ width: scale(350), height: verticalScale(350),borderRadius:scale(350)/2}}
          source={{uri:'https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-1/454746344_1262166455161237_1846443015294609024_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGZPb7hM-e3YGGmD5lTGRU1CxFVWTElxjwLEVVZMSXGPCrs88ZMrAk9bQqkxVt7CG1xnu1aXiS4OzcEStNZdcC1&_nc_ohc=oVTVNTZZkOcQ7kNvgGJ---2&_nc_zt=24&_nc_ht=scontent-ams4-1.xx&_nc_gid=AzzNljcQvjYyBX4HYfpqXtc&oh=00_AYA-pVzI3waqZt2DJmD6OQp4dMYt55VANI527SXjJxLPuw&oe=67653A45'}}
          resizeMode="cover"
        />
    
 
</Animated.View>






 <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('6',{n:8})}}>
        <Text style={styles.buttonText}>Let's Start Chatting</Text>
      </TouchableOpacity>







</View>
</LinearGradient>



    </View>
  );
}

const styles = StyleSheet.create({

  button: {
    backgroundColor: '#6a5acd', // Custom color like purple
    height:verticalScale(45), 
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: moderateScale(25),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    width:scale(200),
    elevation: 8,
    position:'absolute',
    top:verticalScale(540),
    left:scale(80)
  },
  buttonText: {
    color: '#fff',
    fontSize: RFPercentage(2.5),
    fontWeight: '600',
  },
});