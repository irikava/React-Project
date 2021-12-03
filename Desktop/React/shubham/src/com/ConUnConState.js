import React from "react";
import { Component } from "react/cjs/react.production.min";
import "./NewExpense/ExpenseForm.css";
import "./NewExpense/NewExpense.css";
export default class ConUnConState extends Component {
  state = {
    name: "in state",
  };
  changeState = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  unControllHandler = () => {
    console.log(this._name.value);
  };
  render() {
    return (
      <div className="new-expense button:active">
        <div className="new-expense__control">
          <label>Enter Input</label>
          <input
            type="text"
            ref={(input) => {
              return (this._name = input);
            }}
            defaultValue={this.state.name}
          />
        </div>
        <div className="new-expense button:active">
          <button type="submit" onClick={this.unControllHandler}>
            {" "}
            UnControlled
          </button>
        </div>
        <br />
        <br />
        <div className="new-expense__control">
          <input
            type="text"
            value={this.state.name}
            onChange={this.changeState}
          ></input>
        </div>
        <br />
        <br />
        <label>{this.state.name}</label>
      </div>
    );
  }
}
