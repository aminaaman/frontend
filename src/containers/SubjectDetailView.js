import React from 'react';
import axios from 'axios';
import { Button, Card } from 'antd';
import CustomForm from '../components/Form';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Hws from '../components/Hw';

class SubjectDetail extends React.Component {

    state = {
        subject: {},
        homeworks: []
    };


    componentWillReceiveProps(newProps){
        console.log(newProps);
        if(newProps.token){
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: "JWT " + newProps.token
            }
            const subjectID = this.props.match.params.subjectID;
            axios.get(`https://diploma.zharaskhan.com/api/classes/${subjectID}/`)
                .then(res => {
                    this.setState({
                        subject: res.data
                    });
                })
            axios.get(`https://diploma.zharaskhan.com/api/classes/${subjectID}/homeworks/`)
                .then(res => {
                    this.setState({
                        homeworks: res.data
                    });
                })
        }
    }


    handleDelete = (event) => {
        if(this.props.token !== null){
            const subjectID = this.props.match.params.subjectID;
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: "JWT " + this.props.token
            }
            axios.delete(`https://diploma.zharaskhan.com/api/classes/${subjectID}/`);
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
                <Card title="Homeworks for this class">
                    <Hws data={this.state.homeworks} subjectID={this.props.match.params.subjectID} /> 
                </Card>
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