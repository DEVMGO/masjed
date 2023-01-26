import Login from "@/components/auth/login";
import Register from "@/components/auth/register";
import React, { useState } from "react";

const AuthPage = () => {
  const [auth, setAuth] = useState("login");
  return (
    <>
      <div className="w-full max-w-md mt-16 min-h-10 flex items-center justify-center flex-col rounded-lg bg-black33 overflow-hidden">
        <div className="w-full flex items-center">
          <button
            onClick={() => setAuth("login")}
            className={`w-full py-4 text-sm ${auth === "login" ? "border-b-green-400 text-green-600" : 'border-b-transparent text-white'} border-b-4`}
          >
            ورود
          </button>
          <button
            onClick={() => setAuth("register")}
            className={`w-full py-4 text-sm ${auth === "register" ? "border-b-green-400 text-green-600" : 'border-b-transparent text-white'} border-b-4`}
          >
            ثبت‌نام
          </button>
        </div>
        <div className="p-4 py-8 w-full">
          {auth === "login" ? (
            <Login />
          ) : auth === "register" ? (
            <Register />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default AuthPage;

AuthPage.layout = "L2";
