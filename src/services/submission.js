import request from './api'

function list(subjectId, homeworkId) {
    return request({
        url:    `/classes/${subjectId}/homeworks/${homeworkId}/submissions/`,
        method: 'GET'
    });
}


function get(subjectId, homeworkId, id) {
    return request({
        url:    `/classes/${subjectId}/homeworks/${homeworkId}/submissions/${id}/`,
        method: 'GET'
    });
}


function submit(subjectId, homeworkId, file) {

    return request({
        url:    `/classes/${subjectId}/homeworks/${homeworkId}/submissions/`,
        method: 'POST',
        headers: {
            'content-type': 'multipart/form-data'
        },
        data:   file
    });
}


const SubmissionService = {
    list, get, submit//, update, delete, etc. ...
}

export default SubmissionService;
