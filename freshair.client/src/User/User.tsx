import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Loading from "../Components/Loading";
import Navbar from "../Components/Navbar";

import Design from "./Pages/Design";

import { globalState } from "../Components/StateProvider";
import Projects from "./Pages/Projects";

import "./user.css";

type User = {
  id: number;
  name: string;
  token: string;
  role: string;
};

const User = () => {
  const { setState } = globalState();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user: User = JSON.parse(storedUser);
      setState((prev) => ({ ...prev, user }));
    }
    setAxiosDefaultHeaders();
  }, [setState]);

  const setAxiosDefaultHeaders = () => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/projects"
          element={
            <Suspense fallback={<Loading />}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="/design"
          element={
            <Suspense fallback={<Loading />}>
              <Design />
            </Suspense>
          }
        />

        <Route path="*" element={<h1>Error : 404 , Page Not Found</h1>} />
      </Routes>
    </>
  );
};

export default User;
