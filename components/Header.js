//Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Vily Xavier</Text>
      <Text style={styles.subtitle}>Studio de Tatuagem e Piercing</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80, 
    backgroundColor: '#B872FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, 
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Header;