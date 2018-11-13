import React, { Component } from "react";
class footer extends Component {
  state = {
    logoFooter: "/images/icons/taralite-footer.png"
  };
  render() {
    return (
      <div className="footer">
        <div className="container d-flex between">
          <div className="d-inline-flex">
            <small className="d-flex vcenter">
              <img
                className="logo mr5"
                src={this.state.logoFooter}
                alt="logo footer"
              />
              &copy; 2018 - All rights reserved.
            </small>
          </div>
          <small>v1.0.0</small>
        </div>
      </div>
    );
  }
}

export default footer;
