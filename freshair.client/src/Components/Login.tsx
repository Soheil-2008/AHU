import { useNavigate } from "react-router-dom";
import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

import Logo from "../../src/imgs/Logo.png";
import { Button } from "@mui/material";

import { globalState } from "./StateProvider";
import Swal from "sweetalert2";
type User = {
  name?: string;
  password?: string;
};

const Login = () => {
  const { setState } = globalState();

  const navigate = useNavigate();
  const [user, setUser] = useState<User>({});

  useEffect(() => {
    navigate("/");
    setAxiosDefaultHeaders();
    // eslint-disable-next-line
  }, []);

  const setAxiosDefaultHeaders = () => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // const response = await axios.post(
      //   `${state.server}/api/user/login`,
      //   user
      // );
      const response = {
        data: {
          id: 1,
          name: "user1",
          token: "token",
          role: "user",
        },
        status: 200,
      };
      if (response.status == 200) {
        setState((prev) => ({ ...prev, user: response.data }));

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data));

        setAxiosDefaultHeaders();
        if (response.data.role === "admin") {
          navigate("/admin");
        } else {
          navigate(`/user/projects`);
        }
      }
    } catch (error) {
      console.log(error);
      if (isAxiosError(error)) {
        if (error.response?.status == 401) {
          Swal.fire({
            title: "Error",
            text: "Invalid username or password",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      } else {
        Swal.fire({
          title: "Error",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    }
  };

  return (
    <main>
      <div className="w-[500px] mt-20 mx-auto flex flex-col items-center bg-gray-100 rounded-md p-5 shadow-xl">
        <img className="w-1/2" src={Logo} alt="logo" />
        <h5 className="my-6 font-semibold text-2xl">
          Fresh Air Design Software
        </h5>

        <form onSubmit={handleSubmit} noValidate>
          <TextField
            value={user.name || ""}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, name: e.target.value }))
            }
            margin="normal"
            required
            fullWidth
            label="Username"
            autoComplete="new-username"
          />
          <TextField
            value={user.password || ""}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="new-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <h1 className="text-center text-xl">Version 1.0</h1>
        </form>
      </div>
    </main>
  );
};

export default Login;
