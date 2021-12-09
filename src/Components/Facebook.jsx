import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import {componentClicked, responseFacebook} from 'react-facebook-login'

export default class Facebook extends Component {

    responseFacebook = (response) => {
        console.log(response);
      }

    render() {
        return (
            <div>
                <FacebookLogin
                    appId="630907774986060"
                    buttononText="Login with Facebook"
                    fields="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook} />
            </div>
        )
    }
}
