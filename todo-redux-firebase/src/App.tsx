import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Dashboard } from './components/dashboard/Dashboard';
import { Navbar } from './components/layout/Navbar'
import { ProjectDetails } from './components/projects/ProjectDetails'
import { SignIn } from './components/auth/SignIn'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch> {/* This make sure only one component is loaded up */}
          <Route exact path='/' component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
