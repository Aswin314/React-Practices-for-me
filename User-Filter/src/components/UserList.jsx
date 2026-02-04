import React, { useState } from "react";

const UserList = () => {
  const usersData = [
    { id: 1, name: "Aswin", city: "Kochi" },
    { id: 2, name: "Rahul", city: "Delhi" },
    { id: 3, name: "Meena", city: "Chennai" },
    { id: 4, name: "John", city: "Mumbai" },
    { id: 5, name: "Akhil", city: "Pune" },
    { id: 6, name: "David", city: "Bangalore" },
  ];
  const [users, setUsers] = useState(usersData);
  return (
    <>
      <div>UserList</div>
      <input
        type="text"
        placeholder="Search by names"
        onChange={(e) => {
          const Value = e.target.value.toLowerCase();
          const Filter = usersData.filter((user) =>
            user.name.toLowerCase().includes(Value),
          );
          setUsers(Filter);
        }}
      />
      <button
        onClick={() => {
          const Sorted = [...users].sort((a, b) =>
            a.name.localeCompare(b.name),
          );
          setUsers(Sorted);
        }}
      >
        A-Z
      </button>
      <button
        onClick={() => {
          const Sorted = [...users].sort((a, b) =>
            b.name.localeCompare(a.name),
          );
          setUsers(Sorted);
        }}
      >
        Z-A
      </button>
      {users.map((user) => (
        <div key={user.id}>
          <h3>
            {user.name}-{user.city}
          </h3>
        </div>
      ))}
    </>
  );
};

export default UserList;
