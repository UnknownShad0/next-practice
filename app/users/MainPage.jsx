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

    <div className="flex flex-wrap gap-2 mb-4">
      <input
        className="border p-2 rounded-lg focus:ring focus:ring-blue-200"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border p-2 rounded-lg focus:ring focus:ring-blue-200"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={addUser}
      >
        Add User
      </button>
    </div>

    <ul className="bg-white shadow rounded-xl divide-y divide-gray-100">
      {users.map((u) => (
        <li key={u.id} className="p-3 hover:bg-gray-50">
          <span className="font-medium">{u.name}</span> — {u.email}
        </li>
      ))}
    </ul>
  </div>
  );
}
