import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput style={styles.email} placeholder='Email'></TextInput>
      <TextInput style={styles.senha} placeholder='Senha'></TextInput>
      <Pressable
              style={({ pressed }) => [
                styles.botao,
                pressed && styles.botaoPressionado,
              ]}
              onPress={() => alert('Você clicou!')}
            >
              <Text style={styles.botaotext}>Entrar</Text>
            </Pressable>
            <Text style={styles.esqueci}>Esqueci minha senha</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  botaotext: {
    fontSize: 20,
    color: 'white',
  },
  botao: {
    backgroundColor: '#1E90FF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    margin: 10,
  },
  botaoPressionado: {
    opacity: 0.6,
  },
  email: {
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 18,
    margin: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: '#A9A9A9',
  },
  senha: {
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 18,
    margin: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: '#A9A9A9',
  },
  esqueci: {
    fontSize: 18,
    color: '#1E90FF',
  },
});
