import React from "react";
import { getData } from "../data/data";
import {
  NavLink,
  Outlet,
  useSearchParams,
  useLocation,
} from "react-router-dom";

function Books() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);
  const myData = getData();
  return (
    <div>
      <input
        type="text"
        value={searchParams.get("filter") || ""}
        onChange={(e) => {
          let filter = e.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />
      {myData
        .filter((book) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = book.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })
        .map((ele) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                marginBottom: 20,
                textDecoration: "none",
                color: isActive ? "red" : "",
              };
            }}
            to={`/books/${ele.id}${location.search}`}
            key={ele.id}
          >
            {ele.name}
          </NavLink>
        ))}
      <hr />
      <Outlet />
    </div>
  );
}

export default Books;
