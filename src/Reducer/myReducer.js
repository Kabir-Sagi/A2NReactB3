import Info from '../InitialData'

const MyReducer = (state=Info,action)=>{
    
     switch(action.type) {
         case 'NAME':
              state = {
               ...state, // name:"S1",
                             // city:"Hyd" , 
                     name:action.payload        
              }
              break;
              case 'CITY':
                   state ={
                        ...state,
                        city:action.payload
                   }
     }

     return state
}

export default MyReducer