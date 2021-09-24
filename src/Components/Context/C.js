import React, { Component } from 'react'
import D from './D'

 class C extends Component {
    render() {
        return (
            <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <h2>C Component</h2>
                                </div>
                                <div className="card-body">
                                  <D />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
export default C
