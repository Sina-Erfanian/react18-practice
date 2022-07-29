import React from "react";
import PropTypes from "prop-types";
// import "./Counter2.css"
import styles from "./Counter2.module.css"
console.log(styles);

function Counter2({ inc, dec, reset, count, font , incFont }) {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "sans-serif" , fontSize:font }}>
        My Counter App
      </h1>
      <br />
      <br />
      <div className={styles.app}>
        <p style={{color: count > 3 ? "aqua" : "orange"}}>{count}</p>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={incFont}>Increase Font Size :)</button>
      </div>
    </div>
  );
}

Counter2.prototype = {
  inc: PropTypes.func,
  dec: PropTypes.func,
  reset: PropTypes.func,
  count: PropTypes.number,
};

export default Counter2;
