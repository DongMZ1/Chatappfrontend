const initstate = {
        username: null,
        token: null,
        count: 1
}

export const loginstate = (state = initstate, action) =>{
   switch(action.type){
       case 'login':
           return {
               ...state,
               username: action.username,
               token: action.token
           };
        case 'add':
            return {
                ...state,
                count: state.count +1
            };
        default:
                return {...state};
   }
}