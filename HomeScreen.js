import React from 'react';
import {Button, View,Text,Image} from 'react-native';
import styles from './styles';

function HomeScreen({navigation}) {
    return (
        <View style={{flex:1,alignItems: 'center'}}>
            <Image
                style={{ width: 400, height: 400}} 
                source={require("./assets/Destiny-2-Armeria-Oscura-1.png")}
            />
            <Text style={{color: 'black', fontSize:32}}> 
                Bienvenido a la Armeria
            </Text>
            <Text style={{color: 'black', fontSize:32}}> 
                Oscura
            </Text>
            <Text style={{color: 'black', fontSize:16}}> 
                Compra lo que quieras guardian
            </Text>
            <Button 
                title="Ir a la Tienda"
                onPress={() => navigation.navigate('Store', {
                    id: 1, 
                    description: 'Aquí va la descripción',
                } )}
            />
        </View>
    );
}

export default HomeScreen;