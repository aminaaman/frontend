import React from 'react';
import axios from 'axios';

import { Button, Card } from 'antd';

import CustomForm from '../components/Form';

class SubjectDetail extends React.Component {

    state = {
        subject: {}
    }

    componentDidMount() {
        const classID = this.props.match.params.classID;
        axios.get(`https://diploma.zharaskhan.com/api/classes/${classID}/`)
            .then(res => {
                this.setState({
                    subject: res.data
                });
            })
    }

    handleDelete = (event) => {
        const classID = this.props.match.params.classID;
        axios.delete(`https://diploma.zharaskhan.com/api/classes/${classID}/`);
        this.props.history.push('/');
        this.forceUpdate();
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

export default SubjectDetail;