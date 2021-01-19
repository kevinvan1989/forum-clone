import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../redux/actions/postsActions";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Pagebutton extends Component {
  getToPage = (num) => {
    localStorage.setItem("last_visited_page", num);
    this.props.getPosts(num);
    window.scroll({
        top: 0
    })
  };

  render() {
      
    return (
      <div>
          {this.props.pageNr !== this.props.postData.current_page ? 
          <Link to={`/overview/${this.props.pageNr}`} onClick={()=>{this.getToPage(this.props.pageNr)}}>
          <div>{this.props.pageNr}</div>
          
        </Link>
        :
        <Link to={`/overview/${this.props.pageNr}`} onClick={()=>{this.getToPage(this.props.pageNr)}}>
          <div className="btn--active">{this.props.pageNr}</div>
        </Link>
        }
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
    postData: state.posts
})

const mapDispatchToProps = (dispatch) => ({
  getPosts: (page) => dispatch(fetchPost(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagebutton);

Pagebutton.propTypes = {
  postData: PropTypes.object,
  getPosts: PropTypes.func,
  pageNr: PropTypes.string,
  current_page: PropTypes.string
}