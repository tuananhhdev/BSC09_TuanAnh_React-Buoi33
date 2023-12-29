import React, { Component } from "react";
import styles from "./ProductItem.module.css";

export default class ProductItem extends Component {
  render() {
    const { image, name, price } = this.props.item;
    return (
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img src={image} className={styles.img} alt={name} />
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardTitle}>{name}</div>
          <div className={styles.price}>Giá: {price}$</div>
          <button
            className={styles.addToCarts}
            onClick={() => {
              this.props.addToCart(this.props.item);
            }}>
            Thêm giỏ hàng
            <i class="fa-solid fa-cart-shopping ms-2"></i>
          </button>
          <button
            onClick={() => {
              this.props.setSelectedItem(this.props.item);
            }}
            className={styles.addToCarts}>
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
