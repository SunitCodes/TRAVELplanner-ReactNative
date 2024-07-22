import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'black'
    }}
    >
      <Tabs.Screen name='explore'
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ colors }) => <Ionicons name="earth" size={24} color="black" />
        }} />
      <Tabs.Screen name='mytrip'
        options={{
          tabBarLabel: 'My Trip',
          tabBarIcon: ({ colors }) => <Ionicons name="paper-plane" size={24} color="black" />
        }} />
      <Tabs.Screen name='profile'
        options={{
          tabBarLabel: 'My Profile',
          tabBarIcon: ({ colors }) => <Ionicons name="person" size={24} color="black" />
        }} />
    </Tabs>
  )
}
