import React from 'react';
import{View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ContatoItem =(props) =>{
    return(
        <TouchableOpacity onLongPress={props.onDelete.bind(this,props.chave)}> 
            <View style={styles.lista}>
                <Text>({props.id})Nome: {props.nome}</Text>
                <Text>       Telefone: {props.numero}</Text>
            </View>
        </TouchableOpacity> 
    );
}
const styles = StyleSheet.create({
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
export default ContatoItem;