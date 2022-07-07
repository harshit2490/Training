import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const TodoList = ({ data }) => {
  //   const [todos, setTodos] = useState([]);
  //   const [term, setTerm] = useState("");
  //   useEffect(() => {
  //     const fetchTodos = async () => {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //       const json = await res.json();
  //       setTodos(json);
  //       console.log(json);
  //     };

  //     fetchTodos();
  //   }, []);

  let renderTodos = data.map((todo) => {
    return (
      <div key={todo.id}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });

  //   let filteredTodos = todos
  //     .slice(0, 10)
  //     .filter(({ title }) => {
  //       return title.indexOf(term) >= 0;
  //     })
  //     .map((todo) => {
  //       return (
  //         <div key={todo.id}>
  //           <p>
  //             <strong>{todo.title}</strong>
  //           </p>
  //         </div>
  //       );
  //     });

  return (
    <div>
      {/* <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      /> */}
      <div>{renderTodos}</div>
    </div>
  );
};

const SearchTodos = HOC(TodoList, "todos");
export default SearchTodos;