import { useNavigation } from '@react-navigation/native';
import {TouchableOpacity,StyleSheet, Text, View, Image, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faMagnifyingGlass, faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

    export default function escolha() {

        const schema = yup.object().shape({
            name: yup.string().required('Nome é obrigatório'),
            email: yup.string().email('Email inválido').required('Email é obrigatório'),
          });
          
          const Form = () => {
            const { control, handleSubmit, formState: { errors } } = useForm({
              resolver: yupResolver(schema),
            });}
          

    const navigation = useNavigation();
    return (

      <view style={styles.container}> 

       <View style={styles.cabecario}>
      <Image  source={require('../../../../src/img/logo.png')}
      style={[styles.image, styles.alignLeft]} />
      <TouchableOpacity onPress={() => navigation.navigate('MC') } >
      <Text style={{color:'black',marginLeft: 90, marginTop:30,  fontSize:19, fontWeight: 'bold'}}>
        Minha Conta
      </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Data') } >
      <Text style={{color:'black',marginLeft: 90, marginTop:30, fontSize:19, fontWeight: 'bold'}}>
        Meus Galpões
      </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome') } >
      <Text style={{color:'black',marginLeft: 90, marginTop:30, fontSize:19, fontWeight: 'bold'}}>
        Comprar Módulo
      </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('tut') } >
      <Text style={{color:'black',marginLeft: 90, marginTop:30, fontSize:19, fontWeight: 'bold'}}> 
        Tutorial
      </Text>
        </TouchableOpacity>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" style={{color:'#a2101a',  marginLeft:100,  marginTop:20}} />
       <FontAwesomeIcon icon={faUserCircle} size="2x" style={{color:'#a2101a',  marginLeft:20,  marginTop:20}} />
        </View>

        <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={()=> navigation.navigate('Welcome')}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" style={{color:'#fcc429',  marginLeft:30,  marginTop:250, 
        width: 50,  height: 50}} />
        </TouchableOpacity>
     </View>
     <Text>Formulário</Text>

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Text>Nome</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
          </>
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Text>Email</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
            />
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
          </>
        )}
      />

      <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
        </view>
        );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2dec0', // Cor de fundo desejada
     
    },
    image: {
      width: 120,
      height: 67,
      marginTop: 5, // Margem superior
      marginLeft: 30, // Margem à esquerda
    
    },
    cabecario:{
      flexDirection:'row',
      marginTop:30,
      
    },input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
      },
      error: {
        color: 'red',
        marginBottom: 12,
      },
    
  
  });
  