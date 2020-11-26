
export  function incrementCount() {
    return ({ type: 'INCREAMENT' });
}

export function getDetails(details){
    return ({
        type:'GET_DETAILS',
        payload:details,
    });
} 

