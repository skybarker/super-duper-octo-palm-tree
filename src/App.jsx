import useFetch from "./hooks/useFetch";

function App() {
  const users = useFetch();

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
