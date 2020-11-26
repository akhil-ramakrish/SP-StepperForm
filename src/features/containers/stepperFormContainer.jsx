import StepperForm from '../pages/stepperForm';
import {connect} from  'react-redux';
import {incrementCount,getDetails} from '../actions/stepperActions';


const mapStateToProps= (state)=>({
   stepCount: state.stepCount,
   details:state.details,
});


const mapDispatchToProps = (dispatch)=>({
  updateStepCount:()=>{
      dispatch(incrementCount())
  },
  getDetails:(details)=>{
  dispatch(getDetails(details))
  },
  
});


export default connect(mapStateToProps,mapDispatchToProps)(StepperForm);