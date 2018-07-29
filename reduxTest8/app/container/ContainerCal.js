import Cal from '../components/Cal';
import {connect} from 'react-redux';

const mapStateToProps=(state)=>{

    console.log('mapStateToProps'+state.c);
    console.log(state);
    return {
        a:state.dataReducer.c,
        b:state.dataReducer.b,
        c:state.dataReducer.c,
    };
}


const mapDispatchToProps = (dispatch) =>{ 
    
    return{
    setAValue: (intext) => { dispatch({ type: 'SET_A_VALUE',text:intext }); },
    setBValue: (intext) => { dispatch({ type: 'SET_B_VALUE',text:intext }); },
    AddAB: () => { dispatch({ type: 'ADD' }) }
  }}



  
export default connect(mapStateToProps, mapDispatchToProps)(Cal)