import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity,StyleSheet, Text, View, Image } from 'react-native';

function SignupForm() {

  const Stack = createStackNavigator();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Usuário criado com sucesso:', userCredential.user);
      setEmail('');
      setPassword('');
      setError('');
      setIsLoading(false); // Mova setIsLoading para antes da navegação
      navigation.navigate('Loginf'); // Certifique-se de que 'login' é o nome correto da rota
    } catch (error) {
      console.error('Erro ao entrar:', error.message);
      if (error.code === 'auth/weak-password') {
        setError(' A senha deve conter no mínimo 6 caracteres.');
      }
      else if  (error.code === 'auth/invalid-email')
        { setError('Email inválido.');}
      else if  (error.code === 'auth/email-already-in-use')
        { setError('O email já está em uso.');}
      else {
        setError(error.message);
      }
    }
    setIsLoading(false);
  };

  return ( 
    <label>
         <Image  source={require('../../../../src/img/logo.png')}
    style={{width: 140,
      height: 70,
      marginTop: 15, // Margem superior
      marginLeft: 560, }} />
    <label >
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '2rem auto', padding: '2rem', backgroundColor: '#d9c6b6', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' , marginTop:30}}>
      <h2 style={{ textAlign: 'center', color: '#a1201a', fontSize:40}}>Cadastro</h2>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      <label style={{ display: 'block', marginBottom: 10, color: '#666', marginRight:30}}>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: 15, marginBottom: 20, border: '1px solid #ccc', borderRadius: 10}}
        />
      </label>
      <label style={{ display: 'block', marginBottom: 10, color: '#666', marginRight:30 }}>
        Senha:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{width: '100%', padding: 15, marginBottom: 20, border: '1px solid #ccc', borderRadius: 10 }}
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
        {isLoading ? 'Cadastrando...' : 'Cadastrar'}
        
      </button>
      
    </form>
    </label>
    </label>
    );
}

export default SignupForm;
