import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import StartNewTripCard from './../../components/MyTrips/StartNewTripCard'

export default function Mytrip() {

  const [userTrips, setuserTrips] = useState([]);
  return (
    <View style={{
      padding: 25,
      paddingTop: 30,
      height: '100%'
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
      }}>
        <Text style={{
          fontSize: 30,
          paddingTop: 40,
          fontFamily: 'outfit-bold'
        }}>
          My Trips
        </Text>
        <TouchableOpacity style={{
          paddingTop: 45,

        }}>
          <Ionicons name="add-circle" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View>
        {
          userTrips?.length===0?<StartNewTripCard/>:null
        }

      </View>
    </View>
  )
}