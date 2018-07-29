import { combineReducers} from 'redux';

let dataState={a:0,b:0,c:0};


function SumOfAB(data){
   let sum=Number(data.a)+Number(data.b);
    console.log('sum'+sum);
    return Object.assign({},data,{c:sum});
}

//const dataReducer=(state=dataState,action)=>{
const dataReducer=(state=dataState,action)=>{

    console.log('state'+state);

    switch(action.type){
        case 'SET_A_VALUE':
            
            console.log('a'+action.text);
            return Object.assign({},state,{a:action.text});
         
           
        case 'SET_B_VALUE':
          
            console.log('b'+action.text);
            return Object.assign({},state,{b:action.text});
          
        case 'ADD':
         
            return SumOfAB(state);;
          
        default:
            return state;
    }
}

export default combineReducers({
    dataReducer
  })
