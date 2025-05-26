import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function exerc9() {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.card}>
        <View style={styles.perfilContainer}>
          <Image
            source={{ uri: 'https://pbs.twimg.com/profile_images/1614784189462618112/EUGqFFah_400x400.jpg' }}
            style={styles.perfil}
          />
          <Text style={styles.nome}>Jair M. Bolsonaro</Text>
        </View>
        <Image
          style={styles.imagem}
          source={{ uri: 'https://pbs.twimg.com/media/GrkXBHdXAAANwkD?format=jpg&name=900x900' }}
        />
        <Text style={styles.texto}>- Mais um….</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.perfilContainer}>
          <Image
            source={{ uri: 'https://pbs.twimg.com/profile_images/1630217574100213762/SAMK-BnB_400x400.jpg' }}
            style={styles.perfil}
          />
          <Text style={styles.nome}>Lula</Text>
        </View>
        <Image
          style={styles.imagem}
          source={{ uri: 'https://pbs.twimg.com/media/GcwyqX3XgAAg_8-?format=jpg&name=900x900' }}
        />
        <Text style={styles.texto}>A foto da Aliança Global Contra a Fome e a Pobreza. Hoje, o registro da reunião do G20.</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.perfilContainer}>
          <Image
            source={{ uri: 'https://pbs.twimg.com/profile_images/1052302225358376961/E9cM5Uqx_400x400.jpg' }}
            style={styles.perfil}
          />
          <Text style={styles.nome}>Bluezao</Text>
        </View>
        <Image
          style={styles.imagem}
          source={{ uri: 'https://pbs.twimg.com/media/GpUOrn3XkAAHTnw?format=png&name=small' }}
        />
        <Text style={styles.texto}>ME DESENHARAM NA GUERRA DA UCRANIA...</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  perfilContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  perfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagem: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  texto: {
    fontSize: 15,
    lineHeight: 20,
    color: '#444',
  },
});
