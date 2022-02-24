import React, { Component } from "react";

class Inputfield extends Component {
  state = {
    term: "",
  };

  Formsubmit = (e) => {
    // this.setState({term: e.target.value})
    this.props.onsubmit(this.state.term);
    e.preventDefault();
  };

  render() {
    const style = {
      height: "5rem",
      //  width: '100%',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "2px solid #789395",
      margin: "0.5rem 3rem",
    };

    const styleInput = {
      height: "2.5rem",
      width: "30rem",
      borderRadius: "15px",
      border: "2px solid",
      outline: "none",
      fontSize: "1.2rem",
      borderColor: "gray",
    };
    return (
      <div style={style}>
        <form onSubmit={this.Formsubmit}>
          <label
            style={{
              color: "gray",
              marginRight: "1rem",
              textTransform: "uppercase",
              fontSize: "1.2rem",
            }}
          >
            Image Search
          </label>
          <input
            style={styleInput}
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
            placeholder="Enter Category"
          />
        </form>
      </div>
    );
  }
}

export default Inputfield;
