import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
export default class Top extends Component {
    render() {
        return (
            <div className="Top">
                <h1><strong>Home of 100,000+ <br/>books and podcasts</strong></h1>
                <h5>Get the latest books and listen to the <br/> latest podcasts all in one place</h5>
                <Button variant="primary">Get Started</Button>
            </div>
        )
    }
}
