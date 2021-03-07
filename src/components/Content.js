import React from 'react'
import { Switch, Route } from 'react-router-dom';
import AddNewCircuit from '../pages/AddNewCircuit';
import CircuitProfile from '../pages/CircuitProfile';
import AddNewMember from '../pages/AddNewMember';
import Dashboard from '../pages/Dashboard';
import ViewCircuitProfile from '../pages/ViewCircuitProfile';

function Content() {
    return (
        <div>
            <Switch>
                {/* <Route path={process.env.PUBLIC_URL + '/'} component={Dashboard} />
                <Route path={process.env.PUBLIC_URL + '/dashboard'} component={Dashboard} />
                <Route path={process.env.PUBLIC_URL + '/viewcircuitprofile'} component={ViewCircuitProfile} />
                <Route path={process.env.PUBLIC_URL + '/addnewcircuit'} component={AddNewCircuit} />
                <Route path={process.env.PUBLIC_URL + '/circuitprofile'} component={CircuitProfile} />
                <Route path={process.env.PUBLIC_URL + '/AddNewMember'} component={AddNewMember} /> */}

                <Route exact path="/" component={AddNewMember} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/viewcircuitprofile" component={ViewCircuitProfile} />
                <Route path="/addnewcircuit" component={AddNewCircuit} />
                <Route path="/circuitprofile" component={CircuitProfile} />
                <Route path="/addNewMember" component={AddNewMember} />
            </Switch>
            
        </div>
    )
}

export default Content
