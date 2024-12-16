
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
  withTiming,
  Easing
} from 'react-native-reanimated';

export default function Home({navigation}) {

var [countryselected,setcountry]=useState("All")


const countries = [
  { name: 'Russia', flag: 'https://flagcdn.com/w320/ru.png' },
  { name: 'United States', flag: 'https://flagcdn.com/w320/us.png' },
  { name: 'Germany', flag: 'https://flagcdn.com/w320/de.png' },
  { name: 'France', flag: 'https://flagcdn.com/w320/fr.png' },
  { name: 'Italy', flag: 'https://flagcdn.com/w320/it.png' },
  { name: 'Canada', flag: 'https://flagcdn.com/w320/ca.png' },
  { name: 'Australia', flag: 'https://flagcdn.com/w320/au.png' },
  { name: 'United Kingdom', flag: 'https://flagcdn.com/w320/gb.png' },
  { name: 'Spain', flag: 'https://flagcdn.com/w320/es.png' },
  { name: 'Brazil', flag: 'https://flagcdn.com/w320/br.png' },
  { name: 'India', flag: 'https://flagcdn.com/w320/in.png' },
  { name: 'China', flag: 'https://flagcdn.com/w320/cn.png' },
  { name: 'Japan', flag: 'https://flagcdn.com/w320/jp.png' },
  { name: 'South Korea', flag: 'https://flagcdn.com/w320/kr.png' },
  { name: 'Mexico', flag: 'https://flagcdn.com/w320/mx.png' },
  { name: 'Argentina', flag: 'https://flagcdn.com/w320/ar.png' },
  { name: 'South Africa', flag: 'https://flagcdn.com/w320/za.png' },
  { name: 'Turkey', flag: 'https://flagcdn.com/w320/tr.png' },
  { name: 'Saudi Arabia', flag: 'https://flagcdn.com/w320/sa.png' },
  { name: 'Egypt', flag: 'https://flagcdn.com/w320/eg.png' },
  { name: 'Morocco', flag: 'https://flagcdn.com/w320/ma.png' },
  { name: 'Nigeria', flag: 'https://flagcdn.com/w320/ng.png' },
  { name: 'Kenya', flag: 'https://flagcdn.com/w320/ke.png' },
  { name: 'Indonesia', flag: 'https://flagcdn.com/w320/id.png' },
  { name: 'Vietnam', flag: 'https://flagcdn.com/w320/vn.png' },
  { name: 'Thailand', flag: 'https://flagcdn.com/w320/th.png' },
  { name: 'Sweden', flag: 'https://flagcdn.com/w320/se.png' },
  { name: 'Norway', flag: 'https://flagcdn.com/w320/no.png' },
  { name: 'Denmark', flag: 'https://flagcdn.com/w320/dk.png' },
  { name: 'Finland', flag: 'https://flagcdn.com/w320/fi.png' },
  { name: 'Netherlands', flag: 'https://flagcdn.com/w320/nl.png' },
  { name: 'Belgium', flag: 'https://flagcdn.com/w320/be.png' },
  { name: 'Switzerland', flag: 'https://flagcdn.com/w320/ch.png' },
  { name: 'Portugal', flag: 'https://flagcdn.com/w320/pt.png' },
  { name: 'Greece', flag: 'https://flagcdn.com/w320/gr.png' }
];




const zodiacSigns = [
  { name: 'Aries', dates: 'March 21 - April 19', element: 'Fire', icon: 'zodiac-aries' },
  { name: 'Taurus', dates: 'April 20 - May 20', element: 'Earth', icon: 'zodiac-taurus' },
  { name: 'Gemini', dates: 'May 21 - June 20', element: 'Air', icon: 'zodiac-gemini' },
  { name: 'Cancer', dates: 'June 21 - July 22', element: 'Water', icon: 'zodiac-cancer' },
  { name: 'Leo', dates: 'July 23 - August 22', element: 'Fire', icon: 'zodiac-leo' },
  { name: 'Virgo', dates: 'August 23 - September 22', element: 'Earth', icon: 'zodiac-virgo' },
  { name: 'Libra', dates: 'September 23 - October 22', element: 'Air', icon: 'zodiac-libra' },
  { name: 'Scorpio', dates: 'October 23 - November 21', element: 'Water', icon: 'zodiac-scorpio' },
  { name: 'Sagittarius', dates: 'November 22 - December 21', element: 'Fire', icon: 'zodiac-sagittarius' },
  { name: 'Capricorn', dates: 'December 22 - January 19', element: 'Earth', icon: 'zodiac-capricorn' },
  { name: 'Aquarius', dates: 'January 20 - February 18', element: 'Air', icon: 'zodiac-aquarius' },
  { name: 'Pisces', dates: 'February 19 - March 20', element: 'Water', icon: 'zodiac-pisces' },
];



const [modalVisibl, setModalVisibl] = useState(false);
  const [selectedSign, setSelectedSign] = useState(zodiacSigns[0]);

  const openModal = (sign) => {
    setSelectedSign(sign);
    setModalVisibl(false);
  };

  const closeModal = () => {
    setModalVisibl(false);
    setSelectedSign(null);
  };

  const renderSign = ({ item }) => (
    <TouchableOpacity style={styles.signItem} onPress={() => openModal(item)}>
      <MaterialCommunityIcons name={item.icon} size={24} color="#ff8c00" />
      <Text style={styles.signName}>{item.name}</Text>
    </TouchableOpacity>
  );







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

const [filters, setFilters] = useState({
    age: '18-30',
    country: 'Russia',
    // Add more filters as needed
  });

  // Function to update filter state
  const updateFilter = (filterType, value) => {
    setcountry(value)
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

/*********************************** */


const [ageRange, setAgeRange] = useState([18, 30]); // Default age range
  const [country, setCountry] = useState('Russia'); // Default country

  // Reanimated shared value for the animated filter panel
  const translateY = useSharedValue(-300); // Initially offscreen


  const applyFilters = () => {
    // Handle applying filters logic
    console.log('Filters applied:', { ageRange, country });
  };


/******************************* */
const [appearuser,setappearuser]=useState([
  {
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
]
);

const users = [
  {
    name: "Kristina",
    age: 22,
    country: "Russia",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Ur61KRdVFQnivAdatD5wwqCgFHuZyDTtuuaP2nlq8QpB3E1sUu5eS5SM1ori2xqSdrk&usqp=CAU",
    flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
    description: "Kristina is a cheerful and adventurous young woman from Russia with an infectious zest for life. She is passionate about photography, often seeking out picturesque landscapes and hidden gems in nature. When she's not behind the camera, Kristina loves trying out new cuisines, learning about different cultures, and engaging in outdoor sports like hiking and kayaking. Her dream is to travel the world and document her journey through a stunning photo series."
  },
  {
    name: "Anna",
    age: 19,
    country: "Russia",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXK2ACUiysrZ0Hrth1x4Ngslu_Th6H1k_zoz-0GDjZxurBYyVwekEz5EiENGjJFJaxMiQ&usqp=CAU",
    flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
    description: "Anna is a creative soul and an aspiring artist with a passion for vibrant, abstract paintings. She finds inspiration in Russia's vast landscapes, capturing the essence of its beauty through her work. Aside from painting, Anna enjoys visiting art galleries, writing poetry, and exploring Russia’s rich history. Her ultimate goal is to have her own art exhibition, sharing her vision with people around the world."
  },
  {
    name: "Sophia",
    age: 25,
    country: "Germany",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xmAxfA0E6O28mpk-pqyUm1wW6tNQ1LvOWOGVUqEMQNsF9kPcacmEcBVehkU2zolWTQY&usqp=CAU",
    flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
    description: "Sophia is a driven and innovative professional from Germany, working at the forefront of the tech industry. Her fascination with artificial intelligence and sustainable technology fuels her projects. Outside of work, Sophia loves exploring Germany’s historic castles, cycling through scenic routes, and attending technology expos. She’s also a budding chef who enjoys experimenting with international recipes and hosting dinner parties for her friends."
  },
  {
    name: "Emma",
    age: 21,
    country: "France",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR9PpKMdBGXsl87fCt1s6rV3DvTVaW-RpSZWVVvO5EB6nTmG2VORFa_1qKu5N2M57tIi4&usqp=CAU",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    description: "Emma is a nature enthusiast from France who finds joy in the simple pleasures of life. Whether it’s walking through lavender fields in Provence or enjoying a quiet afternoon reading by a lake, she always feels at home in the outdoors. Emma also has a talent for photography, capturing the breathtaking beauty of the French countryside. She dreams of publishing a coffee-table book featuring her best photographs."
  },
  {
    name: "Isabella",
    age: 23,
    country: "Italy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6r2FnNffOu6TUMq1YFMTpoudZ3sqg1QWpFuBjJnVsH7JQPfs_yCEFVPJHKeKnAKJAHmU&usqp=CAU",
    flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    description: "Isabella is an adventurous and passionate foodie who loves exploring Italy’s culinary delights. From handmade pasta to delectable desserts, she enjoys discovering traditional recipes and the stories behind them. Isabella also has a deep appreciation for architecture and spends her weekends admiring Italy’s historic landmarks. Her dream is to open a small café that combines her love for food and design."
  },
  {
    name: "Olivia",
    age: 20,
    country: "United States",
    img: "https://i.pinimg.com/736x/a6/1b/4f/a61b4f95bf4aa23374de85bd90c67fce.jpg",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    description: "Olivia is an ambitious and community-oriented student from the United States. She’s pursuing a degree in literature and enjoys participating in local book clubs and poetry slams. When not studying, Olivia spends her time volunteering at shelters, mentoring young students, and organizing neighborhood clean-up drives. Her ultimate goal is to write a novel that inspires people to make a positive impact in their communities."
  },
  {
    name: "Mia",
    age: 18,
    country: "Canada",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaRLUClYvQGqB42EgFNdD_G6zBCLanFBrDA&s",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
    description: "Mia is a spirited and energetic young woman from Canada with an infectious love for adventure. She enjoys hiking in the Rockies, camping under the stars, and kayaking in pristine lakes. Mia is also a passionate advocate for wildlife conservation and frequently volunteers for environmental causes. Her dream is to backpack across Canada, exploring its diverse landscapes and cultures."
  },
  {
    name: "Ava",
    age: 24,
    country: "Australia",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReTvwEYcVF5Wf20NMtebQ_yor16CNriuXnxdIrQ_2Nz8mMXhDya7W4QQk4ErhkzIuGFRY&usqp=CAU",
    flag: "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
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
    
 if(i<appearuser.length-1){
    setI((prevIndex) => (prevIndex +1));
    }

  };

  // Function to handle close icon press
  const handleClosePress = () => {
    closeIconScale.value = withSpring(1.5, {}, () => {
      closeIconScale.value = withSpring(1);
    });
    // Add a new close icon to the state to animate it floating upwards
    if(i<appearuser.length-1){
    setI((prevIndex) => (prevIndex +1));
    }
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
      filterTranslation.value = withTiming(height+verticalScale(44), { duration: 700, easing: Easing.inOut(Easing.ease) });
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


React.useEffect(()=>{

if(countryselected=="All"){
  setappearuser(appearuser)

}

else{
  setI(0)
  setappearuser([])
  var finalfilter=[]
users.map((x)=>{
    
if(x.country==countryselected){
  console.log(x);
  finalfilter.push(x);
  
}

})

setappearuser(finalfilter);

setappearuser(i=>{console.log("userlengthafterfilter:"+i.length); return i});
}

},[countryselected])







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
        
      translateY.value = withSpring(-height * 0.5, { duration: 8000 });
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
    <View style={{ flex: 1,backgroundColor:'white' }}>
      
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

      <TouchableOpacity onPress={()=>{handleFilterPress()}}>
          <AntDesign name="filter" size={RFPercentage(6)} color="#a4a2a2" />
        </TouchableOpacity>
      </View>
 <LinearGradient
          colors={[ 'white', '#fe6292','white']}
          style={{
            flex: 1,height: '80%', padding: '10%'
          }}
        >
      <View style={{  }}>
      {appearuser.length>0 && 
        <View
          style={{
            height: verticalScale(380),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginLeft:scale(-8)
            ,borderRadius:30 
          }}>
          <View style={{ borderRadius:30 }}>
           
           
            <TouchableOpacity style={{}} onPress={()=>{ handeldetailPress()}}>
              <Image
                style={{ width:scale(300), height: verticalScale(341), marginLeft: '0%',borderRadius:30,
             resizeMode:'cover'
                  }}
                source={{
                  uri: appearuser[i].img,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>{handeldetailPress()}}
              style={{
                width: '100%',
                height: height * 0.501,
                backgroundColor: 'black',
                position: 'absolute',
                borderRadius:25,
                opacity: 0.68,
                zIndex: 1,
              }}></TouchableOpacity>
            <Text
              style={{
                color: 'white',
                width:'100%',
                fontSize: RFPercentage(5),
                position: 'absolute',
                zIndex: 44,
                marginLeft: '7%',
                marginTop:verticalScale(180),fontFamily: 'Poppins_400Regular' 
              }}>
              {appearuser[i].name}
            </Text>
            <Text
              style={{
                color: 'white',
                width:'100%',
                fontSize: RFPercentage(3.5),
                position: 'absolute',
                zIndex: 44,
                marginLeft: '7%',
                marginTop: verticalScale(220),fontFamily: 'Poppins_400Regular' 
              }}>
            { appearuser[i].age}
            </Text>
         
   <Text
              style={{
                color: 'white',
                width:'100%',
                fontSize: RFPercentage(3.4),
                position: 'absolute',
                zIndex: 44,
                marginLeft: '7%',
                marginTop: verticalScale(250),fontFamily: 'Poppins_400Regular' 
              }}>
            { appearuser[i].country}
            </Text>

      


          </View>
      
        </View>
}
        <View
          style={{
            height: '20%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={handleClosePress}>
            <Animated.View style={animatedCloseStyle}>
              <AntDesign name="closecircleo" size={RFPercentage(8)} color="#9d9b9b" />
            </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{ handleHeartPress();}}>
            <Animated.View style={animatedHeartStyle}>
              <AntDesign name="heart" size={RFPercentage(8)} color="red" />
            </Animated.View>
          </TouchableOpacity>
            
        </View>

        {hearts.map((heart) => (
          <FloatingHeart key={heart} id={heart} />
        ))}
      
    
      </View>
 
      </LinearGradient>

      <View
        style={{
          height: '10%',
          display: 'flex',
          borderTopColor: '#ebeaea',
          borderTopWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
    <TouchableOpacity 
onPress={()=>{navigation.navigate('6',{n:1})}}>
          <MaterialCommunityIcons name="mother-heart" size={RFPercentage(5)} color="red" />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="message1" size={RFPercentage(5)} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="user" size={RFPercentage(5)} color="#6e6c6c" />
        </TouchableOpacity>
      
     </View>
      







 <Animated.View style={[styles.filterContainer, animatedFilterStyle]}>
      <TouchableOpacity onPress={()=>{handleFilterPress()}} style={styles.closeButton}>
        <AntDesign name="closecircle" size={RFPercentage(4)} color="gray" />
      </TouchableOpacity>

      <Text style={styles.filterTitle}>Filter</Text>

      {/* Age filter options */}
      <Text style={ {
    marginTop: verticalScale(5),
    marginLeft:scale(15),
    fontSize: RFPercentage(3.2),
    color: 'black',
  }}>
        Age: {filters.age}
      </Text>
      <View style={styles.optionContainer}>
        {['18-30', '31-45', '46-60'].map((age) => (
          <TouchableOpacity key={age} onPress={() => updateFilter('age', age)} style={styles.optionButton}>
            <Text style={styles.optionText}>{age}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Country filter options */}
      <Text style={styles.filterOption}>
        Country: {filters.country}
      </Text>
      <View style={{height:verticalScale(175)}}>
      <ScrollView>
      {countries.map((country) => (
    <TouchableOpacity
      key={country.name}
      onPress={() => updateFilter('country', country.name)}
      style={styles.optionButton}
    >
      <Image
        source={{ uri: country.flag }}
        style={{ width: 40, height: 25, marginRight: 10 }} // Adjust size as needed
      />
    </TouchableOpacity>
  ))}
</ScrollView>

      </View>
      <TouchableOpacity onPress={()=>{setModalVisibl(true)}}>


  <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
    <Text style={styles.filterOption}>
        Sign: 
      </Text> 
      <View style={{marginTop:scale(20),marginLeft:scale(10)}}>
  <MaterialCommunityIcons name={selectedSign.icon} size={24} color="#ff8c00" />
 </View>
<Text style={{marginTop:scale(35),marginLeft:scale(7),fontSize: RFPercentage(2.2),color:'#717171'}} >{selectedSign.name}</Text>
  </View>     
 
 </TouchableOpacity>



 
     {modalVisibl==true && ( <FlatList
        data={zodiacSigns}
        renderItem={renderSign}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.signList}
      />
     )}



    </Animated.View>



{
  appearuser.length >0 &&


  <Animated.View style={[styles.detailContainer, animateddetail]}>

<TouchableOpacity onPress={closedetailPress} style={{position:'absolute',top:verticalScale(25),left:scale(15),zIndex:5000}}>
<AntDesign name="leftcircle" size={RFPercentage(5)} color="#f93804" />
</TouchableOpacity>
       <Image
        source={{ uri:  appearuser[i].img }} // Replace with your image URL
        style={styles.image}
      />
      <View style={styles.textContainer}> 
 <Image
        source={{ uri: appearuser[i].flag }} // User's flag
        style={{ width: scale(25), height: scale(15), marginRight: scale(10) }}
      />
      <Text style={styles.age}>Age: {appearuser[i].age}</Text>

      <ScrollView style={{marginTop:scale(15)}}>
        <Text style={styles.description}>
   {appearuser[i].description}
        </Text>
       </ScrollView>
      </View>
       
      </Animated.View>

}




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
    paddingVertical: verticalScale(5),
    backgroundColor: 'white',
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
    marginTop:verticalScale(12),
    marginRight:scale(10)
  },
  filterTitle: {
    fontSize: RFPercentage(4),
    fontWeight: 'bold',marginLeft:scale(15),
    color: '#FF6F61',
    marginBottom: 15,
    marginTop:verticalScale(5)
  },
  filterOption: {
    marginTop: verticalScale(35),
    marginLeft:scale(15),
    fontSize: RFPercentage(3.2),
    color: 'black',
  },
  optionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height:verticalScale(100),
    marginTop: verticalScale(5),
  },
  optionButton: {
    backgroundColor: '#FF6F61',
    borderRadius: 8,
    paddingVertical: verticalScale(10),
    width:scale(100),
 display:'flex',
 flexDirection:'row',
 justifyContent:'center',
    marginLeft:scale(20),
    marginTop:verticalScale(20),
    elevation: 3,
    transition: 'background-color 0.3s ease',
  },
  optionText: {
    fontSize: RFPercentage(2.2),
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
    padding:moderateScale(10),
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
  }, signList: {
    paddingHorizontal: 20,
  },
  signItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    backgroundColor:'white',
    borderBottomColor: '#eee',
  },
  signName: {
    fontSize: 18,
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  modalDates: {
    fontSize: 16,
    color: '#555',
  },
  modalElement: {
    fontSize: 16,
    color: '#ff8c00',
    marginTop: 10,
  },

  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});