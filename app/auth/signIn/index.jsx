import { View, Text, TextInput, TouchableOpacity,ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { Colors } from './../../../constants/Colors'
import { StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './../../../configs/FirebaseConfig'

export default function signIn() {

  const router = useRouter();

  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const SignIn = () => {

    if (!email && !password) {
      ToastAndroid.show('Please Enter all details', ToastAndroid.LONG)
      return;
    }
    const auth = getAuth();


    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        router.replace('/mytrip');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if(errorCode === 'auth/invalid-credential'){
          ToastAndroid.show('Invalid Input', ToastAndroid.LONG)
        }
      });
  }

  return (
    <View style={{
      flex: 1,
      marginTop: 30,
      padding: 20
    }}>

      <TouchableOpacity onPress={() => { router.back() }}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{
        fontSize: 35,
        fontFamily: 'outfit-bold',
        marginTop: 80
      }} >Welcome back! Glad</Text>

      <Text style={{
        fontSize: 30,
        fontFamily: 'outfit-bold',
        marginTop: 10,
        color: Colors.GRAY
      }}>to see you Again!</Text>

      <Text style={{
        fontSize: 30,
        fontFamily: 'outfit-bold',
        marginTop: 10
      }}>Let's Sign YOU In </Text>

      <View>
        <TextInput style={{
          padding: 15,
          borderWidth: 1,
          borderRadius: 15,
          borderColor: Colors.GRAY,
          marginTop: 80
        }} placeholder='Enter your email'
          onChangeText={(value) => setemail(value)} />
      </View>

      <View>
        <TextInput style={{
          padding: 15,
          borderWidth: 1,
          borderRadius: 15,
          borderColor: Colors.GRAY,
          marginTop: 25,
          marginBottom: 35
        }} secureTextEntry={true} placeholder='Enter password'
          onChangeText={(value) => setpassword(value)} />
      </View>

      <View style={styles.SubContainer}>
        <TouchableOpacity style={styles.button} onPress={SignIn}>
          <Text style={{ fontSize: 15, color: 'white', padding: 10, textAlign: 'center', }}>
            Sign In</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.SubContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('auth/signUp')}>
          <Text style={{ fontSize: 15, color: 'white', padding: 10, textAlign: 'center', }}>
            Create an Account</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  SubContainer: {
    backgroundColor: 'skyblue',
    width: '100%',
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 99,
    marginTop: 20

  }
})