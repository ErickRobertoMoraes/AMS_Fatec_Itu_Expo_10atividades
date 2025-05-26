import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function exerc6() {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <Text style={styles.titulo}>Explorando o Universo</Text>

      <View style={styles.card}>
        <Text style={styles.texto}>
          O universo é vasto e misterioso, repleto de galáxias, estrelas e planetas ainda desconhecidos.
        </Text>
        <Image
          style={styles.imagem}
          source={{ uri: 'https://placehold.co/300' }}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.texto}>
          Cientistas estudam o espaço há séculos, utilizando telescópios e sondas espaciais.
        </Text>
        <Image
          style={styles.imagem}
          source={{ uri: 'https://placehold.co/300' }}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.texto}>
          Missões espaciais ajudaram a coletar dados importantes sobre o sistema solar e além.
        </Text>
        <Image
          style={styles.imagem}
          source={{ uri: 'https://placehold.co/300' }}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.texto}>
          A busca por vida extraterrestre continua sendo um dos maiores desafios e mistérios da ciência.
        </Text>
        <Image
          style={styles.imagem}
          source={{ uri: 'https://placehold.co/300' }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 4, // sombra Android
    shadowColor: '#000', // sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  texto: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 22,
  },
  imagem: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
});
