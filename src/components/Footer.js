import React, { Component } from "react";
import PropTypes from "prop-types";

class Footer extends Component {
  render() {
    const { currentYear } = this.props;

    return (
      <footer>
        <p className="copyright">&copy; {currentYear} Kevin Vanantwerpen</p>
      </footer>
    );
  }
}

export default Footer;

Footer.propTypes = {
  currentYear: PropTypes.string
}