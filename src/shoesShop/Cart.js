import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    return (
      <div
        className="position-fixed w-100 h-100 top-0 left-0"
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
        <div
          className="w-75 bg-white position-absolute p-3"
          style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%" }}>
          <button
            onClick={this.props.hideCart}
            className="btn btn-dark position-absolute"
            style={{ top: 10, right: 10 }}>
            X
          </button>
          <h1 className="text-center fs-3">Giỏ hàng</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map((item) => {
                return (
                  <tr>
                    <td>{item.product.id}</td>
                    <td>{item.product.name}</td>
                    <td>
                      <img
                        src={item.product.image}
                        alt=""
                        style={{ width: 50 }}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.changeQuantity(
                            item.product.id,
                            "descrease"
                          );
                        }}
                        className="btn btn-info">
                        {" "}
                        -{" "}
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => {
                          this.props.changeQuantity(
                            item.product.id,
                            "increase"
                          );
                        }}
                        className="btn btn-info">
                        {" "}
                        +{" "}
                      </button>
                    </td>
                    <td>${item.product.price}</td>
                    <td>${item.quantity * item.product.price}</td>
                    <td>
                      <button
                        onClick={() =>
                          this.props.deleteCartItem(item.product.id)
                        }
                        className="btn btn-danger">
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tr>
              <td colSpan={4} className="text-end">
                Tổng tiền
              </td>
              <td className="text-end">${this.props.calcTotalCash()}</td>
              <td className="d-flex justify-content-end">
                <button onClick={this.props.checkOut} className="btn btn-info">
                  Thanh toán
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
