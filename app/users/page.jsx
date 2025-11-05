"use client";

import { useState, useEffect } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function loadUsers() {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    const fetchUsers = async () => {
      await loadUsers();
    };
    
    fetchUsers();
  }, []);

  async function addUser() {
    await fetch("/api/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ name, email }),
    });

    setName("");
    setEmail("");
    loadUsers(); // still fine here
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      <input
        className="border p-2 mr-2"
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        className="border p-2 mr-2"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <button className="bg-blue-500 text-white p-2" onClick={addUser}>
        Add User
      </button>

      <ul className="mt-4">
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
