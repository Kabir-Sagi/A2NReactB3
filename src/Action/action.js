import myStore from '../ReduxStore/Store'

const action = (data,type)=>{
     if(type==="name"){
   myStore.dispatch({
       type:"NAME",
       payload:data
   })
} else {
    myStore.dispatch({
        type:"CITY",
        payload:data
    })
}

}

export default action