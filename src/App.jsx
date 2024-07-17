import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Button from "./components/Button";
import EmptyPage from "./pages/EmptyPage";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import UserOptions from "./components/UserOptions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>

          <Route index element={<Login />} />
          <Route
            path="Fixed_Assets_Manager"
            element={<EmptyPage title="Fixed Assets Manager Page" />}
          />
          <Route
            path="Human_Resource_Manager"
            element={<EmptyPage title="Human Resource Manager Page" />}
          />
          <Route
            path="Loans_Manager"
            element={<EmptyPage title="Loans Manager Page" />}
          />
          <Route
            path="Mobile_Banking"
            element={<EmptyPage title="Mobile Banking Page" />}
          />
          <Route
            path="Dashboard"
            element={<Dashboard />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
