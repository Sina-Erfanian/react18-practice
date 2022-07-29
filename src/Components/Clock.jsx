import { Component } from "react";
// import SupClock from "./SupClock"
import SecondClock from "./SecondClock";

class Clock extends Component {
  constructor() {
    super();

    this.state = {
      date: new Date(),
      showClock: true,
      color: false,
    };

    this.changeClock = this.changeClock.bind(this)
    this.changeColor = this.changeColor.bind(this)
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  tick() {
    // this.setState({ date: new Date() });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  changeClock() {
    this.setState({ showClock: !this.state.showClock });
  }

  changeColor() {
    this.setState({ color: !this.state.color });
  }

  render() {
    const { date, showClock, color } = this.state;
    return (
      <>
        {showClock ? <SecondClock date={date} color={color} /> : null}
        <button onClick={this.changeClock}>Show Clock</button>
        <button onClick={this.changeColor}>Change color</button>
      </>
    );
  }
}

export default Clock;
