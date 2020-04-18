import React, { Component } from 'react'
//import history from './../history';

class Login extends Component {

    state = {
        credentials: {email: '', password: ''}
    }

    login = event => {
        console.log(this.state.credentials);
        /*fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then(data => data.json())
        .then(
            data => {
                console.log(data.token);
            }
        ).catch( error => console.error(error)) */
    } 

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }

    render() {
        return (
            <div style={{
                position: 'absolute',
                backgroundColor: 'DIMGRAY',
                color: 'White',
                width: '450px',
                height: '450px',
                left: '700px',
                top: '180px'
            }}>
               <div style={{
                position:'absolute',
                left: '20px',
                top: '40px'
               }}> <h2> Login In to System </h2> 
               </div>   
               <br/>
               <br/>
               <br/>
               <div style={{
                position:'relative',
                left: '20px',
                top: '40px'
               }}> 

                <label>
                    <h3>Email</h3>
                    <input type="email" name="email" size="40"
                        value={this.state.credentials.email}
                        onChange={this.inputChanged}/>
                    </label>
                    </div>
                <br/>
                <div style={{
                position:'relative',
                left: '20px',
                top: '30px'
               }}> 
                    <label>
                    <h3>Password</h3>
                    <input type="password" name="password" size="40"
                    value={this.state.credentials.password}
                    onChange={this.inputChanged}/>
                    </label>
                    </div>
                <br/>
                <br/>
                <div style={{
                position:'relative',
                left: '20px',
                top: '20px'
               }}> 
                    <button onClick={this.login}>Log In</button>
                    </div>

            </div>
               

        )
    }
}
export default Login;