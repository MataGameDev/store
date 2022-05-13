import React from 'react';
import {StyleSheet, Button,Image, View, Text} from 'react-native';
import NavigationBottom from './NavigationBottom';

function DetailScreen({route, navigation}) {

    const {id, description,title,image,stock} = route.params;

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#66bb6a'}}>
            <Image 
                style={{ width: 200, height: 200 }}
                source={{uri:image}}
            />
            <Text>Details Screen</Text>
            <Text>Numero en ventas: {id}</Text>
            <Text>Nombre del arma {title}</Text>
            <Text>Description: {description}</Text>
            <Text>Quedan: {stock}</Text>
            <NavigationBottom/>

        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
        backgroundColor: '#98ee99',

        margin: 20,
        padding: 5,

        width: 300,
        height: 100,
    }
})

export default DetailScreen;