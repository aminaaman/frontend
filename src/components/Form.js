import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { connect } from "react-redux";


const FormItem = Form.Item;

class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, classID) => {
        const name = event.target.elements.name.value;
        const description = event.target.elements.description.value;
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: "JWT " + this.props.token
        }

        switch ( requestType ) {
            case 'post':
                return axios.post('https://diploma.zharaskhan.com/api/classes/', {
                    name: name,
                    description: description
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            case 'put':
                return axios.put(`https://diploma.zharaskhan.com/api/classes/${classID}/`, {
                    name: name,
                    description: description
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
        }
    }

    render() {
        
        return (
        <div style={{

        }}>
            <Form onSubmit={(event) => this.handleFormSubmit(
                event,
                this.props.requestType,
                this.props.classID )}>
            <FormItem label="Name" >
                <Input name="name" placeholder="Put a name here" />
            </FormItem>
            <FormItem label="Description" >
                <Input name="description" placeholder="Enter some description ..." />
            </FormItem>
            <FormItem>
                <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
            </FormItem>
            </Form>
        </div>
        );
    }
}
const mapStateToProps = state => {
    return {
      token: state.token
    }
  }
export default connect(mapStateToProps)(CustomForm);