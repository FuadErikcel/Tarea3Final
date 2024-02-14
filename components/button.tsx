import React from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const CircularButtonWithArrow = ({navigation}) => {

  const handlePress = () =>{
    navigation.navigate('Starbucks');
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Button
        buttonStyle={{
          borderRadius: 50,
          width: 60,
          height: 60,
          backgroundColor: '#00754a',
        }}
        onPress={handlePress}
        icon={
            <Image
            source={require('../images/355-3555445_cotizar-flecha-blanca-png.png')}
            style={{ width: 15, height: 10 }}
          />
        }
        iconRight
        containerStyle={{ margin: 10 }}
      />
    </View>
  );
};

export default CircularButtonWithArrow;
