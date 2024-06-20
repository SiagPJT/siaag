import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faMagnifyingGlass, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';


export default function plum() {
 

  const navigation = useNavigation();



  return (
    <View style={styles.container}>
      <View style={styles.cabecario}>
        <Image
           source={require('../../../../src/img/logo.png')}>
          style={[styles.image, styles.alignLeft]}
          </Image>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.menuText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MC')}>
          <Text style={styles.menuText}>Minha conta</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Data')}>
          <Text style={styles.menuText}>Meus galpões</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.menuText}>Comprar módulo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Tut')}>
          <Text style={styles.menuText}>Tutorial</Text>
        </TouchableOpacity>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" style={styles.icon} />
        <FontAwesomeIcon icon={faUserCircle} size="2x" style={styles.icon} />
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
    marginTop: 5,
    marginLeft: 30,
  },
  cabecario: {
    flexDirection: 'row',
    marginTop: 30,
  },
  menuText: {
    color: 'black',
    marginLeft: 90,
    marginTop: 30,
    fontSize: 19,
    fontWeight: 'bold',
  },
  icon: {
    color: '#a2101a',
    marginLeft: 20,
    marginTop: 20,
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    color: '#fcc429',
    marginLeft: 30,
    marginTop: 250,
    width: 50,
    height: 50,
  },
  lightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lightText: {
    fontSize: 20,
    color: '#333',
  },
});
