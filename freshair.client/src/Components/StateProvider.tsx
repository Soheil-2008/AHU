import React, { createContext, useContext, useState, ReactNode } from "react";

interface State {
  server: string;
  user: User;
}

interface ContextType {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}

interface User {
  id: number;
  name: string;
  token: string;
  role: string;
}

const initialState: State = {
  server: "https://localhost:7104",
  user: {
    id: -1,
    name: "",
    token: "",
    role: "",
  },
};

const StateContext = createContext<ContextType | undefined>(undefined);

export const StateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<State>(initialState);

  return (
    <StateContext.Provider value={{ state, setState }}>
      {children}
    </StateContext.Provider>
  );
};

//eslint-disable-next-line
export const globalState = () => {
  // eslint-disable-next-line
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useStateValue must be used within a StateProvider");
  }
  return context;
};
