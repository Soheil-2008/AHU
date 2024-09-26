import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import "./index.css";
import { StateProvider } from "./Components/StateProvider";
import User from "./User/User";
import Admin from "./Admin/Admin";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <StateProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user/*" element={<User />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StateProvider>
  // </StrictMode>
);
