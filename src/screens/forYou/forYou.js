import React from 'react';
import { View, Text, FlatList, Video } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Videos = [
    { Videourl: 'url1'},
    { Videourl: 'url2'},
    { Videourl: 'url3'}];

function forYou(props) {
    return (
        <NavigationContainer>
            <FlatList
            data={DATA}
            renderItem={({ item }) =>
                <Video source={item.Videourl}  
                ref={(ref) => {
                this.player = ref
                }}                                      
            onBuffer={this.onBuffer}               
            onError={this.videoError}               
            style={styles.backgroundVideo} />}
            keyExtractor={item => item.id}
            style = {{flex: 1,
                backgroundColor: '#3f403f'}}>

            </FlatList>
        </NavigationContainer>
    );
}

export default forYou;