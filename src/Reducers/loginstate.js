const initstate = {
        islogin: false
}

export const loginstate = (state = initstate, action) =>{
   switch(action.type){
       case 'login':
           return {
               ...state,
               user: action.user,
               islogin: action.islogin
           };
       case 'fetchuser':
           return {
               ...state,
               user: action.user
           };    
        default:
                return {...state};
   }
}