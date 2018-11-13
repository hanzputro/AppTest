import React, { Component } from "react";
import "../../styles/components/header.scss";

class header extends Component {
  state = {
    logoTaralite: "/images/logo-taralite-alt.svg",
    iconFeedback: "/images/icons/feedback.png",
    iconLogout: "/images/icons/logout.png"
  };
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="container d-flex between">
            <img
              src={this.state.logoTaralite}
              className="logo"
              alt="taralite logo"
            />
            <nav>
              <ul>
                <li>
                  <a href="#">
                    <img src={this.state.iconFeedback} alt="" />
                  </a>
                </li>
                <li>
                  <span className="btn-line">
                    Hai, Jati Sukmana!
                    <a href="#" className="icon">
                      <img src={this.state.iconLogout} alt="" />
                    </a>
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default header;
