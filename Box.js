import React from 'react';
import {StyleSheet, View, Text, Button,Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Box({ id, description,title,image,stock}) {

    const navigation = useNavigation();

    return (
        <View style={styles.root}>
            <Image 
                style={{ width: 158, height: 175,borderTopRightRadius:8,borderTopLeftRadius:8 }}
                source={{uri:image}}
            />
            <Text>Numero en ventas del Arma #{id}</Text>
            <Text>Arma : {title}</Text>
            <Text>Arquetipo de Arma : {description}</Text>
            <Button
                color="#455a64"
                title="Ver"
                onPress={
                    () => navigation.navigate('Details', {
                        screen: 'DetailSCreen',
                        id: id,
                        title: title,
                        description: description,
                        image: image,
                        stock: stock,
                    })
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: 160,
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 8,
        margin: 8,
    }
})

export default Box;