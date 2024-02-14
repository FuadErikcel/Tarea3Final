import React from "react";
import { View, Text, Button,ScrollView,StyleSheet,Image, TextInput,TouchableOpacity,ImageBackground  } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


const Inicio = ({navigation}) => {
    const handlePress = () =>{
        navigation.navigate('OTP');
    };
    return (
        
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../images/fondo1.png')} style={styles.background}>  
            <ScrollView>
                <Image
                    style={styles.logo}
                    source={require('../images/starbucks_logo_icon_170705.png')}
                    resizeMode="contain"
                />   
                <View style={styles.container}>
                    <Text style={styles.seccionHeader}>Log in with Email</Text>
                        <View style={styles.inputsContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry={true}
                                autoCapitalize="none"
                            />
                        </View>
                    <View>
                        <TouchableOpacity>
                            <Image style={styles.img} 
                            source={require('../images/Kn8zA.png')}/>                           
                        </TouchableOpacity>
                        <Text style={styles.text}>Show Password</Text>
                        <Text style={styles.text2}>Forgot?</Text>      
                    </View>
                    <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button} onPress={handlePress}>
                        <Text style={styles.buttonText}>SIGN IN</Text>
                    </TouchableOpacity>
                    </View>                   
                </View>
                <Text style={styles.seccion}>by Logging in, you agree to the{'\n'}Privacy Policy & Terms of Service
                        {'\n'}{'\n'}{'\n'}not a member?
                
                </Text>   
            </ScrollView>
           
            </ImageBackground>   
        </SafeAreaView>
          
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    seccion:{
        textAlign: 'center',
        marginTop: 195,
        color:"#ffffff",
        fontWeight:'bold'
    },
    logo: {
      width: 230,
      height: 200,
      alignSelf: 'center',
    },
    seccionHeader: {
      fontSize: 17,
      textAlign: 'left',
      paddingHorizontal: 40, 
      marginTop: 1,
      color: '#00754a',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#00754a',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        alignSelf: 'center',
        borderRadius: 10,
      },
      inputsContainer: {
        alignItems: 'center',
        marginTop: 10, 
      },
      img:{
        height:20,
        width: 20,
        marginTop: 5,
        marginLeft: 40, 
    },
    btn:{
        flexDirection: 'row',
    },
    text: {
        marginLeft: 65, 
        fontSize: 14,
        marginTop: -20,
        marginHorizontal: 15,
        color: '#00754a',
      },
      text2:{
        marginRight: 10, 
        fontSize: 14,
        marginTop: -20,
        marginHorizontal: 313,
        color: '#00754a',
      },
      button: {
        backgroundColor: '#286e4c', 
        paddingVertical: 10, 
        paddingHorizontal: 128, 
        borderRadius: 50, 
        borderWidth: 1, 
        borderColor: '#286e4c', 
      },
      buttonText: {
        color: 'white', 
        fontSize: 16,
      },
      containerButton: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 45,
        paddingVertical: 65, 
      },
      background: {
        flex: 1, 
        resizeMode: 'cover', 
        justifyContent: 'center',
        alignItems: 'center',
        
      },
  });



export default Inicio;