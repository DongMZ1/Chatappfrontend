import react, {useReducer, useCallback} from 'react'

const reducer = (state, action) =>{
   
        return{
            ...state,
            [action.name] : action.value
       }
    
}
export const useForm = (initialstate) => {
   const [state, dispatch] = useReducer(reducer, initialstate);
   const handleonchange = useCallback(
       (e) => {
            dispatch(
                {
                 name: e.target.name,
                 value: e.target.value
                }
            );
       }, []
   )

   return [state, handleonchange];
}