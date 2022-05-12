import { Component } from "react";

export class Disable extends Component {
    constructor() {
      super();
      this.state = { value: '' };
      this.onChange = this.onChange.bind(this);
      this.add = this.add.bind(this);
    }
  
    add() {
      this.setState({ value: '' });
    }
  
    onChange(e) {
      this.setState({ value: e.target.value });
    }
  
    render() {
      return (
        <div>
          <input
            onChange={this.onChange}
            placeholder="Номер заказа из смс"
          />
          <button disabled={!this.state.value}>Продолжить</button>
        </div>
      );
    }
  }