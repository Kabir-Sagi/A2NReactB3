import React, { Component } from 'react'

class Child extends Component {
    constructor(props) {
        super(props)
    }
    render() {
          const {name,city,email} = this.props.info //es6 concept
        return (
            <div>
                {/* <h2>Child Component</h2> */}
                <h4>NAME:{this.props.info.name}</h4>
                <h4>City:{city}</h4>
                <h4>Email:{email}</h4>
            </div>
        )
    }
}
export default Child
