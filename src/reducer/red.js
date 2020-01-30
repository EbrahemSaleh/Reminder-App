import {ADD_REMINDER , REMOVE_REMINDER , CLEAR_REMINDER} from '../action/type';

const reducer = (state=[] , action) => {
    let reminder =[];
    if(action.type ===ADD_REMINDER ){
        reminder=[...state ,{text : action.text , date : action.date , id : Math.random()} ]
        console.log(reminder)
        return reminder
    }else if (action.type === REMOVE_REMINDER) {
        reminder = state.filter(red => red.id !== action.id)
        return reminder
    }else if (action.type === CLEAR_REMINDER) {
        reminder = []
        return reminder
    }
    else{
        return state
    }
  
  
}

export default reducer; 