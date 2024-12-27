import { StyleSheet, Text, View, Image, Pressable, FlatList, } from 'react-native';
import * as React from 'react';
import { Searchbar, IconButton} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Link } from "expo-router";
import { useEffect, useState,  } from 'react';
import {buscarPokemon} from "./services/api"
import { listaItemPokemon } from './types/pokemon';


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
  const [pokemon, setPokemon] = useState<listaItemPokemon[]>([]);
  useEffect(( )=> {
    const carregarPokemon = async () => {
      const dados = await buscarPokemon();
      const buscarDadosPokemon: listaItemPokemon[] = await Promise.all(
        dados.map (async (item: {name: string; url: string}) => {
          const resposta = await fetch(item.url);
          const detalhes = await resposta.json();

          return {
            name: item.name,
            image: detalhes.sprites.front_default,
          };
        })
      );
      setPokemon(buscarDadosPokemon);

    };
    carregarPokemon();
  }, [])

  

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Pokédex</Text>
        <Image 
          source={require('../app/assets/images/Pokeball.png')} 
          style={styles.imagemLogo} 
        />
      </View>

    <Text style = {styles.textoLogo}>Realize a busca pelos Pokémon pelo nome ou usando o número do Pokédex Nacional</Text>
      <PesquisarPokemom />

      <View style = {styles.listaPokemon}>
          <Text style = {styles.TextoListaPokemon}>Lista de Pokemon</Text>
          
          <FlatList
            data = {pokemon}
            keyExtractor={(item) => item.name}

            renderItem={({item, index})=>(
            <View style = {styles.carta}>
              <View style = {styles.infoCarta}>
                <Image width = {80} height = {80} source={{uri: item.image}} />
                <View>
                  <Text>#{index + 1}</Text>
                  <Text>{item.name}</Text>
                </View>    
              </View> 
              <Link href={{
                pathname: "/pokemon/[id]",  
                params: {
                  id: 2
                }
              }}>
                <IconButton
                  icon="chevron-right" 
                  size={40} 
                  
                  onPress={() => console.log('Seta clicada!')} 
                  />
                </Link>
            </View>)}
          />

          
      </View>

      <View style = {styles.rodape}>
        <Pressable style = {styles.botaoRodape} >
          <Text style = {styles.textoBotaoRodape}>Verificar Pokemon</Text>
        </Pressable>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  
  },
  cabecalho: {
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  titulo:{
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    
  },
  imagemLogo: {
    width: 85, 
    height: 85,
    resizeMode: 'contain',
    position: 'absolute',
    top: 5, 
    right:10, 

  },
  textoLogo:{
    fontSize: 16,
    paddingHorizontal: 25,
    paddingTop: 20,
    color: "#fff",

  },
  searchbar: {
    margin: 20,
  },
  listaPokemon:{
    flex: 1,
    backgroundColor: "#fff",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    padding: 15,

  },
  rodape:{
    borderWidth: 1,
    borderColor: "F2F2F2",
    backgroundColor: "#fff",    
    padding: 25,
  },
  botaoRodape:{
  padding: 20,
  backgroundColor: "#333333",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  borderRadius: 6
    
  },
  textoBotaoRodape:{
  color: "#fff",
  fontSize: 18,

  },
  carta:{
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 15,
    elevation: 4,
    justifyContent: "space-between",
    borderRadius: 4,
    marginBottom: 5,

  },
  infoCarta:{
    flexDirection: "row",
    alignItems: "center",
    gap: 10,

  },
  TextoListaPokemon:{
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 18,

  },
  
});
