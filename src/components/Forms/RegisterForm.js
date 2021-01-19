import React, { Component } from 'react'
import { ErrorMessage, Form } from "formik"
import Formgroup from "./Formgroup"
import { ChromePicker } from 'react-color'

export default class RegisterForm extends Component {
  render() {
    const {setFieldValue, values} = this.props
    return (
      <div>
        <Form>
            <Formgroup
              type="text"
              typeOfInfo="REGISTER_firstName"
              title="First name"
            />

            <Formgroup 
              type="text" 
              typeOfInfo="REGISTER_lastName" 
              title="Last name" 
            />

            <Formgroup 
              type="email" 
              typeOfInfo="REGISTER_email" 
              title="E-mail" 
            />

            <Formgroup 
              type="password" 
              typeOfInfo="REGISTER_password" 
              title="Password" 
            />

            <Formgroup 
              type="text" 
              typeOfInfo="REGISTER_avatar" 
              title="Avatar" 
            />

            {/* <Formgroup
              type="color"
              typeOfInfo="REGISTER_favColor"
              title="Favorite color"
            /> */}


            <ChromePicker 
              name="REGISTER_favColor"
              color={values.REGISTER_favColor}
              onChangeComplete={color => setFieldValue('REGISTER_favColor', color.hex)}
            />

            <ErrorMessage name="REGISTER_favColor" component="div" className="error-msg" />

            <button type="submit">Register</button>
          </Form>
      </div>
    )
  }
}
