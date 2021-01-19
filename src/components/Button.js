import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


export default class Button extends Component {
  render() {
    const { btnText, url, type, disabled, func, css } = this.props;
    if (url) {
      return (
        <Link to={url}>
          <button className={css} disabled={disabled}>
            {btnText}
          </button>
        </Link>
      );
    } else if (func) {
      return (
        <button className={css} onClick={func}>
          {btnText}
        </button>
      );
    } else {
      return (
        <button className={css} type={type} disabled={disabled}>
          {btnText}
        </button>
      );
    }
  }
}

Button.propTypes = {
  btnText: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  func: PropTypes.func,
  css: PropTypes.string
}