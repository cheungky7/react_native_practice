import {StackNavigator} from 'react-navigation'


import HomeScreen from './HomeScreen'
import ChatScreen from './ChatScreen'
//import AccountScreen from './AccountScreen'

const SimpleApp=StackNavigator({
    Home:{screen:HomeScreen},
    Chat:{screen:ChatScreen},
   // Account:{screen:AccountScreen},
},{
    initialRouteName:'Home'
})


export default SimpleApp;