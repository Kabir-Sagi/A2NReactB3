import React, { Component,createRef } from 'react'

 class Login extends Component {

     constructor(props) {
         super(props)
     
         this.state = {
              name:"",
              password:""
         }
         this.inputRef = createRef()
         this.passwordRef = createRef()
     }
      
     getData = ()=>{
        //  console.log(this.state)
      console.log( this.inputRef.current.value)
      console.log(this.passwordRef.current.value)
     }
     
    render() {
        return (
            <div className="container mt-5">
                 <div className="row">
                     <div className="col-sm-4"></div>
                     <div className="col-sm-4">
                         <div className="card">
                             <div className="card-header bg-dark text-white">
                                 <h3>Login Form</h3>
                             </div>
                             <div className="card-body">
                                 <div className="form-group mt-2">
                               <input type="text" placeholder="Enter username" 
                                className="form-control"
                                ref={this.inputRef}
                                // onChange={(e)=>{this.setState({
                                //     name:e.target.value
                                // })}}
                               />
                                 </div>
                                 <div className="form-group mt-2">
                               <input type="password" placeholder="Enter Password" 
                                className="form-control"
                                ref={this.passwordRef}
                                // onChange={(e)=>{
                                //     this.setState({
                                //         password:e.target.value
                                //     })
                                // }}
                               />
                                 </div>
                                 <button onClick={this.getData} className="btn mt-2 btn-dark px-5">Login</button>
                             </div>
                         </div>
                     </div>
                     <div className="col-sm-4"></div>
                 </div>
            </div> 
        )
    }
}
export default Login
