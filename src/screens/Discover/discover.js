import React from 'react';
import { View, Text } from 'react-native';

function discover() {
    return (
        <View 
        style = {{flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3f403f'}}>
            <Text style = {{color: '#588157'}}>
                Discover
            </Text>
        </View>
    );
}

export default discover;