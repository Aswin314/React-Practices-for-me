import { use, useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserList from "./components/Userlist";
import PageDemo from "./page/PageDemo";
import { ThemeContext } from "./context/Theme";
import Login from "./auth/Login";

function App() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {/* <UserList /> */}
      {/* <PageDemo /> */}
      <button onClick={toggleTheme}>Change Theme</button>
      <Login />
    </>
  );
}

export default App;
