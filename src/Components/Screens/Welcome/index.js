import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity,StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faCartPlus, faPlayCircle, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';



export default function Welcome() {
  
 

 const navigation = useNavigation();


  
 return (

  <view 
  style={styles.container}> 
       
    <View style={{flexDirection:'row'}}>
    <Image  source={require('../../../../src/img/logo.png')}
    style={[styles.image, styles.alignLeft]} />
   
    </View>
    
      
      <View
   style={styles.texto}>
   <text
            style={{fontSize:25, color:'#a2101a'}}>
                Dispositivo ESP
            </text>
    <Text style={{fontSize: 20, color:'black'}}>
         Sistema de controle e monitoramento
    </Text>
    
    <Text style={{fontSize: 20, color:'black'}}>
         em ambientes aviários!
    </Text>

    <TouchableOpacity 
    style={styles.botao}
    onPress={() => navigation.navigate('Home') } >
     <Text style={styles.buttonText}>
         Saiba mais
      </Text>
    </TouchableOpacity>
   </View>

   


   <View style={styles.item}>

   <View style={{flexDirection:'column-reverse'}}>
    <TouchableOpacity onPress={() => navigation.navigate('MC') } >
    <FontAwesomeIcon icon={faUserCircle} size="4x" style={{color:'#a2101a',  marginRight: 170, marginTop:10}} />
    </TouchableOpacity>
    <Text style={{color:'black',marginRight:165,  fontSize:15, fontWeight: 'bold'}}>
      Minha Conta</Text>
     </View>

     <View style={{flexDirection:'column-reverse'}}>
    <TouchableOpacity onPress={() => navigation.navigate('Data') } >
    <FontAwesomeIcon icon={faHome} size="4x" style={{color:'#a2101a',  marginRight: 170, marginTop:10}} />
    </TouchableOpacity>
    <Text style={{color:'black',marginRight:165,  fontSize:15, fontWeight: 'bold'}}>
      Meus Galpões</Text>
     </View>

     <View style={{flexDirection:'column-reverse'}}>
    <TouchableOpacity onPress={() => navigation.navigate('Fb') } >
    <FontAwesomeIcon icon={faCartPlus} size="4x" style={{color:'#a2101a',  marginRight: 170, marginTop:10}} />
    </TouchableOpacity>
    <Text style={{color:'black',marginRight:165,  fontSize:15, fontWeight: 'bold'}}>
      Comprar Módulo</Text>
     </View>
     <View style={{flexDirection:'column-reverse'}}>
    <TouchableOpacity onPress={() => navigation.navigate('Tut') } >
    <FontAwesomeIcon icon={faPlayCircle} size="4x" style={{color:'#a2101a',  marginRight: 170, marginTop:10}} />
    </TouchableOpacity>
    <Text style={{color:'black',marginRight:165,  fontSize:15, fontWeight: 'bold'}}>
      Tutorial</Text>
     </View>

      
     </View>

   </view>
        );
        

}

const styles = StyleSheet.create({
    container: {
      flex: 1, // Isso faz com que a View ocupe todo o espaço disponível
      backgroundColor: '#f2dec0', // Cor de fundo definida aqui
      padding: 20,
      
    },
    texto: {
      fontWeight: 'bold',
       // Margem superior
      marginLeft: 470, // Margem à esquerda
      marginTop:50
    },
    item: {

      flexDirection: 'row', // Alinha os ícones horizontalmente
      justifyContent: 'center', // Alinha os ícones ao centro horizontalmente
      marginTop: 150,
      flex: 1,
      marginLeft: 120, // Margem à esquerda
      
     
    },
  
  
    image: {
      width: 140,
      height: 70,
      marginTop: 15, // Margem superior
      marginLeft: 470, // Margem à esquerda
    
    },
   textoicone:{
  flexDirection: 'row', // Alinha os ícones horizontalmente
  justifyContent: 'center', // Alinha os ícones ao centro horizontalmente
  marginTop: 150,
  padding :100
    },
   
    
 botao: {
 
  alignItems:'center',
  pedding:30,
  width:120,
  height: 30,
  backgroundColor: '#fcc429',
  justifyContent:'center',
  borderRadius:10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black', // Ajuste a cor do texto conforme necessário
    fontSize: 14,
  },
  textu:{
   
  },
  
  

});
