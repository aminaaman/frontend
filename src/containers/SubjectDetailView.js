import React from 'react';
import axios from 'axios';
import { Button, Card } from 'antd';
import { connect } from 'react-redux';
import CustomForm from '../components/Form';

class SubjectDetail extends React.Component {

    state = {
        subject: {}
    }

    componentWillReceiveProps(newProps){
        console.log(newProps);
        if(newProps.token){
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: newProps.token
            }
            const classID = this.props.match.params.classID;
            axios.get(`https://diploma.zharaskhan.com/api/classes/${classID}/`)
                .then(res => {
                    this.setState({
                        subject: res.data
                    });
                })
        }
    }


    handleDelete = (event) => {
        if(this.props.token !== null){
            const classID = this.props.match.params.classID;
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: this.props.token
            }
            axios.delete(`https://diploma.zharaskhan.com/api/classes/${classID}/`);
            this.props.history.push('/');
            this.forceUpdate();
        }else{
            //some kind of message
        }

    }

    render() {
        return (
            <div>
                <Card title={this.state.subject.name}>
                    <p>{this.state.subject.description}</p>
                </Card>
                <CustomForm
                    requestType="put"
                    classID={this.props.match.params.classID}
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
export default connect(mapStateToProps)(SubjectDetail);