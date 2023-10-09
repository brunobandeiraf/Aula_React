import { Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { styles } from './styles'
import { useState } from 'react';

export default function Home(){

    const [ name, setName ] = useState('')
    const [ dateNasc, setdDateNasc ] = useState('')

    function handleUserAdd(){
        console.log("Nome Completo: " + name 
                    +"\nData de Nasc: "+ dateNasc)
        
        Alert.alert("Nome Completo: " + name 
                    +"\nData de Nasc: "+ dateNasc)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Preencha os Dados</Text>

            <TextInput
                style={styles.input}
                placeholder='Nome Completo'

                onChangeText={ setName } // Altera o valor
                value={ name } // Captura o valor
            />
            <Text style={styles.text}> { name } </Text>

            <TextInput
                style={styles.input}
                placeholder='Data de Nascimento'

                onChangeText={ setdDateNasc } // Altera o valor
                value={ dateNasc } // Captura o valor
            />
            <Text style={styles.text}> { dateNasc } </Text>

            <TouchableOpacity style={styles.btn} onPress={ handleUserAdd }>
                <Text style={styles.btnTxt}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}