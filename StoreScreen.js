import React from 'react';
import {StyleSheet,ScrollView, View} from 'react-native';
import Box from './Box';
import tasks from './Data/tasks';


function StoreScreen() {
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
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#808080',
    },

    containerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    scroll:{
        marginBottom:50,
    }
    
})

export default StoreScreen;