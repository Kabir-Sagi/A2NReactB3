import React from "react";
import './Grid.css'

class Grid extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    


    render() {
       return <div className="container">
                <div className="row">
                    <div className="col-sm-4 d1" >Div1</div>
                    <div className="col-sm-4 d2">Div2</div>
                    <div className="col-sm-4 d3">Div3</div>
                </div>
                <div className="row mt-1">
                    <div className="col-sm-6 d1 p-4">Div 4</div>
                    <div className="col-sm-6 d2">Div 5</div>
                </div>
                <div className="row">
                      <div className="col-sm-3">d1</div>
                      <div className="col-sm-3">d2</div>
                      <div className="col-sm-3">d3</div>
                      <div className="col-sm-3">d4</div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card mt-2 ">
                            <div className="card-header bg-primary text-white">
                                <h2>Card Component</h2>
                            </div>
                            <div className="card-body bg-danger"></div>
                            <div className="card-footer bg-info"></div>
                        </div>
                    </div>
                </div>
       </div>  
    }
}

export default Grid