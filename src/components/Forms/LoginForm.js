import React, { Component } from 'react'
import { Form } from "formik"
import Formgroup from "./Formgroup"


export default class LoginForm extends Component {
  render() {
    return (
      <div className="m-5">
        <Form>
            <Formgroup
              type="email"
              typeOfInfo="LOGIN_email"
              title="Email"
            />

            <Formgroup 
              type="password" 
              typeOfInfo="LOGIN_password" 
              title="Password" 
            />

            <button type="submit">Login</button>
          </Form>
      </div>
    )
  }
}
