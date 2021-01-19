import React, { Component } from "react";
import { connect } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { getUserProfile } from "../redux/actions/postsActions";
import moment from "moment";
import BlogpostProfile from "../components/BlogpostProfile";

class ProfilePage extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getUsersDetails(id);
    this.setState({
      loading: !this.state.loading,
    });
  }

  render() {
    const { loading } = this.state;
    const { userDetails } = this.props.post;
    return (
      <div>
        {!loading && userDetails ? (
          <div>
            {/* header */}
            <section id="profile-header">
              <div>
                <img src={userDetails.avatar} alt="" />
              </div>
              <div>
                <h1>{`${userDetails.first_name} ${userDetails.last_name}`}</h1>
                <h2>
                  Member since:{" "}
                  {moment(userDetails.created_at).format("YYYY-MM-DD")}
                </h2>
                {/* data totals of user */}
                <div id="profile__stats">
                  <h3>
                    <span class="badge badge-secondary">
                      {userDetails.comments.length}
                    </span>
                    &nbsp; &nbsp; &nbsp; comments
                  </h3>

                  <h3>
                    <span class="badge badge-secondary">
                      {userDetails.blog_posts.length}
                    </span>
                    &nbsp; &nbsp; &nbsp; blog posts
                  </h3>
                </div>{" "}
                {/* end of data */}
              </div>
            </section>

            <section>
              <h2>All blog posts of {userDetails.first_name}</h2>
              <div className="profile--posts--list">
                {userDetails.blog_posts.map((post) => (
                  <BlogpostProfile blogPost={post} />
                ))}
              </div>
            </section>
            <section></section>
          </div>
        ) : (
          <ClipLoader />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.posts,
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  getUsersDetails: (userId) => dispatch(getUserProfile(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
