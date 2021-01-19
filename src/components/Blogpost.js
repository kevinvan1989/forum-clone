import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Time from "./Time";
import Button from "./Button";
import Userinfo from "./Userinfo";
import { API } from "../libs/API";
import { showParticularPost } from "../redux/actions/postsActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

class Blogpost extends Component {
  deletePost = (id) => {
    console.log("delete");
    API.delete(`/api/posts/${id}`).then((response) => {
      console.log(response);
      window.location.reload();
    });
  };

  render() {
    console.log("blogpost props", this.props);
    const {
      body,
      comments_count,
      created_at,
      id,
      title,
      user,
      user_id: userId,
    } = this.props.postDetail;

    const { auth } = this.props;

    return (
      <div className="blogpost">
        <article>
          {/* <Time created_at={created_at} exactTime={true} /> */}
          <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
          <div
            className="body-txt"
            dangerouslySetInnerHTML={{ __html: body }}
          ></div>
          <Time created_at={created_at} exactTime={true} />
        </article>

        <aside className="p-3 user-info">
          <Userinfo
            userId={userId}
            imgUrl={{ avatar: user.avatar, avatar_class: "grid__item--img" }}
            firstName={user.first_name}
            lastName={user.last_name}
          />
          <p>{comments_count} comments</p>
          <Button css="btn" btnText={`SEE DETAILS`} url={`/postdetail/${id}`} />
          <div className="btnBox">
            {(auth.user === "not set" && (
              <Button
                css="btn"
                btnText={"ADD COMMENT"}
                url={`/postdetail/${this.props.postDetail.id}`}
                type="button"
                disabled="disabled"
              />
            )) ||
              (auth.user !== "not set" && (
                <Button
                  css="btn"
                  btnText={`ADD COMMENT`}
                  url={`/postdetail/${id}`}
                  ref={"#comment-editor"}
                />
              ))}
            <div className="btnBox--abs">
              {/* Edit post */}
              {auth.user !== "not set" && auth.payload.id === userId ? (
                <Button
                  css="btn btn--tr"
                  btnText={
                    <Link to={`/edit-post/${id}`}>
                      <FontAwesomeIcon icon={faPencilAlt} />
                    </Link>
                  }
                />
              ) : (
                ""
              )}
              {/* Delete post */}
              {auth.user !== "not set" && auth.payload.id === userId ? (
                <Button
                  css="btn btn--tr"
                  btnText={<FontAwesomeIcon icon={faTrashAlt} />}
                  func={() => this.deletePost(this.props.postDetail.id)}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = (dispatch) => ({
  showDetail: (postId) => dispatch(showParticularPost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blogpost);
