import React from "react"
import style from "./Pawnshop.module.css"

   export class Pawnshop extends React.Component {
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
            <div className="add-item">
              <input
                onChange={this.onChange}
              />
              <button disabled={!this.state.value}>Adds</button>
            </div>
          );
        }
      }
      
 
