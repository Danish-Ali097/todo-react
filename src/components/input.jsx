import React, { Component } from "react";

class Input extends Component {
  state = {
    input: "",
  };

  onChangeInput = (event) => {
    this.setState({ input: event.target.value });
  };

  onHandleEvent = (event) => {
    this.props.onSubmit(this.state.input);
    event.target.reset();
    this.setState({ input: "" });
    event.preventDefault();
  };

  render() {
    return (
      <form className="form-inline m-2" onSubmit={this.onHandleEvent}>
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            className="form-control"
            value={this.state.input}
            placeholder="Item"
            onChange={this.onChangeInput}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Add
        </button>
      </form>
    );
  }
}

export default Input;
