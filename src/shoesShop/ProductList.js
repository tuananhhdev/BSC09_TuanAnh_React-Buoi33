import React, { Component } from "react";
import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";
import data from "./data.json";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";

export default class ProductList extends Component {
  data = data;
  state = { selectedItem: null, isShowCart: false, cart: [] };

  setSelectedItem = (dataFromChildren) => {
    this.setState({
      selectedItem: dataFromChildren,
    });
  };

  renderProduct = () => {
    return this.data.map((item, index) => {
      return (
        <div className={styles.col} key={index}>
          <ProductItem
            setSelectedItem={this.setSelectedItem}
            item={item}
            addToCart={this.addToCart}
          />
        </div>
      );
    });
  };

  showCart = () => {
    this.setState({ isShowCart: true });
  };

  hideCart = () => {
    this.setState({ isShowCart: false });
  };

  addToCart = (product) => {
    const cloneCart = [...this.state.cart];
    const foundItem = cloneCart.find((item) => item.product.id === product.id);
    const cartItem = { product: product, quantity: 1 };
    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      cloneCart.push(cartItem);
    }

    this.setState({ cart: cloneCart }, () => {
      console.log(this.state.cart);
    });
  };

  calcTotalProductIncart = () => {
    return this.state.cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  };

  deleteCartItem = (id) => {
    const cloneCart = [...this.state.cart];
    const foundIndex = cloneCart.findIndex((item) => item.product.id === id);

    cloneCart.splice(foundIndex, 1);
    this.setState({
      cart: cloneCart,
    });
  };

  changeQuantity = (id, insOrDes) => {
    const cloneCart = [...this.state.cart];
    const foundIndex = cloneCart.findIndex((item) => item.product.id === id);

    if (insOrDes === "increase") {
      cloneCart[foundIndex].quantity += 1;
    } else if (insOrDes === "descrease" && cloneCart[foundIndex].quantity > 1) {
      cloneCart[foundIndex].quantity -= 1;
    } else {
      cloneCart.splice(foundIndex, 1);
    }

    this.setState({ cart: cloneCart });
  };

  calcTotalCash = () => {
    return this.state.cart.reduce((total, item) => {
      return total + item.quantity * item.product.price;
    }, 0);
  };

  checkOut = () => {
    this.hideCart();
    this.setState({ cart: [] });
  };

  render() {
    return (
      <div>
        <h1 className="text-center fw-light">Shoes Shop</h1>

        <i
          onClick={this.showCart}
          class="fa-solid fa-cart-shopping"
          style={{
            cursor: "pointer",
            fontSize: "25px",
            display: "flex",
            justifyContent: "right",
            marginRight: "20px",
          }}>
          ({this.calcTotalProductIncart()})
        </i>
        <div className={styles.row}>{this.renderProduct()}</div>
        {this.state.selectedItem && (
          <ProductDetail item={this.state.selectedItem} />
        )}
        {this.state.isShowCart && (
          <Cart
            checkOut={this.checkOut}
            calcTotalCash={this.calcTotalCash}
            changeQuantity={this.changeQuantity}
            deleteCartItem={this.deleteCartItem}
            cart={this.state.cart}
            hideCart={this.hideCart}
          />
        )}
      </div>
    );
  }
}
