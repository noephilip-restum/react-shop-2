import React, { Component } from "react";
import "./App.css";

import Product from "./components/Product";
import CartItem from "./components/CartItem";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      hats: [
        {
          id: 1,
          title: "Fisherman's Hat",
          description:
            "Headgear commonly used by fishermen. Increases fishing skill marginally.",
          price: 12.99,
          imageUrl: "https://via.placeholder.com/150x150"
        },
        {
          id: 2,
          title: "Metal Hat",
          description: "Uncomfortable, but sturdy.",
          price: 8.99,
          imageUrl: "https://via.placeholder.com/150x150"
        }
      ],
      beachGear: [
        {
          id: 3,
          title: "Tent",
          description: "Portable shelter.",
          price: 32.99,
          imageUrl: "https://via.placeholder.com/150x150"
        }
      ],
      toggle: false
    };
  }

  addToCart = item => {
    this.setState({
      cart: [...this.state.cart, item]
    });
  };

  checkout = () => {
    this.setState({ cart: [] });
    alert("Purchase is complete!");
  };

  deleteFromCart = id => {
    this.setState({
      cart: this.state.cart.filter(i => i.id !== id)
    });
  };

  toggleView = () => {
    this.state.toggle
      ? this.setState({ toggle: false })
      : this.setState({ toggle: true });
  };

  render() {
    return (
      <div className="App">
        <section className="products">
          <h1>Products</h1>
          <button onClick={this.toggleView}>Toggle View</button>
          <h2>Hats</h2>
          {this.state.hats.map(item => (
            <Product
              key={item.id}
              item={item}
              addToCart={this.addToCart}
              toggle={this.state.toggle}
            />
          ))}

          <h2>Beach Gear</h2>
          {this.state.beachGear.map(item => (
            <Product
              key={item.id}
              item={item}
              addToCart={this.addToCart}
              toggle={this.state.toggle}
            />
          ))}
        </section>

        <section className="cart">
          <h1>Cart</h1>
          <h2>
            Total: $
            {this.state.cart.reduce(
              (totalPrice, product) => (totalPrice += product.price),
              0
            )}
          </h2>
          <button onClick={this.checkout}>Checkout</button>
          {this.state.cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              deleteFromCart={this.deleteFromCart}
            />
          ))}
        </section>
      </div>
    );
  }
}
