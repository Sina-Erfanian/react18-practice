import { useState, useCallback, useEffect } from "react";

const List = ({ getItems }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(getItems());
    console.log("Updating");
  }, [getItems]);

  return item.map((e, i) => <div key={i}>{e}</div>);
};

function UseCallbackExample() {
  const [number, setNumber] = useState(1);
  const [colorChange, setColorChange] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  },[number]);
  const appStyle = {
    backgroundColor: colorChange ? "tomato" : "white",
  };

  return (
    <div style={appStyle}>
      <h5>آشنایی با هوک useCallback</h5>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
        placeholder="عدد وارد بنما"
      />
      <button
        type="button"
        onClick={() => setColorChange((prevColorChange) => !prevColorChange)}
      >
        تغییر رنگ پس زمینه 🏳️‍🌈
      </button>
      <div style={appStyle}>
        <List getItems={getItems} />
      </div>
    </div>
  );
}

export default UseCallbackExample;
