import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class BlogpostProfile extends Component {
  render() {
    const { title, body, created_at } = this.props.blogPost;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div
            className="card-text"
            dangerouslySetInnerHTML={{ __html: body }}
          ></div>
        </div>
        <div className="">{created_at}</div>
      </div>
    );
  }
}

BlogpostProfile.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  created_at: PropTypes.string,
}
