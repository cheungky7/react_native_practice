import React,{Component} from 'react';
import {View,Button,Text,TextInput} from 'react-native';


export default class Cal extends Component{

   

    render()
    {   
        console.log('cvalue'+this.props.c);
        return(
            <View>
                <TextInput onChangeText={this.props.setAValue}/>
                <TextInput onChangeText={this.props.setBValue}/>
               
                <Text >value:{this.props.c}</Text>
                <Button title="Add" onPress={this.props.AddAB}/>
            </View>
        );
    }
}