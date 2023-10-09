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
                />

                <TextInput
                    style={styles.input}
                    placeholder='Gênero'
                    placeholderTextColor="black" 
                />

                <TextInput
                    style={styles.input}
                    placeholder='Data de Nascimento'
                    placeholderTextColor="black" 
                />

                <TextInput
                    style={styles.input}
                    placeholder='Nome de Usuário'
                    placeholderTextColor="black" 
                />

                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder='Senha'
                    placeholderTextColor="black" 
                />

                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="black"
                />

                <TextInput
                    style={styles.input}
                    placeholder='Confirme seu e-mail'
                    placeholderTextColor="black" 
                />

                <TextInput
                    style={styles.input}
                    //keyboardType="numeric"
                    placeholder='CPF'
                    placeholderTextColor="black" 
                />

                <TextInput
                    style={styles.input}
                    placeholder='Idioma'
                    placeholderTextColor="black" 
                />

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
    )
}