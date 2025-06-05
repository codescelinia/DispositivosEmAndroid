//Footer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2021 Vily Xavier - Todos os direitos reservados</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 60,
    backgroundColor: '#B872FF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', 
    bottom: 0, 
  },
  text: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center', 
  },
});

export default Footer;