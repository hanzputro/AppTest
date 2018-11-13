import React, { Component } from "react";

class Loan extends Component {
  state = {
    loan: [
      {
        id: 1,
        periode: "feb 2018",
        pokok: "Rp 8.333.333",
        bunga: "Rp 495.416",
        denda: "Rp 0",
        jumlah: "Rp 8.828.750",
        status: "lunas"
      },
      {
        id: 2,
        periode: "Mar 2018",
        pokok: "Rp 8.333.333",
        bunga: "Rp 495.416",
        denda: "Rp 0",
        jumlah: "Rp 8.828.750",
        status: "lunas"
      },
      {
        id: 3,
        periode: "Apr 2018",
        pokok: "Rp 8.333.333",
        bunga: "Rp 495.416",
        denda: "Rp 0",
        jumlah: "Rp 8.828.750",
        status: "belum-lunas"
      },
      {
        id: 4,
        periode: "Mei 2018",
        pokok: "Rp 8.333.333",
        bunga: "Rp 495.416",
        denda: "Rp 0",
        jumlah: "Rp 8.828.750",
        status: "belum-lunas"
      },
      {
        id: 5,
        periode: "Jun 2018",
        pokok: "Rp 8.333.333",
        bunga: "Rp 495.416",
        denda: "Rp 0",
        jumlah: "Rp 8.828.750",
        status: "belum-lunas"
      },
      {
        id: 6,
        periode: "Jul 2018",
        pokok: "Rp 8.333.333",
        bunga: "Rp 495.416",
        denda: "Rp 0",
        jumlah: "Rp 8.828.750",
        status: "belum-lunas"
      }
    ]
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>PERIODE</th>
            <th>POKOK</th>
            <th>BUNGA</th>
            <th>DENDA</th>
            <th>JUMLAH</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.state.loan.map(loan => (
            <tr key={loan.id} className={loan.status}>
              <td>{loan.id}</td>
              <td>{loan.periode}</td>
              <td>{loan.pokok}</td>
              <td>{loan.bunga}</td>
              <td>{loan.denda}</td>
              <td>{loan.jumlah}</td>
              <td>
                {loan.status === "lunas" ? (
                  <span className="btn-secondary sm loan-status">
                    {loan.status}
                  </span>
                ) : (
                  ""
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Loan;
