import {Todo} from "@test-nx/model";
import {useState} from "react";
import {Button} from "@test-nx/shared-ui";
import "../styles.css";


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
    console.log(todos);
  }
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <Button label="Fetch Todos" onClick={fetchTodos}></Button>
        <div className="flex flex-col items-start py-8">
          {
            todos.map((todo) => <div className="bg-yellow-200 px-4 py-2">{todo.name}</div>)
          }
        </div>
      </div>
    </>

  );
}

export default App;
