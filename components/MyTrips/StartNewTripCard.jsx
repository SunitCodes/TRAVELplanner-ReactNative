import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { Colors } from './../../constants/Colors';

export default function StartNewTripCard() {
    return (
        <View style={{
            display:'flex',
            alignItems:'center',
            paddingTop: 100
        }}>
            <FontAwesome6 name="location-dot" size={35} color="black" />
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 25,
                paddingTop: 20
            }}>No Trips planned yet</Text>

            <Text style={{
                fontSize: 18,
                fontFamily: 'outfit-reg',
                color: Colors.GRAY,
                paddingTop: 15,
                textAlign: 'center'
            }}>Looks like it's time to plan a new Travel experience! Get Started below</Text>

            <TouchableOpacity style={{
                backgroundColor: 'black',
                width: '50%',
                padding: 15,
                borderRadius: 20,
                marginTop:20
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontFamily: 'outfit-med',
                    fontSize: 15,
                    color: 'white'
                }}>Start a new Trip</Text>
            </TouchableOpacity>

        </View>
    )
}