import React, { Component } from "react";
import { API } from "../libs/API";
import { Formik } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import PostTextEditor from "../components/PostTextEditor";
import { editPost } from "../redux/actions/postsActions";

class EditPost extends Component {
  state = {
    title: "",
    body: "",
    loading: true,
  };

  componentDidMount() {
    const { idPost: id } = this.props.match.params;
    API.get(`/api/posts/${id}`).then((response) => {
      this.setState({
        title: response.data.title,
        body: response.data.body,
        loading: !this.state.loading,
      });
    });
  }

  handleSubmitCreate = (values, postId) => {
    this.props.edit(values, this.props.match.params.idPost);
    window.location.href("/overview/1");
  };

  render() {
    const { title, body } = this.state;

    return (
      <div>
        {!this.state.loading && this.state.body !== "" ? (
          <Formik
            onSubmit={this.handleSubmitCreate}
            initialValues={{
              POST_title: this.state.title,
              // D.m.v. deze keys worden values opgehaald in <Field>
              POST_editor: this.state.body,
            }}
            // Input and give feedback / errors
            validationSchema={Yup.object({})}
          >
            {(props) => <PostTextEditor {...props} />}
          </Formik>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  edit: (values, postId) => dispatch(editPost(values, postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
