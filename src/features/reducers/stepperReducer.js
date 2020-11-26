
const store = {
    stepCount:1,
    details:{
        'address':'',
        'bedrooms':'',
        'bathrooms':'',
        'description':''
    },
    
    
}
  const stepperReducer = (state=store,action)=>{
    let newStore={}
    switch(action.type){
        case 'INCREAMENT':  newStore= {
            ...state,
             stepCount:state.stepCount+1,
        }
        return newStore;
        case 'GET_DETAILS': newStore = {
            ...state,
            details:{...action.payload}
        }
        return newStore;

       default: return state;

        
    }
}

export default stepperReducer;