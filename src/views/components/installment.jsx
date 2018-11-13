import React, { Component } from "react";
import "../../styles/components/installment.scss";

class installment extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-4 installment">
          <img
            className="icon"
            src={this.props.installment.icon}
            alt="nominal icon"
          />
          <small className="mo">{this.props.installment.title}</small>
          <h2 className="nominal d-flex">
            <img
              className="nominal-icon"
              src={this.props.installment.iconNominal}
              alt="nominal icon"
            />
            {this.props.installment.nominal}
          </h2>
          <table className={this.props.isOpen}>
            <tbody>
              {this.props.installment.detail.map(installmentDetail => (
                <tr key={installmentDetail.id}>
                  <td>{installmentDetail.type}</td>
                  <td>{installmentDetail.nominal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default installment;
