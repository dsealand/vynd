import React from 'react';
import { View, Text } from 'react-native';

function cart(props) {
    return (
        <View 
        style = {{flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3f403f'}}>
            <Text style = {{color: '#588157'}}>
                Cart
            </Text>
        </View>
    );
}

export default cart;