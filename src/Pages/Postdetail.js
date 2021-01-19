import React, { Component } from "react";
import { API } from "../libs/API";
import Comment from "../components/Comment";
import commentIconDark from "../assets/icons/comment-icon-dark.png";
import CreateComment from "../components/CreateComment";
import { connect } from "react-redux";
import { getUser } from "../redux/actions/authActions";
import Userinfo from "../components/Userinfo";

class Postdetail extends Component {
  state = {
    post: {
      // user is defined for destructuring
      user: "",
    },
    comments: [],
  };

  componentDidMount() {
    this.props.getUser();
    const { id } = this.props.match.params;

    API.get(`/api/posts/${id}`).then((res) => {
      this.setState({
        post: res.data,
        comments: res.data.comments,
        commentsLength: res.data.comments.length,
      });
    });
  }

  addCommentToState = (comment) => {
    const commentList = this.state.comments;
    this.setState({
      ...this.state,
      comments: commentList.push(comment),
    });

    const { id } = this.props.match.params;
    this.props.history.push("/postdetail/" + id);
  };

  render() {
    const { id: postId, title, body } = this.state.post;
    const { id: userId, first_name, last_name, avatar } = this.state.post.user;
    const { isLoggedIn } = this.props;

    return (
      <div className="grid-container grid-container--2-col">
        {/* Column with orignal post and text editor */}
        <section className="grid__col grid__col--1 flex">
          {/* Display blogpost(text content) & avatar as flex */}
          <article>
            {/* Comment count total */}
            <div className="comment--info">
              <img src={commentIconDark} alt="" className="comment-icon" />{" "}
              &nbsp;
              {this.state.comments.length} comments
            </div>
            <h1>{title}</h1>
            {/* <Time created_at={created_at} exactTime={true} /> */}
            <div
              className="body-txt"
              dangerouslySetInnerHTML={{ __html: body }}
            ></div>
          </article>

          {/* Check if user is logged in:
                if so: show text area for comment
                if not: hide text area for comment */}
          {isLoggedIn.user !== "not set" && (
            <CreateComment
              postId={postId}
              addComment={this.addCommentToState}
              stated={this.state}
            />
          )}

          {/* Flex item right with image and name ;*/}
          <aside className="detail--aside">
            <Userinfo
              userId={userId}
              imgUrl={{ avatar: avatar, avatar_class: "" }}
              firstName={first_name}
              lastName={last_name}
            />
          </aside>
        </section>

        {/* Colulmn with all comments */}
        {!this.state.add && (
          <section className="grid__col grid__col--2">
            {this.state.comments.map((comment) => (
              <Comment commentData={comment} />
            ))}
          </section>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stated: state,
  isLoggedIn: state.auth,
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser),
});

export default connect(mapStateToProps, mapDispatchToProps)(Postdetail);
