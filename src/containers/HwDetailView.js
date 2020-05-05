import React from 'react';
import { Button, Card } from 'antd';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FormHw from '../components/FormHw';
import HomeworkService from "../services/homework";

class HwDetail extends React.Component {

    state = {
        homework: {}
    };


    componentWillReceiveProps(newProps){
        console.log(newProps);
        if(newProps.token){


            const hwID = this.props.match.params.hwID;
            const subjectID = this.props.match.params.subjectID;

            HomeworkService.get(subjectID, hwID)
                .then(res => {
                    this.setState({
                        homework: res
                    });
                })
        }
    }
    handleDelete = (event) => {
        if(this.props.token !== null){
            const hwID = this.props.match.params.hwID;
            const subjectID = this.props.match.params.subjectID;

            HomeworkService.remove(subjectID, hwID)
            this.props.history.push(`/subjects/${subjectID}`);
            this.forceUpdate();
        }else{
            //some kind of message
        }

    }
    render() {
        return (
            console.log(this.state.homework),
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><Link to="/subjects">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to ="/subjects">List</Link></Breadcrumb.Item>
                 </Breadcrumb>
                 <Card title={this.state.homework.name}>
                    <h6>Description:</h6>
                    <p>{this.state.homework.description}</p>
                    <h6>Deadline:</h6>
                    <p>{this.state.homework.deadline}</p>
                </Card>
                <FormHw
                    requestType="put"
                    subjectID={this.props.match.params.subjectID}
                    hwID={this.props.match.params.hwID}
                    btnText="Update" />
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>
                <br />
            </div>
        )
    }
}

  const mapStateToProps = state => {
    return {
      token: state.token
    }
  }


export default connect (mapStateToProps)(HwDetail);
