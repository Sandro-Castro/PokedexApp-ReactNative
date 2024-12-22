  import { StyleSheet, Text, View, Image } from 'react-native';
  import * as React from 'react';
  import { Searchbar } from 'react-native-paper';

  const PesquisarPokemom = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    return (
      <Searchbar  
        placeholder="Procurar Pokémon"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
      />
    );
  };

  export default function Index() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Pokédex</Text>
          <Image 
            source={require('../../assets/images/Pokeball.png')} 
            style={styles.imageLogo} 
          />
        </View>
        <Text style = {styles.textLogo}>Realize a busca por Pokémon pelo nome ou usando o número do Pokédex Nacional</Text>
        <PesquisarPokemom />
      </View>
    );
  }

  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#333333",
    
    },
    header: {
      paddingHorizontal: 25,
      paddingTop: 20,
    },
    titulo:{
      fontSize: 25,
      fontWeight: "bold",
      color: "#fff",
      
    },
    imageLogo: {
      width: 85, 
      height: 85,
      resizeMode: 'contain',
      position: 'absolute',
      top: 5, 
      right:10, 

    },
    textLogo:{
      fontSize: 18,
      paddingHorizontal: 25,
      paddingTop: 20,
      color: "#fff",

    },
    searchbar: {
      margin: 20,
    },
  });
