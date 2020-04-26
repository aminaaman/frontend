import React from 'react';
import axios from 'axios';
import Hws from '../components/Hw';
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
            const subjectID = this.props.match.params.subjectID;
            const hwID = this.props.match.params.hwID;
            axios.get(`https://diploma.zharaskhan.com/api/classes/${subjectID}/`)
                .then(res => {
                    this.setState({
                        homeworks: res.data
                    });
                })
        }
    }
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><Link to="/subjects">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to ="/subjects">List</Link></Breadcrumb.Item>
                 </Breadcrumb>
                <Hws data={this.state.homeworks} />
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