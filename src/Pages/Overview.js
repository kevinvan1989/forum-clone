import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../redux/actions/postsActions";
import Blogpost from "../components/Blogpost";
import ClipLoader from "react-spinners/ClipLoader";
import CreatePostBtn from "../components/CreatePostBtn";
import { getUser } from "../redux/actions/authActions";
import Pagination from "../components/Pagination";

class Overview extends Component {
  componentDidMount() {
    this.props.getPosts(this.props.match.params.page);
    this.props.getUser();
  }

  render() {
    const { postData, userAuthorized } = this.props;

    if (postData.posts && postData.posts.length !== 0) {
      return (
        <main>
          <h1 className="text-center">Blogposts overview</h1>
          <div>{userAuthorized.user !== "not set" && <CreatePostBtn />}</div>
          <div>
            {postData.posts.map((post) => (
              <Blogpost postDetail={post} />
            ))}
          </div>
          <Pagination />
        </main>
      );
    } else {
      return <ClipLoader />;
    }
  }
}

const mapStateToProps = (state) => ({
  postData: state.posts,
  userAuthorized: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (page) => dispatch(fetchPost(page)),
  getUser: () => dispatch(getUser),
});

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
