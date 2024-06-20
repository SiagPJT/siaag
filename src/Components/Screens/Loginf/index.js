import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebaseConfig.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';

function LoginForm() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
 
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Usuário logado com sucesso:', userCredential.user);
      navigation.navigate('Welcome'); // Navega para a tela principal após o login
    } catch (error) {
      console.error('Erro ao entrar:', error.message);
      if (error.code === 'auth/invalid-login-credentials') {
        setError('Email ou senha incorreto(a). Tente novamente');
      } else {
        setError(error.message);
      }
    }
    setIsLoading(false);
  };

  const handleSignUp = () => {
    navigation.navigate('Signup'); // Assegure-se de que 'Signup' é o nome correto da rota de cadastro no seu sistema de navegação
  };

  return (
    <label>
      <Image
        source={require('../../../../src/img/logo.png')}
        style={{
          width: 140,
          height: 70,
          marginTop: 15,
          marginLeft: 560,
        }}
      />
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '2rem auto', padding: '2rem', backgroundColor: '#d9c6b6', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', marginTop: 30 }}>
        <h2 style={{ textAlign: 'center', color: '#a1201a', fontSize: 40 }}>Login</h2>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <label style={{ display: 'block', marginBottom: 10, color: '#666', marginRight: 30 }}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: 15, marginBottom: 20, border: '1px solid #ccc', borderRadius: 10 }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: 10, color: '#666', marginRight: 30 }}>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: 15, marginBottom: 20, border: '1px solid #ccc', borderRadius: 10 }}
          />
        </label>
        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: '100%',
            padding: '1rem',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: isLoading ? '#ccc' : '#a1201a',
            color: 'white',
            fontSize: '1rem',
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Entrando...' : 'Entrar'}
        </button>
        <TouchableOpacity onPress={handleSignUp} style={{ marginTop: 10 }}>
          <Text style={{ textAlign: 'center', color: '#a1201a', fontSize: '1rem' }}>
            Cadastre-se
          </Text>
        </TouchableOpacity>
      </form>
    </label>
  );
}

export default LoginForm;
