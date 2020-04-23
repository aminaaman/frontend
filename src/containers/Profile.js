import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import SubjectList from './SubjectListView';
import SubjectDetail from './SubjectDetailView';

class Profile extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/classes/' component={SubjectList} />
                    <Route exact path='/classes/:classID' component={SubjectDetail} />
                </Switch>
            </Router>
        )
    }
}

export default Profile;