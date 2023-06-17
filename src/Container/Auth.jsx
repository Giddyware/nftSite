import { useState, createContext } from "react";
import Login from "../components/Login/Login";
import RegisterForm from "../components/Register/Register";

export const AuthContext = createContext({
  status: "login",
  changeStatus: () => {},
});

const Auth = () => {
  const [status, setStatus] = useState("login");

  const changeStatus = () => {
    if (status === "login") {
      setStatus("register");
    } else {
      setStatus("login");
    }
  };

  return (
    <AuthContext.Provider
      value={{ status: status, changeStatus: changeStatus }}
    >
      <div className="flex items-center justify-center h-screen w-[100%] py-5">
        {status === "login" ? <Login /> : <RegisterForm />}
      </div>
      ;
    </AuthContext.Provider>
  );
};
export default Auth;
