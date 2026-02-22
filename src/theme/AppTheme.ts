import { StyleSheet } from 'react-native';


export const StyleGlobal = StyleSheet.create({
    textTitle: {
        color: '#121764',
        fontSize: 25,
        fontWeight: '900',
        marginTop: 90,
        marginBottom: 45,
        margin: 50,
        textAlign: 'center',
    },

    text: {
        color: 'black',
        fontSize: 22,
        fontWeight: '600',
        marginTop: 30,
        marginBottom: 75,
        margin: 50,
        textAlign: 'center',
        backgroundColor:'#52c3f8',
        padding: 10,
        borderRadius: 8
        
    },

    containerBody: {
        backgroundColor: '#7fccf0',
        alignItems:'center', 
    },



    input:{
        backgroundColor: '#D3D3D3',
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom:30
    },

    button:{
        backgroundColor: 'blue',
        borderRadius: 5,
        marginTop: 12,
        marginBottom: 12,
        
        
    },



    buttonText:{
        color: 'white',
        fontSize: 20,
        padding: 10,
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