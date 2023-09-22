import { styles } from './styles';
import { Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';

export default function Home(){
    return(
            <View style={styles.container}>
                <Text style={styles.title}>Preencha os dados</Text>
        
                <TextInput
                    style={styles.input}
                    placeholder='Nome Completo'
                    placeholderTextColor="black" 
                    id='name'
                />

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

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
    )
}