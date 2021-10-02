import React from 'react'
import {Link} from 'react-router-dom'

class Nav extends React.Component {


    render() {
        return <div className="container-fluid m-0 p-0">
                   <div className="row">
                       <div className="col">
                       <nav className="navbar navbar-dark bg-dark">
                        <a href="#" className="navbar-brand">React Routing</a>
                        <ul className="nav">
                            <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/context">Context</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/login">Login</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/task">Task</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/grid">Bootstrap</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/ajax">Ajax</Link></li>
                        </ul>
                       </nav>

                       </div>
                   </div>
        </div>
    }
}

export default Nav