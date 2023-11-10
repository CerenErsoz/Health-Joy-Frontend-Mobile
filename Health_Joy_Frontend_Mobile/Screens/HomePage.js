import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Navbar from '../Components/Navbar';
const HomePage = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.viewStyle}>
        <TouchableOpacity style={styles.touchableOpacity}>
          <View style={styles.buttonContent}>
            <Image
              style={styles.foodIcon}
              source={require('../assets/home-page-icons/food-icon.png')}
            />
            <Text style={styles.textFood}> Foods </Text>
            <Image
              style={styles.cosmeticIcon}
              source={require('../assets/home-page-icons/arrow.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <View style={styles.buttonContent}>
            <Image
              style={styles.beverageIcon}
              source={require('../assets/home-page-icons/beverage-icon.png')}
            />
            <Text style={styles.text}>Beverages</Text>
            <Image
              style={styles.cosmeticIcon}
              source={require('../assets/home-page-icons/arrow.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <View style={styles.buttonContent}>
            <Image
              style={styles.cosmeticIcon}
              source={require('../assets/home-page-icons/cosmetic-icon.png')}
            />
            <Text style={styles.text}>Cosmotics</Text>
            <Image
              style={styles.cosmeticIcon}
              source={require('../assets/home-page-icons/arrow.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 180,
  },
  touchableOpacity: {
    width: 275,
    height: 55,
    backgroundColor: '#D4FAE8',
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 16,
    fontStyle: 'italic',
    marginHorizontal: 60,
  },
  textFood: {
    fontSize: 16,
    fontStyle: 'italic',
    marginHorizontal: 67,
  },
  foodIcon: {
    width: 30,
    height: 30,
    marginRight: 6,
  },
  cosmeticIcon: {
    width: 30,
    height: 30,
  },
  beverageIcon: {
    width: 30,
    height: 30,
    marginLeft: 4,
  },
});

export default HomePage;
