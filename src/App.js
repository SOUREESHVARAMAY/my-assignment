import React from "react";
import TaskManager from "./TaskManager";
import { UserProvider } from "./UserContext";
import "./index.css";

const App = () => {
  return (
    <UserProvider>
      <TaskManager />
    </UserProvider>
  );
};

export default App;
