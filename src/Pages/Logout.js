import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class Logout extends Component {
    state = {
        loggedOut: false
    }

    deleteToken = () => {
        localStorage.removeItem("_DEMO_TOKEN");
        this.setState({
            loggedOut: true
        })
    }

    render() {
        const token = localStorage.getItem("_DEMO_TOKEN")
        return (
            <div id="logout">
                 {token ? <button onClick={this.deleteToken} className="btn" >logout</button> : <Redirect to="/overview/1"/>}
            </div>
        )
    }
}



export default Logout

