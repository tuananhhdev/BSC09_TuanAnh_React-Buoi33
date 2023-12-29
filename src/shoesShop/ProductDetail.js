import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    const { name, image, price, description, quantity } = this.props.item;
    return (
      <div style={{ border: "1px solid red", padding: 30 }}>
        <h4>Tên sản phẩm: {name}</h4>
        <img src={image} alt="" />
        <h4>Giá: {price}</h4>
        <h4>Mô tả: {description}</h4>
        <h4>Số lượng: {quantity}</h4>
      </div>
    );
  }
}
