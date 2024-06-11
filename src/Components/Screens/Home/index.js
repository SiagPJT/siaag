import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faMagnifyingGlass, faArrowAltCircleLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function pg() {
  const navigation = useNavigation();

  // Array de imagens
  const images = [
    require('../../../../src/img/imgaut.png'),
    require('../../../../src/img/imgaut4.png'),
    require('../../../../src/img/imgaut5.png'),
  
  ];

  // Estado inicial para o índice da imagem
  const [imageIndex, setImageIndex] = useState(0);

  // Função para alternar a imagem
  const toggleImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Move para a próxima imagem, volta ao início se chegar ao fim
  };

  return (
    <View style={styles.container}>
      <View style={styles.cabecario}>
        <Image
          source={require('../../../../src/img/logo.png')}
          style={[styles.image, styles.alignLeft]}
        />
        {/* Demais itens do cabeçalho */}
        <TouchableOpacity onPress={() => navigation.navigate('MC')}>
          <Text style={styles.menuItem}>Minha Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Data')}>
          <Text style={styles.menuItem}>Meus Galpões</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.menuItem}>Comprar Módulo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('tut')}>
          <Text style={styles.menuItem}>Tutorial</Text>
        </TouchableOpacity>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" style={styles.icon} />
        <FontAwesomeIcon icon={faUserCircle} size={32} style={styles.icon} />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" style={styles.arrowIcon} />
        </TouchableOpacity>
        
        <View styles={{flexDirection:'column'}}>
        <View style={styles.imageContainer}>
         
          <Image
            source={images[imageIndex]} // Usa o índice para mostrar a imagem
            style={styles.imagee}
          />
          <TouchableOpacity style={styles.iconOverlay} onPress={toggleImage}>
            <FontAwesomeIcon icon={faArrowRight} size="2x" color="#808080" />
          </TouchableOpacity>
          </View>

        <Text style={styles.informacao}>
        O SIAG é um sistema inovador de controle e monitoramento de parâmetros em ambientes avícolas,
        </Text>
        <Text style={styles.informacao}>
        projetado para otimizar o crescimento e o bem-estar das aves. Através do acompanhamento em 
           </Text>
           <Text style={styles.informacao}>
        tempo real dos parâmetros essenciais, o avicultor garante um ambiente ideal para a produção, 
         </Text>
            <Text style={styles.informacao}>
          maximizando resultados e minimizando perdas.
        </Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2dec0',
  },
  image: {
    width: 120,
    height: 67,

    marginLeft: 30,
  },
  imagee: {
    width: 920,
    height: 290,
    marginTop: 20,
    
  },
  cabecario: {
    flexDirection: 'row',
    marginTop: 30,
  },
  informacao: {
    marginTop: 5,
    marginLeft: 120,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#a1201a',
  },

imageContainer: {
  
  marginLeft: 130
  
},
  menuItem: {
    color: 'black', marginLeft: 90, marginTop: 10, fontSize: 19, fontWeight: 'bold'
  },
  icon: {
    color: '#a2101a', marginLeft: 10, marginTop: 20
  },
  arrowIcon: {
    color: '#fcc429', marginLeft: 30, marginTop: 250, width: 50, height: 50
  },
  iconOverlay: {
   
    position:'relative',
    backgroundColor: '#f2dec0', // Semi-transparent background
    marginTop:30,
    
  },
});
