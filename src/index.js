import react, { Component } from "react";
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  buttonClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    console.log(this.state.open);
    const bodyText = "Hello World";
    const buttonName = "Click";
    return (
      <Button
        buttonClick={this.buttonClick.bind(this)}
        open={this.state.open}
        bodyText={bodyText}
        buttonName={buttonName}
      />
    );
  }
}

class Modal extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.open ? "inner-modal inner-modal-open" : "inner-modal"
        }
      >
        <Content
          open={this.props.open}
          bodyText={this.props.bodyText}
          buttonClick={this.props.buttonClick}
        />
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.open ? "content-wrapper content-open" : "content-wrapper"
        }
        onClick={this.props.open ? null : this.props.buttonClick}
      >
        <i className="fa fa-times-circle" onClick={this.props.buttonClick} />
        <p className="modal-content">{this.props.bodyText}</p>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <div>
        <button
          className="button"
          onClick={this.props.buttonClick}
          open={this.props.open}
        >
          {" "}
          {this.props.buttonName}
        </button>
        <Modal
          open={this.props.open}
          buttonClick={this.props.buttonClick}
          bodyText={this.props.bodyText}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("modal-button"));
