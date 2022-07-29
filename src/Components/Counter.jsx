const Counter = (props) => {
  return (
    <div>
      <h3>Counter : {props.count}</h3>
    </div>
  );
};

// import { Component } from "react";

// class Counter extends Component {
//   // eslint-disable-next-line no-useless-constructor
//   constructor() {
//     super();
//   }

//   static defaultProps = {
//     count : 100
//   }

//   render() {
//     let { count } = this.props;
//     console.log(this.props);
//     return (
//       <div>
//         <h3>Counter : {count}</h3>
//         <h3>{this.props.children}</h3>
//       </div>
//     );
//   }
// }

// Counter.defaultProps = {
//     count : 120
// }

export default Counter;
