import React, {useMemo} from 'react';
import { Button, Card } from 'antd';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FormHw from '../components/FormHw';
import HomeworkService from "../services/homework";
import SimpleReactFileUpload from "../containers/TestUpload";
import Table from "antd/es/table";
import Subjects from "../components/Subject";
import Check from "../components/Check";

class HwDetail extends React.Component {

    state = {
        is_teacher: localStorage.getItem('is_teacher'),
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

    handleCheck = (event) => {
        if(this.props.token !== null){
            const hwID = this.props.match.params.hwID;
            HomeworkService.check(hwID).then(res => {
                console.log('Success:');
                this.forceUpdate();
            });
        }else{
            //some kind of message
        }
    }


    render() {

        let button, last_check;
        if (this.state.is_teacher) {
            last_check = <Check data={this.state.homework.last_checks} />
            button = <Button type="info" htmlType="submit" onClick={this.handleCheck}>Check for plagiarism</Button>
        } else {
            last_check = null;
            button = null;
        }


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

                {button}

                <br />
                <Card>
                    <SimpleReactFileUpload subjectId={this.props.match.params.subjectID} homeworkId={this.props.match.params.hwID}/>
                </Card>

                <br />
                {last_check}

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
