import React from 'react';
import { Route } from 'react-router-dom';
import SubjectList from './containers/SubjectListView';
import SubjectDetail from './containers/SubjectDetailView';
import Home from './containers/Home';
import About from './containers/About';
import Blog from './containers/Blog';
import Login from './containers/Login';
import HwDetailView from './containers/HwDetailView'

const   BaseRouter = () => (
    <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/logout" component={Home}/>
        <Route exact path='/subjects' component={SubjectList} />
        <Route exact path='/subjects/:subjectID' component={SubjectDetail} />
        <Route exact path='/subjects/:subjectID/homeworks/:hwID' component={HwDetailView} />
    </div>
)

export default BaseRouter;
