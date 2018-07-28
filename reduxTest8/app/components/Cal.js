import React,{Component} from 'react';
import {View,Button,Text,TextInput} from 'react-native';


export default class Cal extends Component{

    render()
    {
        return(
            <View>
                <TextInput OnChangeText={this.props.setAValue}/>
                <TextInput OnChangeText={this.props.setBValue}/>
                <Text>{this.props.c}</Text>
                <Button title="Add" onPress={this.props.AddAB}/>
            </View>
        );
    }
}