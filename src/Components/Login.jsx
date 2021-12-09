import React, { Component } from 'react'
import GoogleLogin  from 'react-google-login'
export default class Login extends Component {

    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
    }
    render() {
        return (
            <div>
                <GoogleLogin
                clientId="96034088324-i723ljlmdtao6m2pt1mjhb3ppis6rjbu.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}
