import axios from 'axios';

const client = axios.create({
    baseURL: `https://diploma.zharaskhan.com/api/`,

});


const request = function(options) {

    const onSuccess = function(response) {
        console.debug('Request Successful!', response);
        return response.data;
    }

    const onError = function(error) {
        console.error('Request Failed:', error.config);

        if (error.response) {
            // Request was made but server responded with something
            // other than 2xx
            console.error('Status:',  error.response.status);
            console.error('Data:',    error.response.data);
            console.error('Headers:', error.response.headers);

        } else {
            // Something else happened while setting up the request
            // triggered the error
            console.error('Error Message:', error.message);

            console.error('Error Message:', error);
        }

        return Promise.reject(error.response || error.message);
    }

    options["headers"] = {
        Authorization: "JWT " + localStorage.getItem('token')
    }

    return client(options)
        .then(onSuccess)
        .catch(onError);
}

export default request;
