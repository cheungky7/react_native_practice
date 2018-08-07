import {View,Text} from 'react-native';
import React, { Component } from 'react';

class ChatScreen extends Component
{
    render(){
        const {params}=this.props.navigation.state;
        return(
            <View>
               <Text>
                   {/*'Chatting with ${params.name}'*/}
                   Chattig with {params.name}
                </Text>
            </View>
        )
    }
}

export default ChatScreen;
