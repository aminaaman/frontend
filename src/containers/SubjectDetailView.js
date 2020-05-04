import React from 'react';
import { Button, Card } from 'antd';
import CustomForm from '../components/Form';
import FormHw from '../components/FormHw';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Hws from '../components/Hw';
import SubjectService from "../services/subject";
import HomeworkService from "../services/homework";

class SubjectDetail extends React.Component {

    state = {
        subject: {},
        homeworks: []
    };


    componentWillReceiveProps(newProps){
        console.log(newProps);
        if(newProps.token){
            const subjectID = this.props.match.params.subjectID;
            SubjectService.get(subjectID).then(res => {
                this.setState({
                    subject: res
                });
            })

            HomeworkService.list(subjectID)
                .then(res => {
                    this.setState({
                        homeworks: res
                    });
                })
        }
    }


    handleDelete = (event) => {
        if(this.props.token !== null){
            const subjectID = this.props.match.params.subjectID;

            SubjectService.remove(subjectID);
            this.props.history.push('/subjects');
            this.forceUpdate();
        }else{
            //some kind of message
        }

    }


    render() {
        return (
            <div>
                 <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><Link to="/subjects">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to ="/subjects">List</Link></Breadcrumb.Item>
                 </Breadcrumb>
                <Card title={this.state.subject.name}>
                    <p>{this.state.subject.description}</p>
                </Card>
                <Card style={{backgroundColor:"#F0F8FF"}} title="Homeworks for this class">
                    <Hws data={this.state.homeworks} subjectID={this.props.match.params.subjectID} />
                </Card>
                <br />
                <h4>Create a homework</h4>
                <br />
                <FormHw
                    requestType="post"
                    subjectID={this.props.match.params.subjectID}
                    hwID={this.props.match.params.hwID}
                    btnText="Create" />
                <br />
                <h4>Update and delete subject</h4>
                <br />
                <CustomForm
                    requestType="put"
                    subjectID={this.props.match.params.subjectID}
                    btnText="Update" />
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      token: state.token
    }
  }

export default connect (mapStateToProps)(SubjectDetail);
