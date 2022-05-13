import React from 'react';
import {StyleSheet,ScrollView, View} from 'react-native';
import Box from './Box';
import NavigationBottom from './NavigationBottom';
import tasks from './Data/tasks';


function MenuScreen() {
    return (
        
            <View style={styles.root}>
                <ScrollView
                style={styles.scroll}
                >
                <View style={styles.containerBox}>
                {
                    tasks.map((task, i) => (
                        <Box 
                            key={i}
                            id = {task.id}
                            title = {task.title}
                            description = {task.description}
                            image = {task.image}
                            stock = {task.stock}
                        />
                    ))
                }
            </View>
                </ScrollView>


            <NavigationBottom />

        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ccff90',
    },

    containerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    scroll:{
        marginBottom:50,
    }
    
})

export default MenuScreen;