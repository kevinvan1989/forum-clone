import React, { Component } from "react";
import { Field, ErrorMessage, Formik } from "formik";

export default class Formgroup extends Component {
  render() {
    const { type, typeOfInfo, title } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={typeOfInfo}>{title}</label>
        <Field
          type={type}
          name={typeOfInfo}
          id={typeOfInfo}
          className="inputField"
          defaultValue={typeOfInfo.value}
        />

        <ErrorMessage name={typeOfInfo} component="div" className="error-msg" />
      </div>
    );
  }
}
