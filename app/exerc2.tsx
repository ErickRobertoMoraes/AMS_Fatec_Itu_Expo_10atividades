import { Image, StyleSheet, Text, View } from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
        source={require('../assets//images/Mito.jpg')}
        style={styles.imagem}
        resizeMode="contain"
      />
      <Text style={styles.nome}>Jair Bolsonaro</Text>
      <Text style={styles.bio}>Ex Presidente | Mito</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
  },
  card:{
    backgroundColor: 'white',
    height: 300,
    width: 300,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 500,
  },
});
