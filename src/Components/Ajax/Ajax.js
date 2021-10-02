import React, { Component } from 'react'
import axios from 'axios'

 class Ajax extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userData:[] 
        }
    }
    
      sendRequest= ()=>{
          axios.get("https://jsonplaceholder.typicode.com/users")
          .then((res)=>{
              console.log(res.data)
              this.setState({
                  userData:res.data
              })
          },(errorMsg)=>{
              console.log(errorMsg)
          })
      }

    render() {
        return (
            <div className="container">
                  <div className="container mt-5">
                      <div className="row">
                          <div className="col-sm-12">
                              <button className="bt btn-primary p-2" onClick={this.sendRequest}>Send Axios request to Server</button>
                              <button className="bt btn-primary p-2" onClick={this.sendfetchRequest}>Send Fetch request to Server</button>
                          </div>
                      </div>
                  </div>

           { this.state.userData.length > 0   ? <div className="container mt-3">
                      <div className="row">
                          <div className="col-sm-12">
                              <table className="table table-hover ">
                                  <thead className="bg-dark text-white">
                                      <tr>
                                          <th>ID</th>
                                          <th>NAME</th>
                                          <th>EMAIL</th>
                                          <th>CITY</th>
                                          <th>COMPANY NAME</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {
                                          this.state.userData.map((ele,index)=>{
                                            return <tr key={index + 1} > 

                                                <td>{ele.id}</td>
                                                <td>{ele.name}</td>
                                                <td>{ele.email}</td>
                                                <td>{ele.address.city}</td>
                                                <td>{ele.company.name}</td>
                                            </tr>

                                          })
                                      }
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
                  : <div className="container mt-5"> 
                      <div className="row">
                          <div className="col-sm-12">
                              <h3 className="text-danger">No Data</h3>
                          </div>
                      </div>
                   </div>
    }
                 
            </div>
        )
    }
}

export default Ajax
