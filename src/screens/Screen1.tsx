import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import { StyleGlobal } from '../theme/AppTheme';
import { BodyComponent } from '../components/BodyComponent';
import { ButtonComponent } from '../components/ButtonComponent';

export const Screen1 = () => {

const navigation = useNavigation();

    return (
    <View >
        <BodyComponent>
        <Text style={StyleGlobal.textTitle}>
            ¡Bienvenido!</Text>
        <Image src='https://i.postimg.cc/vTZBX30m/raectnative.jpg' style={StyleGlobal.imagen}/>

        <ButtonComponent buttonText="Acceder" onPress={()=>navigation.dispatch(CommonActions.navigate({name: 'Pantalla2'}))}/>
        
        </BodyComponent>
    </View>
    )
}
