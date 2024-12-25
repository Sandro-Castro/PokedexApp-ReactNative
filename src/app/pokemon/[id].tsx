import { View, Text, StyleSheet, Image } from "react-native";

export default function Pokemon(){
    return(
        <View style = {styles.container}>
            <View style = {styles.cabecalho}>
            <Image style = {styles.imagemPrincipal}
              source={require('../assets/images/bulbasaur.png')}
              />
            </View>

            <Text style = {styles.nomePokemon}>Bulbassaur</Text>

            <View style = {styles.infoPokemon}>
                <View style = {styles.info}>
                    <Text style = {styles.textoPeso} >6.9Kg</Text>
                    <Text>Peso</Text>

                </View>
                <View style = {styles.info}>
                    <Text style = {styles.textoPeso}>0.7m</Text>
                    <Text>Altura</Text>

                </View>
            </View>

            <Text style = {styles.textoEvolucoes}>Evoluções</Text>

            <View style = {styles.rodape}>
                <View style = {styles.containerCartaRodape}>
                    <View style = {styles.cartaRodape}> 
                        <Image 
                        source={require('../assets/images/bulbasaur.png')}
                        />
                        
                    </View>
                    <Text>Bulbassaur</Text>
                </View>

                <View style = {styles.containerCartaRodape}>
                    <View style = {styles.cartaRodape}> 
                        <Image 
                        source={require('../assets/images/bulbasaur.png')}
                        />
                        
                    </View>
                    <Text>Bulbassaur</Text>
                </View>

                <View style = {styles.containerCartaRodape}>
                    <View style = {styles.cartaRodape}> 
                        <Image 
                        source={require('../assets/images/bulbasaur.png')}
                        />
                        
                    </View>
                    <Text>Bulbassaur</Text>
                </View>
            </View>

        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 25,
      
    
    },
    cabecalho: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#f6f6f6",
        padding: 30,
        
        
      },
    imagemPrincipal: {
        width: 80
    },
    nomePokemon:{
        fontSize: 25,
        marginVertical: 20,
        fontWeight: "bold",
        
    },
    infoPokemon:{
        flexDirection: 'row',
        gap: 15,

    },
    info:{
        borderWidth: 1,
        padding: 24,
        backgroundColor: "#fff",
        borderRadius: 5,
        borderColor: "#f2f2f2",
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoPeso:{
        fontSize: 18,
        fontWeight: "bold",
    },
    textoEvolucoes:{
        fontSize: 22,
        marginVertical: 20,
        fontWeight: "bold",
    },
    rodape:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 15,

    },
    containerCartaRodape:{
        width: 90,
        height: 90,

    },
    cartaRodape:{
        backgroundColor: "#f6f6f6",
        padding: 10,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#f2f2f2",
        
    },
});