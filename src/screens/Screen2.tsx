import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import { BodyComponent } from '../components/BodyComponent';
import { StyleGlobal } from '../theme/AppTheme';
import { InputComponent } from '../components/InputComponent';

interface FormLogin {
    dividendo: number
    divisor: number
}

export const Screen2 = () => {
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
    const handleDivide = () => {
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
        <Text style={StyleGlobal.text}> Formulario:</Text> 
        <View>
                <InputComponent placeholder='Dividendo' keyboardType='numeric' 
                handleChangeValue={handleChangeValue}
                name='dividendo'/>
                <InputComponent placeholder='Divisor' keyboardType='numeric'
                handleChangeValue={handleChangeValue}
                name='divisor'/>

        <Button title='Dividir' onPress={handleDivide} />

        <Text style={[StyleGlobal.text, { marginTop: 12 }]}>Resultado: {resultado}</Text>
        

        </View>
      </BodyComponent>
    </View>
  )
}

