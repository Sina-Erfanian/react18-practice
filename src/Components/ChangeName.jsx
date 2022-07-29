import { Component } from "react";

class ChangeName extends Component {
  constructor() {
    super();

    this.state = {
      name: "sina",
    };
  }

  changeMyName = () => {
    this.setState({ name: "Sajad" });
  };

  render() {
    const { name } = this.state;
    return (
      <>
        <h1>{name}</h1>
        <button onClick={this.changeMyName}>Click Me</button>
      </>
    );
  }
}

export default ChangeName;
