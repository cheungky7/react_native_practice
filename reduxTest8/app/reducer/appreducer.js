import { combineReducers} from 'redux';

let dataState={a:0,b:0,c:0};


function SumOfAB(data){
    let sum=data.a+data.b;
    console.log('sum'+sum);
    return Object.assign({},data,{c:sum});
}

const dataReducer=(state=dataState,action)=>{

    switch(action.type){
        case 'SET_A_VALUE':
            state=Object.assign({},state,{a:action.text});
            console.log('a'+action.text);
            return state;
            break;
        case 'SET_B_VALUE':
            state=Object.assign({},state,{a:action.text});
            console.log('b'+action.text);
            return state;
            break;
        case 'ADD':
            state=SumOfAB(state);
            return state;
            break;
        default:
            return state;
    }
}

export default combineReducers({
    dataReducer
  })
