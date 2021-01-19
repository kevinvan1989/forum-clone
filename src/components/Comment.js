import React, { Component } from "react";
import Time from "./Time";
import Userinfo from "./Userinfo";
import PropTypes from "prop-types";

export default class Comment extends Component {
  render() {
    const { body, created_at } = this.props.commentData;
    const {
      id: userId,
      avatar,
      first_name,
      last_name,
    } = this.props.commentData.user;

    return (
      <div className="comment">
        <Time created_at={created_at} exactTime={true} />
        <div
          className="body-txt"
          dangerouslySetInnerHTML={{ __html: body }}
        ></div>
        <Userinfo
          userId={userId}
          imgUrl={{ avatar: avatar, avatar_class: "grid__item--img" }}
          name_class="grid__item--username"
          firstName={first_name}
          lastName={last_name}
          optClassNames={true}
        />
      </div>
    );
  }
}

Comment.propTypes = {
  body: PropTypes.string,
  created_at: PropTypes.string,
  userId: PropTypes.string,
  avatar: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
};
