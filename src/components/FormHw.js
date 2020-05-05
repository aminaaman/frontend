import React from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from "react-redux";
import HomeworkService from "../services/homework";


const FormItem = Form.Item;

class FormHw extends React.Component {


    handleFormSubmit = (event, requestType, subjectID, hwID) => {

        const name = event.target.elements.name.value;
        const description = event.target.elements.description.value;
        const deadline = event.target.elements.deadline.value;


        switch ( requestType ) {
            case 'post':
                HomeworkService.create(subjectID, {name, description, deadline})
                .then(res => {
                        this.props.history.push(`/subjects/${subjectID}`);

                })
                .catch(error => console.err(error));
            case 'put':
                HomeworkService.update(subjectID, hwID, {name, description, deadline})
                .then(res => {
                    this.props.history.push(`/subjects/${subjectID}`);
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
                this.props.subjectID,
                this.props.hwID )}>
            <FormItem label="Name" >
                <Input name="name" placeholder="Put a name here" />
            </FormItem>
            <FormItem label="Description" >
                <Input name="description" placeholder="Enter some description ..." />
            </FormItem>
            <FormItem label="Deadline" >
                <Input name="deadline" placeholder="2020-04-30" />
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
export default connect(mapStateToProps)(FormHw);
