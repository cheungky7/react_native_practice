import {View,Button,Text} from 'react-native';
import React, { Component } from 'react';

class HomeScreen extends Component
{
    render(){
        const {navigate}=this.props.navigation;
        const name='Heidi';
        return(
            <View>
                <Text>Chat with {name}</Text>
                <Button
                    onPress={()=>navigate('Chat',
                         {name:name})}
                    title="Chat"
                />
            </View>
        )
    }
}

export default HomeScreen;

