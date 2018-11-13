import React, { Component } from "react";
import Header from "../views/components/header";
import Installment from "../views/components/installment";
import Loan from "../views/components/loan";
import Footer from "../views/components/footer";

class home extends Component {
  state = {
    iconWarning: "/images/icons/warning.png",
    summary: [
      { id: 1, type: "tempo", value: "10 Apr 2018" },
      { id: 2, type: "denda", value: "Tidak Ada" },
      { id: 3, type: "bunga", value: "0,99%/Bulan" },
      { id: 4, type: "referensi", value: "2018BTP1957" }
    ],
    installmentDetailOpenText: "Lihat Detail",
    installmentDetailOpen: false,
    status: [
      {
        id: 1,
        title: "TERBAYAR",
        nominal: "Rp 18.157.500",
        iconNominal: "/images/icons/desktop/small/paid.svg",
        icon: "/images/icons/desktop/paid.svg",
        detail: [
          { id: 1, type: "Pokok", nominal: "Rp 16.666.666" },
          { id: 2, type: "Bunga", nominal: "Rp 990.832" },
          { id: 3, type: "Denda", nominal: "Rp 0" },
          { id: 4, type: "Provisi", nominal: "Rp 500.000" }
        ]
      },
      {
        id: 2,
        title: "TERSISA",
        nominal: "Rp 35.315.000",
        iconNominal: "/images/icons/desktop/small/due.svg",
        icon: "/images/icons/desktop/due.svg",
        detail: [
          { id: 1, type: "Pokok", nominal: "Rp 33.333.332" },
          { id: 2, type: "Bunga", nominal: "Rp 1.981.664" }
        ]
      },
      {
        id: 3,
        title: "TOTAL",
        nominal: "Rp 52.972.500",
        iconNominal: "/images/icons/desktop/small/outstanding.svg",
        icon: "/images/icons/desktop/outstanding.svg",
        detail: [
          { id: 1, type: "Pokok", nominal: "Rp 50.000.000" },
          { id: 2, type: "Bunga", nominal: "Rp 2.972.500" }
        ]
      }
    ]
  };

  classHideShow() {
    let classes = "";
    classes += this.state.installmentDetailOpen === false ? "hide" : "";
    return classes;
  }

  handleHideShow = hideshow => {
    const installmentDetailOpen = hideshow === false ? true : false;
    const installmentDetailOpenText =
      hideshow === false ? "Tutup Detail" : "Lihat Detail";
    this.setState({ installmentDetailOpen, installmentDetailOpenText });
  };

  render() {
    return (
      <React.Fragment>
        {/* ----------------HEADER---------------- */}
        <Header />

        <div className="mainbar">
          <div className="container">
            <p>Cicilan ke-3 kamu sebesar:</p>
            <h1 className="d-flex vcenter">
              Rp 8.828.750
              <img
                className="ml10"
                src={this.state.iconWarning}
                alt="icon warning"
                style={{ width: "24px" }}
              />
            </h1>

            {/* --------------------SUMMARY-------------------- */}
            <div className="row summary">
              {this.state.summary.map(summary => (
                <div key={summary.id} className="col-2">
                  <hr className="w20px" />
                  <small className="mt0 d-block">{summary.type}</small>
                  <h3 className="mt5 mb0">{summary.value}</h3>
                </div>
              ))}
              <div className="col-4 d-flex vbottom">
                <button className="btn-primary w100">
                  <strong>Cara Pembayaran</strong>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="main" style={{ marginTop: "-45px" }}>
          <div className="container">
            {/* ------------INSTALLMENT------------ */}
            <div className="panel mb40">
              <div className="panel-header">
                <h4 className="m0 title">Ringkasan Pinjaman</h4>
                <a
                  onClick={() =>
                    this.handleHideShow(this.state.installmentDetailOpen)
                  }
                  className="float-right"
                >
                  <small>{this.state.installmentDetailOpenText}</small>
                </a>
              </div>
              <div className="panel-body row p0">
                {this.state.status.map(installment => (
                  <Installment
                    key={installment.id}
                    id={installment.id}
                    installment={installment}
                    isOpen={this.classHideShow()}
                  />
                ))}
              </div>
            </div>

            {/* ----------------LOAN---------------- */}
            <div className="panel mb10">
              <div className="panel-header">
                <h4 className="m0 title">Ringkasan Cicilan</h4>
              </div>
              <div className="panel-body row p0">
                <Loan />
              </div>
            </div>
          </div>
        </div>

        {/* -----------------FOOTER----------------- */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default home;
