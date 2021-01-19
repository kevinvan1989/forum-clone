import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { API } from "../libs/API";
import RegisterForm from "../components/Forms/RegisterForm";
import { Redirect } from "react-router-dom";

export default class Register extends Component {
  state = {
    redirect: false,
  };

  handleRegister = (values) => {
    const {
      REGISTER_firstName,
      REGISTER_lastName,
      REGISTER_email,
      REGISTER_password,
      REGISTER_avatar,
      REGISTER_favColor,
    } = values;
    const userData = {
      // Set data to API format (naming + FORMIK values)
      first_name: REGISTER_firstName,
      last_name: REGISTER_lastName,
      email: REGISTER_email,
      password: REGISTER_password,
      avatar: REGISTER_avatar,
      favorite_color: REGISTER_favColor,
    };

    // Submit all data to create new user ...
    // No tokens here
    API.post("api/users", userData).then((response) => {
    });

    this.setState({ redirect: true });
  };

  render() {
    return (
      <div className="m-5">
        {!this.state.redirect ? (
          <Formik
            onSubmit={this.handleRegister}
            initialValues={{
              // D.m.v. deze keys worden values opgehaald in <Field>
              REGISTER_firstName: "",
              REGISTER_lastName: "",
              REGISTER_email: "",
              REGISTER_password: "",
              REGISTER_avatar: "",
              REGISTER_favColor: "#2F9599",
            }}
            // Input and give feedback / errors
            validationSchema={Yup.object({
              REGISTER_firstName: Yup.string().required("req"),

              REGISTER_lastName: Yup.string().required("required"),

              REGISTER_email: Yup.string()
                .matches(
                  /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                  "Not a valid email"
                )
                .required("required"),

              REGISTER_password: Yup.string()
                // .matches(
                //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&])$/,
                //   "Must contain at least 1 cap, 1 digit & 1 spec char"
                // )
                .min(8)
                .required("required"),

              REGISTER_avatar: Yup.string().required(),

              REGISTER_favColor: Yup.string().required(),
            })}
          >
            {(props) => <RegisterForm {...props} />}
          </Formik>
        ) : (
          <Redirect to={"/login"} />
        )}
      </div>
    );
  }
}
