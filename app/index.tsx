import { router } from 'expo-router';
import { Button, ScrollView, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {[...Array(10)].map((_, index) => {
        const page = index + 1;
        return (
          <View key={page} style={styles.button}>
            <Button
              title={`Ir para o exércicio ${page}`}
              onPress={() => router.push(`/exerc${page}`)}
            />
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    marginVertical: 10,
  },
});
