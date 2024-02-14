import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import DrawerNavigator from '../components/Drawer';

const MainScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>STARBUCKS</Text>
        <Text style={styles.greetingText}>Good Morning, Wica Delatoya</Text>
        <View style={styles.rewardCard}>
          <Text style={styles.rewardText}>STARBUCKS REWARD Green Level</Text>
          <Text style={styles.pointsText}>21 / 100</Text>
          <Text style={styles.nextRewardText}>19 Stars to Next Reward</Text>
        </View>
      </View>

      <View style={styles.cardBalanceContainer}>
        <Text style={styles.cardBalanceText}>Card Balance</Text>
        <Text style={styles.amountText}>Rp 593.000,-</Text>
      </View>

      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Top-up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Report Lost</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.productGrid}>
        {/* Aquí irían tus componentes Image o TouchableOpacity con imágenes de productos */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#00704A',
    padding: 20,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  greetingText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 5,
  },
  rewardCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
  },
  rewardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pointsText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
  nextRewardText: {
    fontSize: 14,
    color: '#686868',
    marginTop: 5,
  },
  cardBalanceContainer: {
    padding: 20,
    backgroundColor: '#D4E9E2',
  },
  cardBalanceText: {
    fontSize: 16,
  },
  amountText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  button: {
    backgroundColor: '#D4E9E2',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productGrid: {
    // Definir estilos para la cuadrícula de productos
  },
});

export default MainScreen;