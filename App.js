// import pages

import Library from './pages/Library';
import Login from './pages/Login'
import SalesPage from './pages/SalesPage'
import './App.css'

import LoginForm from './components/LoginForm';

// import components 



import {
  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NewCourse } from './components/NewCourse';

  function App() {
  return (
   <Router>
     <Switch>
       <Route exact path = "/">
         <Login/>
         </Route>
         <Route  path = "/library">
         <Library/>
         </Route>
         <Route path = "/salesPage">
         <SalesPage/>
         </Route>
          <Route path = "/newcourse">
         <NewCourse/>
         </Route>
     </Switch>
   </Router>
  );
}

export default App;
