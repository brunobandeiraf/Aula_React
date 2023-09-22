import { styles } from './styles';
import { Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';

export default function Home(){
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Preencha os dados</Text>
        
                <Text style={styles.textInput}>Nome Completo</Text>
                <TextInput
                    style={styles.input}
                    id='nome'
                />

                <Text style={styles.textInput}>Gênero</Text>
                <TextInput
                    style={styles.input}
                    id='genero'
                />

                <Text style={styles.textInput}>Data de nascimento</Text>
                <TextInput
                    style={styles.input}
                    id='data'
                />

                <Text style={styles.textInput}>Usuário</Text>
                <TextInput
                    style={styles.input}
                    id='usuario'
                />

                <Text style={styles.textInput}>Senha</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    id='senha'
                />

                <Text style={styles.textInput}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    id='email'
                />

                <Text style={styles.textInput}>Confirme seu email</Text>
                <TextInput
                    style={styles.input}
                    id='confirmarEmail'
                />

                <Text style={styles.textInput}>CPF</Text>
                <TextInput
                    style={styles.input}
                    id='cpf'
                />

                <Text style={styles.textInput}>Idioma</Text>
                <TextInput
                    style={styles.input}
                    id='idioma'
                />

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>cadastrar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}