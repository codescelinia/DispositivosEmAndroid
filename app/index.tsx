//Index.tsx
import React, { useState } from 'react';
import { View, Image, ScrollView, StyleSheet, Text, Pressable } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PortfolioScreen from '../../screens/PortfolioScreen';
import ActionButton from '../components/ActionButton';

const Index: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [count, setCount] = useState(0);

  const handleNavigateToPortfolio = () => {
    navigation.navigate('Portfolio');
  };

  const handleNavigateToTatuagens = () => {
    navigation.navigate('Tatuagem');
  };

  const handleNavigateToPiercings = () => {
    navigation.navigate('Piercing');
  };

  const handlePress = () => {
    setCount(count + 1);
    console.log(`Botão clicado ${count + 1} vezes`);
  };

  return (
    <View style={styles.container}>
       <Image source={require('../assets/images/vilyperfil.jpg')} style={styles.logo} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.actionsContainer}>
          <ActionButton
            onPress={handleNavigateToPortfolio}
            title="Ver Portfólio"
          />
          <ActionButton
            onPress={handleNavigateToTatuagens}
            title="Ver Tatuagens"
          />
          <ActionButton
            onPress={handleNavigateToPiercings}
            title="Ver Piercings"
          />
        </View>

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
            navigation.navigate('Portfolio');
          }}
        >
          <Text style={styles.portfolioButtonText}>Ver Portfólio</Text>
        </Pressable>
      </ScrollView>

      <ActionButton
        onPress={() => handlePress()}
        title="Clique aqui"
      />
    </View>
  );
};

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Portfolio" component={PortfolioScreen} />
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
    textAlign: 'center', 
  },
  portfolioButton: {
    width: '80%', 
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#5E06A2',
    borderRadius: 30,
    alignItems: 'center', 
    //borderRadius: 30,
  },
  portfolioButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    
  },

 actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
 }, 
})