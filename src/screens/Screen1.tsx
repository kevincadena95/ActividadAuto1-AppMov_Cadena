import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View } from 'react-native'

export const Screen1 = () => {

const navigation = useNavigation();

    return (
    <View>
        <Text>Bienvenido</Text> 
        <Button title='Acceder'
        onPress={()=>navigation.dispatch(CommonActions.navigate({name: 'Pantalla2'}))}/>
    </View>
    )
}
