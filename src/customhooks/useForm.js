import react, {useState, useCallback} from 'react'


export const useForm = (initialstate) => {
   const [state, setstate] = useState(initialstate);
   const handleonchange = useCallback(
       (e) => {
            setstate([...state, {[e.target.name]: e.target.value}]);
       }, []
   )

   return [state, handleonchange];
}