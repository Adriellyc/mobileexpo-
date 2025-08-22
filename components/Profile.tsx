import { View, Text, Image, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/adrielly.jpg')} // coloque a foto em /assets
        style={styles.image}
      />
      <Text style={styles.name}>Adrielly</Text>
      <Text style={styles.bio}>
        Estudante de Sistemas para Internet e Pedagogia. 
        Apaixonada por educação e tecnologia, sempre buscando inovar e aprender.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Preenche toda a tela
    backgroundColor: 'black', // Fundo preto
    alignItems: 'center',
    justifyContent: 'center', // Centraliza todo o conteúdo
    padding: 10,
  },
  image: {
    width: 200,  // Aumenta a largura da imagem
    height: 200, // Aumenta a altura da imagem
    borderRadius: 100, // Mantém a imagem redonda
    marginBottom: 20,
  },
  name: {
    fontSize: 24, // Aumenta o tamanho da fonte
    fontWeight: 'bold',
    color: 'white', // Altera a cor do texto para branco
    marginBottom: 8,
  },
  bio: {
    fontSize: 18, // Aumenta o tamanho da fonte
    textAlign: 'center',
    color: 'white', // Altera a cor do texto para branco
    paddingHorizontal: 20,
  },
});
