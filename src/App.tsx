import React from "react";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="flex justify-center items-start  bg-gray-100 h-screen overflow-y-auto">
      <Todo />
    </div>
  );
}

export default App;
