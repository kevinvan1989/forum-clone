import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { addComment } from "../redux/actions/postsActions";
import CreateCommentForm from "./CreateCommentForm";
import { getUser } from "../redux/actions/authActions";
import PropTypes from "prop-types";

class CreateComment extends Component {
  handlePostComment = (values) => {
    this.props.getUser();
    const { postId } = this.props;
    this.props.postComment(values, postId);
    const { id } = this.props.match.params;
    this.props.history.push("/postdetail/" + id);
  };

  render() {
    return (
      <div id="comment-editor">
        <Formik
          onSubmit={this.handlePostComment}
          initialValues={{
            // D.m.v. deze keys worden values opgehaald in <Field>
            ADD_COMMENT_editor: "init value Formik",
          }}
          // Input and give feedback / errors
          validationSchema={Yup.object({})}
        >
          {(props) => <CreateCommentForm {...props} />}
        </Formik>
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
  postComment: (values, postID) => dispatch(addComment(values, postID)),
  getUser: () => dispatch(getUser),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);

CreateComment.propTypes = {
  getUser: PropTypes.func,
  postComment: PropTypes.func,
  postId: PropTypes.string,
  id: PropTypes.string
};
