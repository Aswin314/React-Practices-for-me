import React, { useEffect, useState } from 'react'

const Debounce = () => {
  const users = [
    "Aswin",
    "Rahul",
    "Meena",
    "John",
    "Akhil",
    "David",
    "Arun",
    "Ramesh",
  ];

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(users);

  useEffect(() => {
    const timer = setTimeout(() => {
      const result = users.filter((name) =>
        name.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(result);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div>
      <h2>Debounced Search</h2>

      <input
        placeholder="Search name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
}

export default Debounce