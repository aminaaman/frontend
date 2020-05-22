import React from 'react';
import { Form, Input, Button, Spin, Icon } from 'antd';
import { connect } from 'react-redux';
import SubjectService from "../services/subject";

const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;


class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                SubjectService.register_for_class(values.subject_id, values.access_code);
                this.props.history.push('/subjects');
            }
        });
    }

    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        const { getFieldDecorator } = this.props.form;
        return (
            <div style = {{width: '25%', margin: 'auto', marginTop: '10vh', display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh', backgroundColor: 'AliceBlue'}}>

                {errorMessage}
                {
                    this.props.loading ?

                        <Spin indicator={antIcon} />

                        :

                        <Form onSubmit={this.handleSubmit} className="login-form">

                            <FormItem>
                                {getFieldDecorator('subject_id', {
                                    rules: [{ required: true, message: 'Please input your class id!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Class ID" />
                                )}
                            </FormItem>

                            <FormItem>
                                {getFieldDecorator('access_code', {
                                    rules: [{ required: true, message: 'Please input your access code!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" />
                                )}
                            </FormItem>

                            <FormItem>
                                <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                                    Register
                                </Button>

                            </FormItem>
                        </Form>
                }
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);


export default WrappedNormalLoginForm;
