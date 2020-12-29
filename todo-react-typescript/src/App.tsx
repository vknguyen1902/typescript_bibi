import React from "react";
import { TodoListItem } from "./TodoListItem";
//import { Todo } from "./types";


const todos = [
  {text: "Setting up the package", complete: true},
  {text: "Test on the command prompt", complete: false}
];

const App: React.FC = () => {
  return <TodoListItem todo={todos[1]}/>
}

export default App;
