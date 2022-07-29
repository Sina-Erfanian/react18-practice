import React, { useMemo, useState, useDeferredValue } from "react";

const List = ({ value }) => {
  const deferredValue = useDeferredValue(value);
  const list = useMemo(() => {
    let numberList = [];
    let count = 0;

    while (count <= 10000) {
      numberList.push(<p key={count}>{deferredValue}</p>);
      count++;
    }

    return numberList;
  }, [deferredValue]);

  console.log(list);
  return <div>{list}</div>;
};

function UseDeferredValueExample() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>Use Deferred Value</h1>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value !== 0 ? <List value={value} /> : null}
    </div>
  );
}

export default UseDeferredValueExample;
