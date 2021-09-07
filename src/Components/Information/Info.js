import React from "react";
import {info} from '../../Data/data'

class Info extends React.Component {
      constructor() {
        super()
        this.state= {
          data:info
        }
      }
   render() {
       return <div>

            <h2 className="text-danger mt-3">Employee Infomration</h2>
            <div className="form-group">
                <input type="radio" name="gender"   />MALE &nbsp;&nbsp;&nbsp;
                <input type="radio" name="gender" />FEMALE
            </div>
            <table className="table table-hover mt-5">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>ID</th>
                        <th>IMAGE</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>GENDER</th>
                        <th>EMAIL ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.map((element)=>{
                            return <tr>
                                 <td>{element.id}</td>
                                 <td><img src={element.image} height="100px" width="100px"/></td>
                                 <td>{element.first_name}</td>
                                 <td>{element.last_name}</td>
                                 <td>{element.gender}</td>
                                 <td>{element.email}</td>
                                 </tr>
                        })
                    }
                </tbody>
            </table>
           
       </div>
   }

}

export default Info