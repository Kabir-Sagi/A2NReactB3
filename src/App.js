
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import First from './Components/First/First'
import Second  from './Components/Second/Second';
import Functional from './Components/Functional/Functional'
import State from './Components/State/State'
import Info from './Components/Information/Info'
import Parent from './Components/Props/Parent/Parent'
import ParentD from './Components/Props/ParentData/ParentD'
import ParentC from './Components/Child-Parent/ParentC'
import PComp from './Components/Child-parent-2/Parent'
import AContext from './Components/Context/A'
import Login from './Components/Events/login'
import Nav from './Components/Routing/Nav'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
               <div className="container">
                 <a href="#" className="navbar-brand">Component Interaction</a>
               </div>
      </nav> */}
      {/* <Second />
      <h2>Welcome to React world</h2>
      <First />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fuga nulla architecto autem quas vero libero animi quo hic, molestias voluptatibus labore iusto obcaecati non quaerat fugit nihil. Sunt facere tempore hic exercitationem quisquam voluptatem? Eum magnam sunt quisquam odit eveniet deleniti, dolorum, repellendus earum obcaecati fugit voluptates adipisci fuga excepturi minima beatae id quo deserunt, rerum quod! Enim repellat iste, totam reiciendis unde explicabo suscipit tenetur voluptates, similique saepe alias necessitatibus, quis reprehenderit quae? Ipsa quae ipsam recusandae neque, dolore facilis laborum quaerat voluptatibus natus at vitae accusamus impedit possimus obcaecati consectetur rem repellendus voluptates nam, fugit sapiente velit?</p> */}
         {/* <Functional />  */}
         {/* <State /> */}
         {/* <Info /> */}
         {/* <Parent /> */}
         {/* <ParentD /> */}
         {/* <ParentC /> */}
         {/* <PComp /> */}
         {/* <AContext /> */}
         {/* <Login /> */}
         <BrowserRouter>
         <Nav />
         <Switch>
           <Route exact path="/" component={First} />
           <Route path="/context" component={AContext} />
           <Route path="/login" component={Login} />
           <Route path="/task" component={ParentC} />
         </Switch>
         </BrowserRouter>
    </div>
  );
}

export default App;
