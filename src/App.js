import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import PropTypes from "prop-types";

/* button.js */
var styles = {
  container: {
    background: "#f6f7f8",
    border: "1px solid #cdced0",
    borderRadius: 2,
    boxShadow: "0 1px 1px rgba(0, 0, 0, 0.05)"
  },
  depressed: {
    borderColor: "#c6c7ca",
    color: "#5890ff"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isDepressed: false, style: {} };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.m = this.m.bind(this);
  }

  m(args) {
    var res = {};
    for (var i = 0; i < args.length; ++i) {
      if (args[i]) {
        Object.assign(res, args[i]);
      }
    }
    console.log(res);
    return res;
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(state => ({
      isDepressed: !state.isDepressed
    }));
    console.log(this.state.isDepressed);
    console.log(styles);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div
            onClick={this.handleClick}
            style={this.m(
              styles.container,
              this.props.isDepressed === true
                ? styles.depressed
                : styles.container
            )}
          >
            button
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
App.propTypes = {
  isDepressed: PropTypes.bool,
  style: PropTypes.object
};

export default App;
