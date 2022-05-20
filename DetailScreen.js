import React from 'react';
import {StyleSheet, Button,Image, View, Text} from 'react-native';


function DetailScreen({route, navigation}) {

    const {id, description,title,image,stock} = route.params;

    navigation.setOptions({
        title: title,
        headerRight:() =>(
            <Button
                title="Buy"
                onPress={()=>{}}
                disabled={stock === 0}
            />
        ),
    });

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#808080'}}>
            <Image 
                style={{ width: 200, height: 200,resizeMode:"cover" }}
                source={{uri:image}}
            />
            <Text>Numero en ventas: {id}</Text>
            <Text>Nombre del arma: {title}</Text>
            <Text>Descripcion: {description}</Text>
            <Text>Quedan: {stock}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
        backgroundColor: '#808080',

        margin: 20,
        padding: 5,

        width: 300,
        height: 100,
    }
})

export default DetailScreen;