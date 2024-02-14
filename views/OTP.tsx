import React from "react";
import { View, Text, Button,ScrollView,StyleSheet,Image, TextInput,TouchableOpacity,ImageBackground  } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const OTP = ({navigation}) => {

    const handlePress = () =>{
        navigation.navigate('DATOS');
    };

    return(
        <SafeAreaView style={styles.container}>   
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text2}>
                        You only have to enter an OTP code we sent{'\n'}
                        via SMS to your registered phone number{'\n'}
                        +628803210321
                    </Text>
                </View>
                <View style={[styles.textContainer, { marginTop: 20}]}>
                    <Text style={styles.text}> OTP*</Text>
                </View>
                <View style={styles.container}>       
            <View style={{ flexDirection: 'row' }}>
        {[...Array(4).keys()].map((index) => (
          <View key={index} style={{ marginHorizontal: 30 }}>
            <TextInput
              style={{
                borderWidth: 2,
                borderColor: 'gray',
                padding: 10,
                width: 40,
                textAlign: 'center',
                borderRadius: 25,
                marginTop: 10
              }}
              placeholder="*"
              onChangeText={(text) => {
              }}
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
        ))}      
      </View>   
    </View>
              </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>SEND</Text>
            </View>
        </TouchableOpacity>   
            </ScrollView>
            <View style={styles.container2}>
            <ImageBackground source={require('../images/Starbucks-Logo1.png')} style={styles.background}>
            </ImageBackground> 
            </View>
              
        </SafeAreaView>
    );
};

const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
      },
      container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: -60,
        marginLeft:-70,
      },
      text2:{
        fontWeight:'bold',
        textAlign: 'left',
        marginBottom: 10,
        color: '#00754a',
        fontSize: 16,
      },
      background: {
        width:380,
        height:380,
        marginTop:-50
      },
      textContainer: {
        alignItems: 'center',
        marginTop: 50
      },
      text: {
        fontWeight:'bold',
        textAlign: 'left',
        marginBottom: 10,
        color: '#00754a',
        marginLeft: -280,
        fontSize: 16,
      },
      button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#286e4c',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:100
      },
      buttonText: {
        color: 'white',
      },
      buttonContainer: {
        position: 'relative',
        right: -330,
        marginTop:-50

      }
})

export default OTP;