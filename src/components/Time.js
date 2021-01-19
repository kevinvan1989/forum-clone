import React, { Component } from "react";
import moment from "moment";
import PropTypes from "prop-types";

export default class Time extends Component {
  render() {
    const { created_at, exactTime } = this.props;

    let timeNow = moment().format("YYYY-M-D HH:mm");
    let timePosted = moment(created_at);
    const postedTimeAgo = timePosted.from(timeNow);

    const dateOfPost = moment(created_at).format("YYYY-MM-DD");
    const timeOfPost = moment(created_at).format("HH:mm");

    return (
      <div>
        {exactTime ? (
          <small>
            {dateOfPost} at {timeOfPost}
          </small>
        ) : (
          <small>Posted {postedTimeAgo}</small>
        )}
      </div>
    );
  }
}


Time.propTypes = {
  created_at: PropTypes.string,
  exactTime: PropTypes.bool
}