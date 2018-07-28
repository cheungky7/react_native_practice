import React,{Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './store/store'
import ContainerCal from './container/ContainerCal';

export default class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <View>
                    <ContainerCal/>
                </View>
            </Provider>
        );
    }
}