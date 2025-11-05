
export async function generateMetadata() {
  return {
    title: "Users"
  }
}

async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
  }

  
  export default async function Users() {
    const users = await getUsers();
  
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold">Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id} className="py-2">
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  