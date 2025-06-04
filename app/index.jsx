//index.jsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import * as Font from 'expo-font';
//export default function Index() {

export default function Index({ navigation }) {
  return (

    <View style={styles.container}>
      <Image source={require('../assets/images/vilyperfil.jpg')} style={styles.logo} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.actions} />
        <Text style={styles.title}>Vily Xavier</Text>
        <Text style={styles.subtitle}>STUDIO DE TATUAGEM E PIERCING</Text>

        <View style={styles.specialtiesContainer}>
          <Text style={styles.mainSpecialtiesTitle}>ESPECIALIDADES</Text>

          <View style={styles.columnsWrapper}>
            <View style={styles.specialtyColumn}>
              <Text style={styles.columnTitle}>Tatuagens</Text>
              <Text style={styles.specialtyItem}>• Cobertura de Cicatrizes</Text>
              <Text style={styles.specialtyItem}>• Tatuagens Coloridas</Text>
              <Text style={styles.specialtyItem}>• Tatuagens Rasteladas</Text>
              <Text style={styles.specialtyItem}>• Finelines</Text>
              
            </View>

            <View style={styles.specialtyColumn}>
              <Text style={styles.columnTitle}>Piercings</Text>
              <Text style={styles.specialtyItem}>• Perfurações Corporais</Text>
              <Text style={styles.specialtyItem}>• Perfurações Íntimas</Text>
              <Text style={styles.specialtyItem}>• Microdermal</Text>
              <Text style={styles.specialtyItem}>• Surface</Text>
               <Text style={styles.specialtyItem}>• Projetos Auriculares</Text>
            </View>
          </View>
        </View>
<Pressable 
          style={styles.portfolioButton} 
          onPress={() => {
            console.log('Navegando para o portfólio');
            navigation.navigate('Portfolio'); // Navegação para a tela de portfólio
          }}
        >
          <Text style={styles.portfolioButtonText}>Ver Portfólio</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Portfolio" component={PortfolioScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40, 
    backgroundColor: "black",
    alignItems: "center", // Centraliza o conteúdo horizontalmente
  },
  logo: {
    width: 300,
    height: 300,
    borderRadius: 150, // Ajustado para ser um círculo perfeito
    marginBottom: 20,
  },
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 20,
    width: '100%',
  },
  title: {
    fontSize: 50,
    color: "#8A2BE2",
    marginBottom: 5,
    textAlign: 'center', // Centraliza o texto
  },
  subtitle: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  mainSpecialtiesTitle: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center', // Centraliza o texto
    paddingBottom: 15,
  },
  specialtiesContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    padding: 20,
  },
  columnsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Ajustado para ocupar toda a largura
  },
  specialtyColumn: {
    width: '48%', // Mantém a mesma largura para ambas as colunas
    alignItems: 'center', // Centraliza o conteúdo da coluna
  },
  columnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center', // Centraliza o título da coluna
    color: 'black',
  },
  specialtyItem: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
    textAlign: 'center', // Centraliza o texto dos itens
  },
  portfolioButton: {
    width: '80%', // Ajuste a largura do botão para 80% da tela
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#5E06A2',
    borderRadius: 30,
    alignItems: 'center', // Centraliza o texto dentro do botão
    borderRadius: 30,
  },
  portfolioButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    
  },
});