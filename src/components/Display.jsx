import React, { Component } from 'react'

class Display extends Component {
    render() {
        return (
            <fieldset>
                <legend>Your Form Details</legend>
                <p>First name:</p>
                <p>Last Name:</p>
                <p>email:</p>
                <p>password:</p>
                <p>confirm password:</p>
            </fieldset>
        )
    }
}

export default Display