import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../redux/actions/authActions";

class Landing extends Component {
  componentDidMount() {
    this.props.getUserInfo();
  }

  render() {
    return (
      <div>
        <div className="intro">
          <img src="img/header.jpg" alt="" className="intro__hero__img" />
        </div>{" "}
        {/* END OF INTRO */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: () => dispatch(getUser),
});

export default connect(undefined, mapDispatchToProps)(Landing);
