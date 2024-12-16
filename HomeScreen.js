import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
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
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing
} from 'react-native-reanimated';

export default function Home({ navigation }) {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });
    const [isFilterVisible, setIsFilterVisible] = useState(false);
  const { width, height } = Dimensions.get('window');
  const scaleFont = (size) => (width / 375) * size; // Assuming 375 is the base width
  const heartScale = useSharedValue(1);
  const leftdetail=useSharedValue("45%");
    const topdetail=useSharedValue("45%");
  const closeIconScale = useSharedValue(1);
 /**************************************/
var underline=useSharedValue(0);

var underlinee=useSharedValue(1);


 const underlineStyle = useAnimatedStyle(() => {
    return {
    borderBottomWidth: underline.value 
    };
  });

 const underlineeStyle = useAnimatedStyle(() => {
    return {
    borderBottomWidth: underlinee.value 
    };
  });


const handleunderlinePress = () => {
if(underline.value==0){
    underline.value = withTiming(2,1000)
       underlinee.value = withTiming(0,1000)
       opa1.value=withTiming(0,{duration:1000})
      setshow2(1)
      setshow1(0)
       opa2.value=withTiming(1,{duration:1200})
}
else{
  opa2.value = withTiming(0,{duration:1000})
   setshow2(0)
      setshow1(1)
       opa1.value = withTiming(1,{duration:1200})

 underline.value = withTiming(0,1000)
       underlinee.value = withTiming(2,1000)



}



}





 /**************************************88 */
const [filters, setFilters] = useState({
    age: '18-30',
    country: 'Russia',
    // Add more filters as needed
  });

  // Function to update filter state
  const updateFilter = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

/*********************************** */
var matches=[ {
    name: "Kristina",
    age: 22,
    country: "Russia",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Ur61KRdVFQnivAdatD5wwqCgFHuZyDTtuuaP2nlq8QpB3E1sUu5eS5SM1ori2xqSdrk&usqp=CAU",
    flag: "https://flagcdn.com/w320/ru.png", // Updated to ensure cross-platform compatibility
    description: "Kristina is a cheerful and adventurous young woman from Russia with an infectious zest for life. She is passionate about photography, often seeking out picturesque landscapes and hidden gems in nature. When she's not behind the camera, Kristina loves trying out new cuisines, learning about different cultures, and engaging in outdoor sports like hiking and kayaking. Her dream is to travel the world and document her journey through a stunning photo series."
  },
 
  {
    name: "Emma",
    age: 21,
    country: "France",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR9PpKMdBGXsl87fCt1s6rV3DvTVaW-RpSZWVVvO5EB6nTmG2VORFa_1qKu5N2M57tIi4&usqp=CAU",
    flag: "https://flagcdn.com/w320/fr.png", // Updated
    description: "Emma is a nature enthusiast from France who finds joy in the simple pleasures of life. Whether it’s walking through lavender fields in Provence or enjoying a quiet afternoon reading by a lake, she always feels at home in the outdoors. Emma also has a talent for photography, capturing the breathtaking beauty of the French countryside. She dreams of publishing a coffee-table book featuring her best photographs."
  },
  {
    name: "Isabella",
    age: 23,
    country: "Italy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6r2FnNffOu6TUMq1YFMTpoudZ3sqg1QWpFuBjJnVsH7JQPfs_yCEFVPJHKeKnAKJAHmU&usqp=CAU",
    flag: "https://flagcdn.com/w320/it.png", // Updated
    description: "Isabella is an adventurous and passionate foodie who loves exploring Italy’s culinary delights. From handmade pasta to delectable desserts, she enjoys discovering traditional recipes and the stories behind them. Isabella also has a deep appreciation for architecture and spends her weekends admiring Italy’s historic landmarks. Her dream is to open a small café that combines her love for food and design."
  },
 ]








var requests=[ {
    name: "Kristina",
    age: 22,
    country: "Russia",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Ur61KRdVFQnivAdatD5wwqCgFHuZyDTtuuaP2nlq8QpB3E1sUu5eS5SM1ori2xqSdrk&usqp=CAU",
    flag: "https://flagcdn.com/w320/ru.png", // Updated to ensure cross-platform compatibility
    description: "Kristina is a cheerful and adventurous young woman from Russia with an infectious zest for life. She is passionate about photography, often seeking out picturesque landscapes and hidden gems in nature. When she's not behind the camera, Kristina loves trying out new cuisines, learning about different cultures, and engaging in outdoor sports like hiking and kayaking. Her dream is to travel the world and document her journey through a stunning photo series."
  },
 
 
  {
    name: "Olivia",
    age: 20,
    country: "United States",
    img: "https://i.pinimg.com/736x/a6/1b/4f/a61b4f95bf4aa23374de85bd90c67fce.jpg",
    flag: "https://flagcdn.com/w320/us.png", // Updated
    description: "Olivia is an ambitious and community-oriented student from the United States. She’s pursuing a degree in literature and enjoys participating in local book clubs and poetry slams. When not studying, Olivia spends her time volunteering at shelters, mentoring young students, and organizing neighborhood clean-up drives. Her ultimate goal is to write a novel that inspires people to make a positive impact in their communities."
  },
  {
    name: "Ava",
    age: 24,
    country: "Australia",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReTvwEYcVF5Wf20NMtebQ_yor16CNriuXnxdIrQ_2Nz8mMXhDya7W4QQk4ErhkzIuGFRY&usqp=CAU",
    flag: "https://flagcdn.com/w320/au.png", // Updated
    description: "Ava is a free-spirited adventurer from Australia who loves the thrill of exploring new horizons. She spends her days surfing on Australia’s iconic beaches, snorkeling in the Great Barrier Reef, and connecting with nature in the Outback. Ava also has a talent for storytelling and dreams of creating a travel blog that captures the essence of her adventures."
  }]










const [ageRange, setAgeRange] = useState([18, 30]); // Default age range
  const [country, setCountry] = useState('Russia'); // Default country

  // Reanimated shared value for the animated filter panel
  const translateY = useSharedValue(-300); // Initially offscreen


  const applyFilters = () => {
    // Handle applying filters logic
    console.log('Filters applied:', { ageRange, country });
  };


/******************************* */

  var users=[ {
    name: "Kristina",
    age: 22,
    country: "Russia",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Ur61KRdVFQnivAdatD5wwqCgFHuZyDTtuuaP2nlq8QpB3E1sUu5eS5SM1ori2xqSdrk&usqp=CAU",
    flag: "https://flagcdn.com/w320/ru.png", // Updated to ensure cross-platform compatibility
    description: "Kristina is a cheerful and adventurous young woman from Russia with an infectious zest for life. She is passionate about photography, often seeking out picturesque landscapes and hidden gems in nature. When she's not behind the camera, Kristina loves trying out new cuisines, learning about different cultures, and engaging in outdoor sports like hiking and kayaking. Her dream is to travel the world and document her journey through a stunning photo series."
  },
  {
    name: "Anna",
    age: 19,
    country: "Russia",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXK2ACUiysrZ0Hrth1x4Ngslu_Th6H1k_zoz-0GDjZxurBYyVwekEz5EiENGjJFJaxMiQ&usqp=CAU",
    flag: "https://flagcdn.com/w320/ru.png", // Updated
    description: "Anna is a creative soul and an aspiring artist with a passion for vibrant, abstract paintings. She finds inspiration in Russia's vast landscapes, capturing the essence of its beauty through her work. Aside from painting, Anna enjoys visiting art galleries, writing poetry, and exploring Russia’s rich history. Her ultimate goal is to have her own art exhibition, sharing her vision with people around the world."
  },
  {
    name: "Sophia",
    age: 25,
    country: "Germany",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xmAxfA0E6O28mpk-pqyUm1wW6tNQ1LvOWOGVUqEMQNsF9kPcacmEcBVehkU2zolWTQY&usqp=CAU",
    flag: "https://flagcdn.com/w320/de.png", // Updated
    description: "Sophia is a driven and innovative professional from Germany, working at the forefront of the tech industry. Her fascination with artificial intelligence and sustainable technology fuels her projects. Outside of work, Sophia loves exploring Germany’s historic castles, cycling through scenic routes, and attending technology expos. She’s also a budding chef who enjoys experimenting with international recipes and hosting dinner parties for her friends."
  },
  {
    name: "Emma",
    age: 21,
    country: "France",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR9PpKMdBGXsl87fCt1s6rV3DvTVaW-RpSZWVVvO5EB6nTmG2VORFa_1qKu5N2M57tIi4&usqp=CAU",
    flag: "https://flagcdn.com/w320/fr.png", // Updated
    description: "Emma is a nature enthusiast from France who finds joy in the simple pleasures of life. Whether it’s walking through lavender fields in Provence or enjoying a quiet afternoon reading by a lake, she always feels at home in the outdoors. Emma also has a talent for photography, capturing the breathtaking beauty of the French countryside. She dreams of publishing a coffee-table book featuring her best photographs."
  },
  {
    name: "Isabella",
    age: 23,
    country: "Italy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6r2FnNffOu6TUMq1YFMTpoudZ3sqg1QWpFuBjJnVsH7JQPfs_yCEFVPJHKeKnAKJAHmU&usqp=CAU",
    flag: "https://flagcdn.com/w320/it.png", // Updated
    description: "Isabella is an adventurous and passionate foodie who loves exploring Italy’s culinary delights. From handmade pasta to delectable desserts, she enjoys discovering traditional recipes and the stories behind them. Isabella also has a deep appreciation for architecture and spends her weekends admiring Italy’s historic landmarks. Her dream is to open a small café that combines her love for food and design."
  },
  {
    name: "Olivia",
    age: 20,
    country: "United States",
    img: "https://i.pinimg.com/736x/a6/1b/4f/a61b4f95bf4aa23374de85bd90c67fce.jpg",
    flag: "https://flagcdn.com/w320/us.png", // Updated
    description: "Olivia is an ambitious and community-oriented student from the United States. She’s pursuing a degree in literature and enjoys participating in local book clubs and poetry slams. When not studying, Olivia spends her time volunteering at shelters, mentoring young students, and organizing neighborhood clean-up drives. Her ultimate goal is to write a novel that inspires people to make a positive impact in their communities."
  },
  {
    name: "Mia",
    age: 18,
    country: "Canada",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaRLUClYvQGqB42EgFNdD_G6zBCLanFBrDA&s",
    flag: "https://flagcdn.com/w320/ca.png", // Updated
    description: "Mia is a spirited and energetic young woman from Canada with an infectious love for adventure. She enjoys hiking in the Rockies, camping under the stars, and kayaking in pristine lakes. Mia is also a passionate advocate for wildlife conservation and frequently volunteers for environmental causes. Her dream is to backpack across Canada, exploring its diverse landscapes and cultures."
  },
  {
    name: "Ava",
    age: 24,
    country: "Australia",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReTvwEYcVF5Wf20NMtebQ_yor16CNriuXnxdIrQ_2Nz8mMXhDya7W4QQk4ErhkzIuGFRY&usqp=CAU",
    flag: "https://flagcdn.com/w320/au.png", // Updated
    description: "Ava is a free-spirited adventurer from Australia who loves the thrill of exploring new horizons. She spends her days surfing on Australia’s iconic beaches, snorkeling in the Great Barrier Reef, and connecting with nature in the Outback. Ava also has a talent for storytelling and dreams of creating a travel blog that captures the essence of her adventures."
  }
  
  ];
  // State to track hearts and close icons that appear on the screen
  const [hearts, setHearts] = useState([]);
  const [closes, setCloses] = useState([]);
  const widthdetail=useSharedValue(0);
  const heightdetail=useSharedValue(0);
  const raduisdetail=useSharedValue(500);
const filterTranslation = useSharedValue(height);
  var [i,setI]=useState(0)
   const filterBorderRadius = useSharedValue(100);
   const detailTranslation=useSharedValue(0);
   const visible=useSharedValue(0);
   const filterScale = useSharedValue(0);
  // Animation for main heart scaling
  const animatedHeartStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: heartScale.value }],
    };
  });


var filterwidth=useSharedValue(0);
var filterheight=useSharedValue(0);

   const animatedFilterStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: filterTranslation.value }],
       borderRadius: filterBorderRadius.value,
       width:filterwidth.value,
       height:filterheight.value
    };
  });
//


   const animateddetail = useAnimatedStyle(() => {
    return {
    width:widthdetail.value,
    height:heightdetail.value,
    borderRadius:raduisdetail.value,
    display:visible.value==0?"none":'block',
    left:leftdetail.value,
    top:topdetail.value
    };
  });






  // Animation for close icon scaling
  const animatedCloseStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: closeIconScale.value }],
    };
  });

  // Function to trigger the main heart animation
  const handleHeartPress = () => {
    heartScale.value = withSpring(1.5, {}, () => {
      heartScale.value = withSpring(1);
    });
    // Add a new heart to the state to animate it floating upwards
    setHearts([hearts, Date.now()]);

  
  };

  // Function to handle close icon press
  const handleClosePress = () => {
    closeIconScale.value = withSpring(1.5, {}, () => {
      closeIconScale.value = withSpring(1);
    });
    // Add a new close icon to the state to animate it floating upwards
   
  };

const handeldetailPress=()=>{
widthdetail.value=withTiming(width,{duration:500});
heightdetail.value=withTiming(height+verticalScale(20),{duration:500});
raduisdetail.value=withTiming(0,{duration:600});
leftdetail.value=withTiming("0%",{duration:500});
topdetail.value=withTiming("0%",{duration:500});
visible.value=1;

}




const closedetailPress=()=>{
widthdetail.value=withTiming(0,{duration:600});
heightdetail.value=withTiming(0,{duration:500});
raduisdetail.value=withTiming(0,{duration:1000});
leftdetail.value=withTiming("100%",{duration:500});
topdetail.value=withTiming("85%",{duration:500});
visible.value=withTiming(0,{duration:1100});

}





/******************************************************************************************************/

    const handleFilterPress = () => {
     
    if (isFilterVisible) {
      filterTranslation.value = withTiming(height+verticalScale(44), { duration: 500, easing: Easing.inOut(Easing.ease) });
      filterBorderRadius.value = withTiming(100, { duration: 500, easing: Easing.inOut(Easing.ease) });

    } else {
      filterTranslation.value = withTiming(0, { duration: 300, easing: Easing.inOut(Easing.ease) });
           filterBorderRadius.value = withTiming(0, { duration: 500, easing: Easing.inOut(Easing.ease) });
           filterwidth.value= withTiming(width, { duration: 500, easing: Easing.inOut(Easing.ease) });
           filterheight.value= withTiming(height+verticalScale(40), { duration: 500, easing: Easing.inOut(Easing.ease) });
    }
    setIsFilterVisible(!isFilterVisible);
  };




 





/************************************************************************************************************ */

var opa1=useSharedValue(1);
var opa2=useSharedValue(0)

var [show1,setshow1]=useState(1);
var [show2,setshow2]=useState(0);
const animatedReq = useAnimatedStyle(() => {
    return {
      opacity: opa1.value,
    };
  });

const animatedMatch = useAnimatedStyle(() => {
    return {
      opacity: opa2.value,
    };
  });






/******************************************88 */







  // Heart floating animation styles
  const FloatingHeart = ({ id }) => {
    const translateY = useSharedValue(0);
    const opacity = useSharedValue(1);

    const floatingStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: translateY.value }],
        opacity: opacity.value,
      };
    });

    React.useEffect(() => {
      translateY.value = withSpring(-height * 0.5, { duration: 900 });
      opacity.value = withTiming(0, { duration: 800 });
    }, []);

    return (
      <Animated.View
        key={id}
        style={[
          floatingStyle,
          {
            position: 'absolute',
            bottom: height * 0.2,
            left: Math.random() * width * 0.8, // Random horizontal position
          },
        ]}
      >
        <AntDesign name="heart" size={scaleFont(30)} color="red" />
      </Animated.View>
    );
  };

  // Close icon floating animation styles
  const FloatingCloseIcon = ({ id }) => {
    const translateY = useSharedValue(0);
    const opacity = useSharedValue(1);

    const floatingStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: translateY.value }],
        opacity: opacity.value,
      };
    });

    React.useEffect(() => {
      translateY.value = withSpring(-height * 0.5, { duration: 2000 });
      opacity.value = withTiming(0, { duration: 1000 });
    }, []);

    return (
      <Animated.View
        key={id}
        style={[
          floatingStyle,
          {
            position: 'absolute',
            bottom: height * 0.2,
            left: Math.random() * width * 0.8, // Random horizontal position
          },
        ]}
      >
        <AntDesign name="closecircleo" size={scaleFont(30)} color="#9d9b9b" />
      </Animated.View>
    );
  };

  return (
    <View style={{ flex: 1 ,backgroundColor:'white'}}>
      
      <View
        style={{
          height: '10%',
          display: 'flex',
          padding: width * 0.03,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        <Image
          style={{ width: width * 0.3, height: height * 0.05, marginLeft: '1%' }}
          source={require('./horoslogo.png')}
          resizeMode="contain"
        />

   
      </View>
 <LinearGradient
          colors={[ 'white','#e6adf6','#ca7ddf']}
          style={{
            flex: 1,height: '80%', padding: '0%'
          }}
        >
  

<TouchableOpacity style={{paddingHorizontal:'5%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
<AntDesign name="arrowleft" size={RFPercentage(3.5)} color="black" />
</TouchableOpacity>
<View style={{paddingHorizontal:'20%',paddingVertical:'5%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>

<Animated.View  style={[underlineeStyle,{ borderBottomColor: 'red', borderStyle: 'solid',paddingVertical:verticalScale(5) }]}>
<TouchableOpacity onPress={()=>{handleunderlinePress()}}>
<Text style={{fontSize:RFPercentage(2.5),fontFamily: 'Poppins_400Regular'}} >Request</Text>
</TouchableOpacity>
</Animated.View>

<Animated.View  style={[underlineStyle,{ borderBottomColor: 'red', borderStyle: 'solid',paddingVertical:verticalScale(5) }]}>
<TouchableOpacity onPress={()=>{handleunderlinePress()}}>
<Text style={{fontSize:RFPercentage(2.5),fontFamily: 'Poppins_400Regular'}} >Matchs</Text>
</TouchableOpacity>
</Animated.View>




</View>

{show1==1 &&
<Animated.ScrollView style={[animatedReq,{backgroundColor:'white',padding:scale(15),borderTopRightRadius:moderateScale(45),
borderTopLeftRadius:moderateScale(45)}]}>  
  



{requests.map((c)=>{
  return(
<View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomWidth:RFPercentage(0.1),borderBlockColor:'#f7f7f7',paddingVertical:RFPercentage(2)}}>
 <TouchableOpacity>
 <Image
          style={{ width:scale(40), height:verticalScale(45),borderRadius: Math.min(scale(40),verticalScale(45))/2, marginLeft: '1%' }}
          source={{uri:c.img}}
          resizeMode="cover"
        />
</TouchableOpacity>

<MaterialIcons style={{marginLeft:-RFPercentage(1)}}name="girl" size={RFPercentage(6)} color="#e40f6d" />
<View>
<Text style={{fontSize:RFPercentage(2.2),fontFamily: 'Poppins_400Regular'}}>
{c.name}
</Text>
<Text style={{fontSize:RFPercentage(2.2),fontFamily: 'Poppins_400Regular'}}>{c.age}</Text>

</View>

<TouchableOpacity
onPress={()=>{navigation.navigate('6',{n:2})}}
>
 <AntDesign name="closecircleo" size={RFPercentage(5)} color="#9d9b9b" />
</TouchableOpacity>

<TouchableOpacity onPress={()=>{navigation.navigate('6',{n:2})}}>
<AntDesign name="heart" size={RFPercentage(5)}  color="red" />
</TouchableOpacity>

</View>
)})
}
   </Animated.ScrollView>
}
  






{show2==1 &&
<Animated.ScrollView style={[animatedMatch,{backgroundColor:'white',padding:scale(15),borderTopRightRadius:moderateScale(45),
borderTopLeftRadius:moderateScale(45)}]}>  
  



{ matches.map((c)=>{
  return(
<View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomWidth:RFPercentage(0.1),borderBlockColor:'#f7f7f7',paddingVertical:RFPercentage(2)}}>
 <TouchableOpacity>
 <Image
          style={{ width:scale(40), height:verticalScale(45),borderRadius: Math.min(scale(40),verticalScale(45))/2, marginLeft: '1%' }}
          source={{uri:c.img}}
          resizeMode="cover"
        />
</TouchableOpacity>

<MaterialIcons style={{marginLeft:-RFPercentage(1)}}name="girl" size={RFPercentage(6)} color="#e40f6d" />
<View>
<Text style={{fontSize:RFPercentage(2.2),fontFamily: 'Poppins_400Regular'}}>
{c.name}
</Text>
<Text style={{fontSize:RFPercentage(2.2),fontFamily: 'Poppins_400Regular'}}>{c.age}</Text>

</View>


<TouchableOpacity onPress={()=>{navigation.navigate('6',{n:2})}}>
<AntDesign name="message1" size={RFPercentage(5)}  color="red" />
</TouchableOpacity>

</View>
)})
}
   </Animated.ScrollView>
 
  

}






  
    </LinearGradient>
           
           
       
           

      
     
   

  

















    </View>
  );
}

const styles = StyleSheet.create({
detailContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '20%',
    height:11,
    backgroundColor: 'white',
    zIndex: 199,
    padding: '0%',
  }
  ,filterContainer: {
    position:'absolute',
    paddingVertical: verticalScale(25),
    backgroundColor: '#1F1F1F',
    borderRadius: moderateScale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  filterTitle: {
    fontSize: RFPercentage(5),
    fontWeight: 'bold',marginLeft:scale(15),
    color: '#FF6F61',
    marginBottom: 15,
  },
  filterOption: {
    marginTop: verticalScale(35),
    marginLeft:scale(15),
    fontSize: RFPercentage(3.5),
    color: '#FFFFFF',
  },
  optionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: verticalScale(10),
  },
  optionButton: {
    backgroundColor: '#FF6F61',
    borderRadius: 8,
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(30),
    marginLeft:scale(25),
    marginTop:verticalScale(25),
    elevation: 3,
    transition: 'background-color 0.3s ease',
  },
  optionText: {
    fontSize: RFPercentage(2.6),
    color: '#FFFFFF',
  },
  optionButtonHovered: {
    backgroundColor: '#FF4C39',
  },
 image: {
    width: scale(350), // Increased width
    height: verticalScale(400), // Increased height
  resizeMode:"cover",
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#ff6347', // Example border color
  },

  textContainer: {
    flex: 1,
    padding:moderateScale(20)
  },
  description: {
    fontSize: RFPercentage(2.2),
    marginTop:scale(5),
    fontWeight: 600,
    color: '#333'    ,fontFamily: 'Poppins_400Regular'

  },
  age: {
    fontSize: RFPercentage(3),
    color: '#666'
    ,fontFamily: 'Poppins_400Regular'
  },
});
