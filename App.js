import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView,FlatList} from 'react-native';
import ContatoItem from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';

export default function App() {
  const[id, setId]= useState(10);
  const [contatos, setContatos] = useState ([]);
  const[contadorContatos, setContadorContatos] = useState(0);

 
  //para add oque foi digitado
  const adicionarContato=(nome, numero)=>{
    contato=(id, nome, numero);

    setContatos((contatos)=>{
      console.log(contatos);
      setId(id+2);
      setContadorContatos(contadorContatos+1);
      return[...contatos,{key:contadorContatos.toString(),value:contato=(id),value2:
      contato=(nome),value3:contato=(numero)}];
    });
  };
  const removerContato = (keyASerRemovida)=>{
    setContatos(contatos=>{
      return contatos.filter((contato)=>{
          contato.key !== keyASerRemovida
      })
    });
  };
  return (
    <View style={styles.telaPrincipalView}>
      <View style={styles.menu}><Text>Lista de Contatos</Text></View>
      <ContatoInput onAdicionarContato={adicionarContato}/>
      <FlatList
      data={contatos}/*colecao de contatos*/
      renderItem={/*mapeamento*/
      contato => (/*dado um contato gera uma view*/
        <ContatoItem id={contato.item.value} nome={contato.item.value2} numero={contato.item.value3} 
        onDelete={removerContato}/>
      )}/>
    </View>
  );
}
const styles = StyleSheet.create({
  telaPrincipalView:{
    padding:50
  },
  menu: {
    padding:20,
    backgroundColor:'#FA8E8D',
    alignItems:"center",
  }
});