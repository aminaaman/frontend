import React from 'react';
import axios from 'axios';
import Subjects from '../components/Subject';
import CustomForm from '../components/Form';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SubjectList extends React.Component {

    state = {
        subjects: []
    };


    componentWillReceiveProps(newProps){
      console.log(newProps);
      if(newProps.token){
          axios.defaults.headers = {
              "Content-Type": "application/json",
              Authorization: "JWT " + newProps.token
          }
          axios.get('https://diploma.zharaskhan.com/api/classes/')
              .then(res => {
                  this.setState({
                      subjects: res.data
                  });
              })
      }
  }
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><Link to="/subjects">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to ="/subjects">List</Link></Breadcrumb.Item>
                 </Breadcrumb>
                <Subjects data={this.state.subjects} />
                <br />
                <h4>Create a subject</h4>
                <CustomForm 
                    requestType="post"
                    subjectID={null}
                    btnText="Create" />
            </div>
        )
    }
}

  const mapStateToProps = state => {
    return {
      token: state.token
    }
  } 
  

export default connect (mapStateToProps)(SubjectList);