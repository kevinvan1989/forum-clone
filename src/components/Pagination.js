import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../redux/actions/postsActions";
import Pagebutton from "../components/Pagebutton";
import PropTypes from "prop-types";

class Pagination extends Component {
  getToPage = (page) => {
    this.props.getRequestedPage(page);
  };

  render() {
    const {
      last_page: totalNumPages,
      current_page: current,
    } = this.props.postData;

    const pages = new Array(totalNumPages);
    for (let j = 0; j < totalNumPages; j++) {
      pages[j] = j + 1;
    }

    return (
      <div className="pagination">
        {pages.map((page) => (
          <Pagebutton pageNr={page} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  postData: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  getRequestedPage: (page) => dispatch(fetchPost(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

Pagination.propTypes = {
  postData: PropTypes.object,
  getRequestedPage: PropTypes.func
}