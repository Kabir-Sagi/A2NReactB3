import React from 'react'


 class ChildD extends React.Component {
     constructor(props) {
         super(props)
     
         
     }
     
    render() {
        const {n,email} = this.props
        return (
            <div>
                {/* <h2>{this.props.n}</h2>
              <h2>{this.props.email}</h2> */}
              <h2>{n}</h2>
              <h2>{email}</h2>
            </div>
        )
    }
}
export default ChildD
