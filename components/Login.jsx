import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'


export default function Login() {

    const router = useRouter();

    return (
        <View>
            <Image source={require('./../assets/images/pexels-vince-2265876.jpg')}
                style={{
                    width: '100%',
                    height: 600,
                }} />

            <View style={styles.container}>
                <Text style={{
                    fontSize: 30,
                    fontFamily: 'outfit-bold',
                    textAlign: 'center'
                }}>AI Travel PLANNER</Text>

                <Text style={{
                    fontFamily: 'outfit-reg',
                    padding: 5,
                    fontSize: 15,
                    color: Colors.GRAY,
                    marginTop: '5%'
                }}>A Verizon Community forum discussion highlighting issues with the
                    reliability and functionality of Travel while traveling
                    internationally. The thread emphasizes the importance of contacting
                    customer service  if the Travel Pass Authorization text is not
                    received.</Text>

                <View style={styles.SubContainer}>
                    <TouchableOpacity style={styles.button} onPress={()=>router.push('auth/signIn')}>
                        <Text style={{ fontSize: 15, color: 'white', padding: 10, textAlign: 'center', fontFamily: 'outfit-med' }}>Let's Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        height: '100%',
        marginTop: -20,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 15

    },
    SubContainer: {
        backgroundColor: 'skyblue',
        width: '80%',
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 99,
        marginLeft: '10%',
        marginTop: '5%'

    }
})
