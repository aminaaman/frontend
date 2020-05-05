import React from 'react';
import Subjects from '../components/Subject';
import CustomForm from '../components/Form';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SubjectService from "../services/subject";

class SubjectList extends React.Component {

    state = {
        subjects: []
    };


    componentWillReceiveProps(newProps){
      console.log(newProps);
      if(newProps.token){
          SubjectService.list().then(res => {
                  this.setState({
                      subjects: res
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
