import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import SubjectList from './SubjectListView';
import SubjectDetail from './SubjectDetailView';

const Profile = () => (
    <Router>
        <Switch>
            <Route exact path='/profile/' component={SubjectList} />
            <Route exact path='/profile/:classID' component={SubjectDetail} />
        </Switch>
    </Router>
);

export default Profile;