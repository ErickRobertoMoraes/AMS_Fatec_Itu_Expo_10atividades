import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const apps = [
  { id: '1', nome: 'Mensagens', icone: 'comment-dots' },
  { id: '2', nome: 'Câmera', icone: 'camera' },
  { id: '3', nome: 'Galeria', icone: 'images' },
  { id: '4', nome: 'Música', icone: 'music' },
  { id: '5', nome: 'Navegador', icone: 'globe' },
  { id: '6', nome: 'Configurações', icone: 'cog' },
];

export default function exerc7() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Aplicativos</Text>

      <FlatList
        data={apps}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <View style={styles.appItem}>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome5 name={item.icone} size={28} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.label}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: '#f9f9f9',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  grid: {
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  appItem: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 12,
  },
  iconButton: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 50,
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    textAlign: 'center',
  },
});
