import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../imgs/Logo.png";
import { IconButton } from "@mui/material";
import { globalState } from "./StateProvider";
import { LogoutOutlined } from "@mui/icons-material";
const Navbar = () => {
  const { state, setState } = globalState();

  const navigate = useNavigate();

  return (
    <nav className="bg-gray-200 h-[70px] p-2 flex justify-between items-center">
      <div className=" w-[120px]">
        <img src={Logo} alt="logo" className="w-28" />
      </div>

      <h4 className="text-lg text-emerald-800 ">
        Welcome <span className="font-semibold">{state.user.name}</span>
      </h4>

      <div className="flex items-center gap-x-4">
        <NavLink to={`/user/projects`}>
          <span>Projects</span>
        </NavLink>

        <NavLink to={`/user/design`}>
          <span>Design</span>
        </NavLink>

        <NavLink to={"/"}>
          <IconButton
            size="medium"
            color="error"
            onClick={() => {
              localStorage.removeItem("token");
              setState((prev) => ({
                ...prev,
                user: {
                  id: -1,
                  name: "",
                  token: "",
                  role: "",
                },
              }));
              navigate("/");
            }}
          >
            <LogoutOutlined />
          </IconButton>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
