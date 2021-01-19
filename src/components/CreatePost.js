import React, { Component } from "react";
import { Formik } from "formik";
import PostTextEditor from "./PostTextEditor";
import * as Yup from "yup";
import { connect } from "react-redux";
import { addNewPost } from "../redux/actions/postsActions";
import { Redirect } from "react-router-dom";

class CreatePost extends Component {
  state = {
    redirect: false,
  };

  setRedict = () => {
    this.setState({ redirect: true });
    console.log(this.state);
  };

  handleSubmitCreate = (values) => {
    this.props.createPost(values);
    this.setRedict();
  };

  render() {
    return (
      <div>
        {!this.state.redirect ? (
          <Formik
            onSubmit={this.handleSubmitCreate}
            initialValues={{
              POST_title: "test",
              // D.m.v. deze keys worden values opgehaald in <Field>
              POST_editor: "init value Formik",
            }}
            // Input and give feedback / errors
            validationSchema={Yup.object({})}
          >
            {(props) => (
              <PostTextEditor {...props} initValueName="CREATE_POST" />
            )}
          </Formik>
        ) : (
          <Redirect to="/overview/1" />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(addNewPost(post)),
});

export default connect(undefined, mapDispatchToProps)(CreatePost);
