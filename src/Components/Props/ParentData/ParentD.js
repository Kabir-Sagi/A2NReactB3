import React, { Component } from 'react'
import ChildD from '../ChildData/ChildD'

 class ParentD extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            "id": 1,
            "first_name": "Eberhard",
            "last_name": "Rubra",
            "email": "erubra0@bloglines.com",
            "gender": "Female",
            "image": "http://dummyimage.com/214x100.png/5fa2dd/ffffff"
         }
     }
     
    render() {
        return (
            <div>
                <ChildD 
                email={this.state.email} 
                n={this.state.first_name} 
                img={this.state.image}
                />
            </div>
        )
    }
}
export default ParentD
