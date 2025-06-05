//SpecialtyList.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SpecialtyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Especialidades</Text>
      <Text style={styles.item}>• Tatuagens Personalizadas</Text>
      <Text style={styles.item}>• Tatuagens Tradicionais</Text>
      <Text style={styles.item}>• Tatuagens em Aquarela</Text>
      <Text style={styles.item}>• Perfurações Corporais</Text>
      <Text style={styles.item}>• Perfurações de Nariz</Text>
      <Text style={styles.item}>• Perfurações de Orelha</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  title: {
    fontSize: 20,
   
    marginBottom: 10,
    textAlign: 'center', 
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default SpecialtyList;