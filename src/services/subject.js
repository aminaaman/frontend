import request from './api'

function list() {
    return request({
        url:    `/classes/`,
        method: 'GET'
    });
}


function get(id) {
    return request({
        url:    `/classes/${id}/`,
        method: 'GET'
    });
}


function remove(id) {
    return request({
        url:    `/classes/${id}/`,
        method: 'DELETE'
    });
}


function create({name, description}) {
    return request({
        url:    '/classes/',
        method: 'POST',
        data:   {
            "name": name,
            "description": description,
        }
    });
}

function update(id, {name, description}) {
    return request({
        url:    `/classes/${id}/`,
        method: 'PUT',
        data:   {
            "name": name,
            "description": description,
        }
    });
}

function register_for_class(subject_id, access_code) {
    return request({
        url:    '/register_for_class/',
        method: 'POST',
        data:   {
            "subject_id": subject_id,
            "access_code": access_code,
        }
    });
}

const SubjectService = {
    list, create, get, remove, update, register_for_class//, update, delete, etc. ...
}

export default SubjectService;
