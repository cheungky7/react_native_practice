import Cal from '../components/Cal';
import {connect} from 'react-redux';

const mapStateToProps=state=>{

    return {
        a:state.a,
        b:state.b,
        c:state.c
    }
}

const mapDispatchToProps = (dispatch) =>{ return{
    setAValue: (intext) => { dispatch({ type: 'SET_A_VALUE',text:intext }); },
    setBValue: (intext) => { dispatch({ type: 'SET_B_VALUE',text:intext }); },
    AddAB: () => { dispatch({ type: 'ADD' }) },
  }}
  
export default connect(mapStateToProps, mapDispatchToProps)(Cal)