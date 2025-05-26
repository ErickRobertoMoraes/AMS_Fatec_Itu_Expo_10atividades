import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function exerc8() {
  return (
    <View style={styles.container}>
      {/* Imagem de Capa */}
      <Image
        source={{ uri: 'https://pbs.twimg.com/profile_banners/128372940/1730375227/1080x360' }}
        style={styles.capa}
      />

      {/* Foto de Perfil */}
      <Image
        source={{ uri: 'https://pbs.twimg.com/profile_images/1614784189462618112/EUGqFFah_400x400.jpg' }}
        style={styles.perfil}
      />

      {/* Nome e Bio */}
      <Text style={styles.nome}>Jair M. Bolsonaro</Text>
      <Text style={styles.bio}>
        38• Presidente da República Federativa do Brasil 🇧🇷
      </Text>

      {/* Seções */}
      <View style={styles.infoBox}>
        <Text style={styles.infoTitulo}>Meus Posts</Text>
        <Text style={styles.infoSub}>18,8 mil Posts</Text>

        <Text style={styles.infoTitulo}>Seguidores</Text>
        <Text style={styles.infoSub}>13,9 mi Seguidores </Text>

        <Text style={styles.infoTitulo}>Seguindo</Text>
        <Text style={styles.infoSub}>597 Seguindo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },
  capa: {
    width: '100%',
    height: 150,
  },
  perfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    marginTop: -50,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
  },
  bio: {
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 12,
    color: '#555',
  },
  infoBox: {
    width: '100%',
    paddingHorizontal: 30,
  },
  infoTitulo: {
    fontWeight: 'bold',
    marginTop: 12,
  },
  infoSub: {
    marginBottom: 8,
    color: '#666',
  },
});
