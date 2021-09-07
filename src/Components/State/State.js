import React from 'react'

class StateC extends React.Component {

      constructor() {
          super()
          this.state = {
               h3:"My State",
               p:"My first state concept",
               btn:"Explore More"
          }  
         
           
      }
         updateState =()=>{
             this.setState({
                   h3:"My state got Updated",
                   btn:"Learn More"
             })  
         }

    render(){
        return <div>
            <h3>{this.state.h3}</h3>
            <p>{this.state.p}</p>
            <button className="btn btn-primary" onClick={this.updateState}>{this.state.btn}</button>
        </div>
    }
}

export default StateC