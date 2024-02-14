import React from "react";
import { SafeAreaView, View, Text } from "react-native";


const Detalle = ({navigation, route}) =>{
    
    const params = route.params;


    const handelOnPress = () =>{
        navigation.navigate()
    }

    return(
        <SafeAreaView>
            <View>
                <Text>Pantalla de Detalles</Text>
            </View>
        </SafeAreaView>

    )
}