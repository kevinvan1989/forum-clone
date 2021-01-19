import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class Userinfo extends Component {
  render() {
    const {
      imgUrl: imgAttr,
      firstName,
      lastName,
      userId,
    } = this.props;

    return (
      <div className="auteur--gegevens">
        <p className="auteur">Auteur:</p> &nbsp;

        <Link to={`/profile-page/${userId}`}>
          <h2 className="auteur">{`${firstName} ${
            lastName ? lastName : ""
          }`}</h2>
        </Link>
      </div>
    );
  }
}

Userinfo.propTypes = {
  imgUrl: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  userId: PropTypes.string
}