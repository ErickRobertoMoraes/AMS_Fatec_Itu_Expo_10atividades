import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const opcoes = [
  {
    id: '1',
    nome: 'Notificações',
    icone: 'https://img.icons8.com/ios/50/000000/appointment-reminders--v1.png',
  },
  {
    id: '2',
    nome: 'Privacidade',
    icone: 'https://img.icons8.com/ios/50/000000/lock--v1.png',
  },
  {
    id: '3',
    nome: 'Segurança',
    icone: 'https://img.icons8.com/ios/50/000000/shield--v1.png',
  },
  {
    id: '4',
    nome: 'Idioma',
    icone: 'https://img.icons8.com/ios/50/000000/language.png',
  },
  {
    id: '5',
    nome: 'Tema',
    icone: 'https://img.icons8.com/ios/50/000000/sun--v1.png',
  },
  {
    id: '6',
    nome: 'Conta',
    icone: 'https://img.icons8.com/ios/50/000000/user--v1.png',
  },
];

export default function exerc10() {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.item}>
      <View style={styles.linha}>
        <Image source={{ uri: item.icone }} style={styles.icone} />
        <Text style={styles.nome}>{item.nome}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={opcoes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separador} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icone: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  nome: {
    fontSize: 16,
  },
  separador: {
    height: 12,
  },
});
