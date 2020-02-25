import React, { Component } from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./config/store";


class App extends Component {

  render() {
    console.disableYellowBox = true;
    return (
        <Provider store={store}>
          <Routes />
        </Provider>
    );
  }
}

module.exports = App;
