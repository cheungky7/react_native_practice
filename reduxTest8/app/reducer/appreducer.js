import { combineReducers} from 'redux';

let dataState={a:0,b:0,c:0};


function SumOfAB(data){
    sum=Number(data.a)+Number(data.b);
    console.log('sum'+sum);
    //temp=Object.assign({},data);
    //return Object.assign(temp,{c:sum});
    //let state=Object.assign({},data,{c:sum});
   // console.log('c'+state.c);
   return Object.assign({},data,{c:sum});
  // return {a:0,b:0,c:0};
}

//const dataReducer=(state=dataState,action)=>{
const dataReducer=(state=dataState,action)=>{

    console.log('state'+state);

    switch(action.type){
        case 'SET_A_VALUE':
            //state=Object.assign({},state,{a:action.text});
            console.log('a'+action.text);
            return Object.assign({},state,{a:action.text});
            //return {a:action.text,b:state.b,c:state.c};
            //break;
        case 'SET_B_VALUE':
           // state=Object.assign({},state,{b:action.text});
            console.log('b'+action.text);
           return Object.assign({},state,{b:action.text});
           //return {a:state.a,b:action.text,c:state.c};
           // break;
        case 'ADD':
           // state=SumOfAB(state);
            return SumOfAB(state);;
            //break;
        default:
            return state;
    }
}

export default combineReducers({
    dataReducer
  })
