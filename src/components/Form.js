import React from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from "react-redux";
import SubjectService from "../services/subject";


const FormItem = Form.Item;

class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, subjectID) => {
        const name = event.target.elements.name.value;
        const description = event.target.elements.description.value;


        switch ( requestType ) {
            case 'post':
                SubjectService.create({name, description})
                .then(res => {
                    this.props.history.push(`/subjects`);
                })
                .catch(error => console.err(error));
            case 'put':
                SubjectService.update(subjectID, {name, description})
                .then(res => {
                        this.props.history.push(`/subjects`);
                    })
                .catch(error => console.err(error));
            default:
        }
    }

    render() {

        return (
        <div style={{

        }}>
            <Form onSubmit={(event) => this.handleFormSubmit(
                event,
                this.props.requestType,
                this.props.subjectID )}>
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
