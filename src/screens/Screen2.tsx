import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import { BodyComponent } from '../components/BodyComponent';
import { StyleGlobal } from '../theme/AppTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';

interface FormLogin {
    dividendo: number
    divisor: number
}

export const Screen2 = () => {

  const navigation = useNavigation();

      //hook UseState:m permite gestionar el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        dividendo: 0,
        divisor: 0
    });

    //funcion para capturar los valores de mi formulario y cambiarlos de string a number
    const handleChangeValue = (name: string, value: string) => {
      setFormLogin({...formLogin, [name]: Number(value)});
    }
  
    //hook para actualizar el texto del resultado 
    const [resultado, setResultado] = useState<string>('');

    //funcion para realizar el calculo de la division
    const handleDividir = () => {
    const { dividendo, divisor } = formLogin;

    if (divisor === 0) {
      if (dividendo === 0) {
        setResultado('INDETERMINACIÓN');
      } else {
        setResultado('NO EXISTE DIVISIÓN PARA CERO');
      }  
      return;
    }

    setResultado(`${dividendo / divisor}`);

  }

  return (
    <View> 
      <BodyComponent>
        <Text style={StyleGlobal.textTitle}> FORMULARIO:</Text> 
        <View>
                <InputComponent placeholder='Dividendo' keyboardType='numeric' 
                handleChangeValue={handleChangeValue}
                name='dividendo'/>
                <InputComponent placeholder='Divisor' keyboardType='numeric'
                handleChangeValue={handleChangeValue}
                name='divisor'/>
        </View>

        <ButtonComponent buttonText="Dividir" onPress={handleDividir} />

        <Text style={StyleGlobal.text}>Resultado: {resultado}</Text>

        <ButtonComponent buttonText="Regresar" onPress={()=>navigation.dispatch(CommonActions.navigate({name: 'Pantalla1'}))}/>
        
      </BodyComponent>
    </View>
  )
}

