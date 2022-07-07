import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const UsersList = ({ data }) => {
  //   const [users, setUsers] = useState([]);
  //   const [term, setTerm] = useState("");
  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //       const json = await res.json();
  //       setUsers(json);
  //       console.log(json);
  //     };

  //     fetchUsers();
  //   }, []);

  let renderedUsers = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });

  //   let filteredUsers = users
  //     .filter(({ name }) => {
  //       return name.indexOf(term) >= 0;
  //     })
  //     .map((user) => {
  //       return (
  //         <div key={user.id}>
  //           <p>
  //             <strong>{user.name}</strong>
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
      <div>{renderedUsers}</div>
    </div>
  );
};
const SearchUsers = HOC(UsersList, "users");
export default SearchUsers;