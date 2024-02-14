import React from "react";
import { View, Text, Button,ScrollView,StyleSheet,Image, TextInput,TouchableOpacity,ImageBackground  } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import CircularButtonWithArrow from "../components/button";

const IngresarDatos =  ({navigation}) =>{
    
    const handlePress = () =>{
        navigation.navigate('Starbucks');
    };


    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>
                    Please fill in a few details below
                </Text>
            </View>
            <View>
                <Text style={styles.text}>
                    Full name *
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="your name"
                    keyboardType='default'
                    autoCapitalize="none"
                />
            </View>
            <View>
                <Text style={styles.text}>
                    Email *
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="e.g name@email.com"
                    keyboardType= 'email-address'
                    autoCapitalize="none"
                />
            </View>
            <View>
                <Text style={styles.text}>
                    Phone number *
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="+62"
                    keyboardType= 'phone-pad'
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <CircularButtonWithArrow navigation={navigation}/>
                </TouchableOpacity>
            </View>
            

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#ffffff",
        
    },
    text:{
        textAlign: 'left',
        marginLeft:30,
        marginTop: 50,
        color: '#00754a',
        fontSize:16
    },
    inputContainer: {
        width: '80%',
        alignSelf: 'center',
        marginBottom: 10,
      },
      input: {
        height: 40,
        borderBottomWidth: 1, 
        borderBottomColor: '#00754a', 
        paddingHorizontal: 10,
        borderRadius: 0, 
      },
      buttonContainer:{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20,
      }
});
export default IngresarDatos;