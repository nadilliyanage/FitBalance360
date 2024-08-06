import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { icons } from '../../constants';
import { useRouter } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from '../../context/GlobalProvider';


const Home = () => {
  const router = useRouter(); 

  
  const handleProfileNavigation = () => {
    router.push('../profile'); 
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{height:'100%'}} >
    <View className="w-full justify-center items-center mt-6 mb-12 px-4 ">
    <TouchableOpacity
      onPress={handleProfileNavigation}
      className="bg-primary rounded-full p-2 absolute right-4 top-1"
    >
        <Image
          source={icons.profile}
          resizeMode="contain"
          style={{ width: 24, height: 24, tintColor: '#FFA001', }} 
        />
      </TouchableOpacity>

     
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
