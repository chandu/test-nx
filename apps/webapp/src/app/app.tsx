import {Todo} from "@test-nx/model";
import {useEffect, useState} from "react";
import {SharedUi} from "@test-nx/shared-ui";



export function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = () => {
    console.error('Fetching Todos');

    try {
      fetch('/api/todos')
        .then((_) => {
          return _.json()
        })
        .then(setTodos);
    } catch (e) {
      console.error(e)
    }
  }

  console.log(todos);

  return (
    <>
      <SharedUi />
      <button onClick={() => fetchTodos()}>Fetch Todos</button>
      {
      todos.map((todo) => <div>{todo.name}</div>)
      }
    </>
  );
}

export default App;
