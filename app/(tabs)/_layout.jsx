import React from 'react';
import { View, Image, Text } from 'react-native';
import { Tabs } from 'expo-router';

import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2 ">
      <Image
        source={icon}
        resizeMode="contain"
        style={{ tintColor: color }} 
        className="w-5 h-5"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color:color}}>
       {name}
    </Text>

    
    </View>
    
  );
};

const TabsLayout = () => {
  return (
    <>
    <Tabs
        screenOptions={{
            tabBarShowLabel:false,
            tabBarActiveTintColor:'#FFA001',
            tabBarInactiveTintColor:'#CDCDE0',
            tabBarStyle: {
                backgroundColor: '#161622',
                borderTopWidth: 1,
                borderTopColor: '#232533',
                height:80,
                borderTopLeftRadius: 30, 
                borderTopRightRadius: 30, 
                overflow: 'hidden',
            }
        }}
    >
      <Tabs.Screen
        name="sleep"
        options={{
          title: 'Sleep',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.sleep}
              color={color}
              name="Sleep"
              focused={focused}
            />
          ),
        }}
      />
     
      <Tabs.Screen
        name="foods"
        options={{
          title: 'Foods',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.food}
              color={color}
              name="Foods"
              focused={focused}
            />
          ),
        }}
      />
       <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="classes"
        options={{
          title: 'Classes',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.classes}
              color={color}
              name="Classes"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tips"
        options={{
          title: 'Tips',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.tips}
              color={color}
              name="Tips"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
    </>
  );
};

export default TabsLayout;
