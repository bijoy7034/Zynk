import React, { useRef, useState } from "react";
import AccountCreation from "../../components/AccountCreation/AccountCreation";
import Authentication from "../../components/Authentication/Authentication";
import useAuthStore from "../../store/authStore";

function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const {clearError} = useAuthStore();

  const toggleSwitch = () => {
    clearError()
    setIsLogin(!isLogin)
  };

  return (
    <div>
      {isLogin ? (
        <Authentication toggleAuth={toggleSwitch} />
      ) : (
        <AccountCreation toggleAuth={toggleSwitch} />
      )}
    </div>
  );
}

export default Auth;
