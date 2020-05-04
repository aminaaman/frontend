import request from './api'

function list(subjectId) {
    return request({
        url:    `/classes/${subjectId}/homeworks/`,
        method: 'GET'
    });
}


function get(subjectId, id) {
    return request({
        url:    `/classes/${subjectId}/homeworks/${id}/`,
        method: 'GET'
    });
}


function remove(subjectId, id) {
    return request({
        url:    `/classes/${subjectId}/homeworks/${id}/`,
        method: 'DELETE'
    });
}


function create(subjectId, {name, description, deadline}) {
    return request({
        url:    `/classes/${subjectId}/homeworks/`,
        method: 'POST',
        data:   {
            "name": name,
            "description": description,
            "deadline": deadline
        }
    });
}


function update(subjectId, id, {name, description, deadline}) {
    return request({
        url:    `/classes/${subjectId}/homeworks/${id}/`,
        method: 'PUT',
        data:   {
            "name": name,
            "description": description,
            "deadline": deadline
        }
    });
}
const HomeworkService = {
    list, create, get, remove, update//, update, delete, etc. ...
}

export default HomeworkService;
