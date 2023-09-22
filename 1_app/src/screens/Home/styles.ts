import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F1E25',
        //width: '100%',
        
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        color: "#fff",
        fontSize: 25,
        paddingTop: 100,
        paddingBottom: 35,
        fontWeight: 'bold'
    },

    textInput: {
        color: "#fff",
        fontSize: 14,
        width: '60%',
        fontWeight: '500',
        marginTop: 20,
    },

    inputValue: {
        fontSize: 14,
        //width: '60%',
        color: 'black',
        marginTop: 50,
        marginBottom: 20,
    },

    input: {
        color: "#363636",
        width: '60%',
        margin: 10,
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#dedede",
        fontWeight: "200"
    },

    btn: {
        backgroundColor: "purple",
        padding: 15,
        borderRadius: 5,
        fontSize: 13,
        margin: 10,
        marginBottom: 20,
    
    },

    btnTxt: {
        fontFamily: "Arial",
        color: "white",
        fontWeight: "600",
    },
});