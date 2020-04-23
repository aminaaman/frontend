import React from 'react';
import axios from 'axios';

import Subjects from '../components/Subject';
import CustomForm from '../components/Form';

class SubjectList extends React.Component {

    state = {
        subjects: []
    }

    componentDidMount() {
        axios.get('https://diploma.zharaskhan.com/api/classes/')
            .then(res => {
                this.setState({
                    subjects: res.data
                });
            })
    }

    render() {
        return (
            <div>
                <Subjects data={this.state.subjects} />
                <br />
                <h4>Create a subject</h4>
                <CustomForm 
                    requestType="post"
                    classID={null}
                    btnText="Create" />
            </div>
        )
    }
}

export default SubjectList;