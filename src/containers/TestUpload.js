import React from 'react'
import axios, { post } from 'axios';
import SubmissionService from "../services/submission";

class SimpleReactFileUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file:null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }

    onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
            console.log(response.data);
        })
    }

    onChange(e) {
        this.setState({file:e.target.files[0]})
    }

    fileUpload(file){
        const formData = new FormData();
        formData.append('file',file)

        return SubmissionService.submit(this.props.subjectId, this.props.homeworkId, formData)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h3>File Upload</h3>
                <br />
                <input type="file" onChange={this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}



export default SimpleReactFileUpload
