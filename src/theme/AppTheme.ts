import { StyleSheet } from 'react-native';


export const StyleGlobal = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold',
    },

    containerBody: {
        backgroundColor: '#7fccf0',
        alignItems:'center'
    },



    input:{
        backgroundColor: '#D3D3D3',
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 5
    },

    button:{
        backgroundColor: 'blue',
        borderRadius: 5,
        marginVertical: 5,
        color: 'white',
        textAlign: 'center',
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