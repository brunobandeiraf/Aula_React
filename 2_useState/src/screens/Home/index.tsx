import { useState } from 'react';
import { styles } from './styles';
import { Text, TextInput, View, TouchableOpacity, Alert} from 'react-native';

export default function Home(){
    
    const [name, setName] = useState('')


    function handleUserAdd() {
        console.log("Nome Completo:" +  name)

        Alert.alert("Nome Completo:" +  name)
    }

    return(
            <View style={styles.container}>
                <Text style={styles.title}>Preencha os dados</Text>
        
                <TextInput
                    style={styles.input}
                    placeholder='Nome Completo'
                    placeholderTextColor="black" 

                    onChangeText={setName}
                    value={name}
                />
                <Text style={styles.text}>{name}</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Gênero'
                    placeholderTextColor="black" 
                    id='gender'
                />

                <TextInput
                    style={styles.input}
                    placeholder='Data de Nascimento'
                    placeholderTextColor="black" 
                    id='data'
                />

                <TextInput
                    style={styles.input}
                    placeholder='Nome de Usuário'
                    placeholderTextColor="black" 
                    id='user'
                />

                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder='Senha'
                    placeholderTextColor="black" 
                    id='password'
                />

                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="black" 
                    id='email'
                />

                <TextInput
                    style={styles.input}
                    placeholder='Confirme seu e-mail'
                    placeholderTextColor="black" 
                    id='confirmEmail'
                />

                <TextInput
                    style={styles.input}
                    //keyboardType="numeric"
                    placeholder='CPF'
                    placeholderTextColor="black" 
                    id='cpf'
                />

                <TextInput
                    style={styles.input}
                    placeholder='Idioma'
                    placeholderTextColor="black" 
                    id='language'
                />

                <TouchableOpacity style={styles.btn} onPress={handleUserAdd}>
                    <Text style={styles.btnTxt}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
    )
}