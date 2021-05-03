const initstate = {
        username: null,
        token: null,
        islogin: false
}

export const loginstate = (state = initstate, action) =>{
   switch(action.type){
       case 'login':
           return {
               ...state,
               username: action.username,
               token: action.token,
               islogin: action.islogin
           };
        default:
                return {...state};
   }
}