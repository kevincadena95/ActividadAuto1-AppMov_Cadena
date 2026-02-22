import { StyleSheet } from 'react-native';


export const StyleGlobal = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 90,
        marginBottom: 30
    },

    containerBody: {
        backgroundColor: '#7fccf0',
        alignItems:'center', 
    },



    input:{
        backgroundColor: '#D3D3D3',
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 5,
        marginBottom:30
    },

    button:{
        backgroundColor: 'red',
        borderRadius: 5,
        marginVertical: 5,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    buttonText:{
        color: 'white',
        textAlign: 'center',
        borderRadius: 5,
        marginVertical: 5,
        fontWeight: 'bold',
    },


    imagen:{
        display: 'flex',
        height: 200,
        width: 200,
        margin: 50,
        borderRadius: 10,
    }
})