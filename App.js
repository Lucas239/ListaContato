import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const[id, setId]= useState(10);
  const[nome, setNome]=useState('');
  const[numero, setNumero]=useState('');
  const [contatos, setContatos] = useState ([]);
  const[contadorContatos, setContadorContatos] = useState(0);

  
  const capturaNome=(nome)=>{
    setNome(nome)
  };
  const capturaNumero=(numero)=>{
    setNumero(numero)
  };
  contato=(id, nome, numero);
  
  const adicionarContato=()=>{
    setContatos((contatos)=>{
      console.log(contatos);
      setId(id+2);
      setContadorContatos(contadorContatos+1);
      return[...contatos,{key:contadorContatos.toString(),value:contato=(id),value2:
      contato=(nome),value3:contato=(numero)}];
    });
  }
  return (
    <View style={styles.telaPrincipal}>
      <View style={styles.menu}><Text> Lista de Contatos</Text></View>
      <View style={styles.contatosView}>
       
        <TextInput placeholder="Nome"style={styles.contatosInputText} onChangeText={capturaNome} value={nome}/>
        <TextInput placeholder="Telefone"style={styles.contatosInputText} onChangeText={capturaNumero} value={numero}/>
        
      <TouchableOpacity style={styles.botao}>
        <Ionicons name="ios-add-circle" size={35} onPress={adicionarContato} />
      </TouchableOpacity>
      
      </View>
     
      <FlatList
      data={contatos}
      renderItem={
      contato => (
      <View style={styles.lista}>
      <Text>({contato.item.value})Nome: {contato.item.value2}</Text>
      <Text>     Telefone: {contato.item.value3}</Text>
      </View>
      )}/>
    </View>
  );
}
const styles = StyleSheet.create({
  telaPrincipal:{
    padding:50,
    
  },
  menu: {
    padding:20,
    backgroundColor:'#FA8E8D',
    alignItems:"center",
  },
  contatosView:{
    flexDirection:'row',
    justifyContent:'space-between',
    
  },
  contatosInputText:{
    width:'50%',
    borderBottomColor:'black',
    borderBottomWidth:1,
    padding:10,
    borderRadius:10
  },
  lista:{
    flex: 1,
    margin: 5,
    padding:5,
    backgroundColor:'#FFCACA',
    borderColor:'#000',
    borderWidth:1,
    marginBottom:8,
    borderRadius:5
  }
});