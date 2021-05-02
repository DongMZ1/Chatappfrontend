export const loginstate = (state ={
    username: null,
    token: null,
    count: 1
}, action) =>{
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
                count: count + 1
            }
   }

}