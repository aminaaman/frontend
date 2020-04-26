import React from 'react';
import axios from 'axios';
import { Button, Card } from 'antd';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HwDetail extends React.Component {

    state = {
        homework: {}
    };


    componentWillReceiveProps(newProps){
        console.log(newProps);
        if(newProps.token){
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: "JWT " + newProps.token
            }

            const hwID = this.props.match.params.hwID;
            const subjectID = this.props.match.params.subjectID;
            
            axios.get(`https://diploma.zharaskhan.com/api/classes/${subjectID}/homeworks/${hwID}/`)
                .then(res => {
                    this.setState({
                        homework: res.data
                    });
                })
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
                    <p>{this.state.homework.description}</p>
                </Card>
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