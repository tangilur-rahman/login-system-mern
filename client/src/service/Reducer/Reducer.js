const initialValue = {
   loading : false,
   state : false,
   error : null
}

const Reducer = (state = initialValue,action)=>{

   switch(action.type){
      case "REQUEST" : return {
         loading : true,
         error : null
      }
      case "LOGIN" : return {
         loading : false,
         state : action.payload
      }
      case "LOGOUT" : return {
         loading : false,
         state : action.payload
      }
      case "ERROR" : return {
         loading : false,
         state : false,
         error : action.error
      }

      default : return state;
   }
}

export default Reducer;