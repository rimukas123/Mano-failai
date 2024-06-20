import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import TodosContainer from "./components/TodosContainer/TodosContainer";

function App() {
  const [todos, setTodos] = useState([]);
const [todos,setTodos]=useState([])
  useEffect(() => {
    axios
      .get('')
      .then((response) => {
        setTodos(response.data)
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>
    <TodosContainer todos={todos} />
  </div>;
}

export default App;