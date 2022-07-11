import React, { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [term, setTerm] = useState("");

  // fetch user from API
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      setUsers(json);
      console.log(json);
    };
    fetchUsers();
  }, []);


  // Search Filter 
  let filteredUsers = users
    .filter(({ name }) => {
      return name.indexOf(term) >= 0;
    })
    .map((user) => {
      return (
        <div key={user.id}>
          <p>
            <strong>{user.name}</strong>
          </p>
        </div>
      );
    });

    
  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <div>{filteredUsers}</div>
    </div>
  );
};

export default UsersList;