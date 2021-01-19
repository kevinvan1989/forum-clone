import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default class CreatePostBtn extends Component {
  render() {

    return (
      <div>
        <Link to="/create-post" className="create-post">
          <span className="create-post__txt d-block">Create Post</span>
          <FontAwesomeIcon
            icon={faPlusSquare}
            inverse
            className="create-post__icon"
          />
        </Link>
      </div>
    );
  }
}
