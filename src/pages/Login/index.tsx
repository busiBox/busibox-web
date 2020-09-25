import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";

import loginRequest from "../../services/Login";
import Input from "../../components/Input";
import "./styles.css";

interface IUser {
  email: string | undefined;
  password: string | undefined;
}

const Login: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState<IUser>();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!user || !user.email || !user.password) {
      return toast.warn("Preencha todos os campos", {
        position: "bottom-right",
      });
    }

    const response = await loginRequest(user);

    if (response) {
      history.push("/");
    }
  }

  console.log(user);

  return (
    <div id="container">
      <div className="image"></div>
      <div className="form">
        <form action="" onSubmit={handleSubmit}>
          <img src="/assets/logo/logo_vertical_escuro.png" alt="Logo busiBox" />
          <Input
            placeholder="exemplo@email.com"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setUser({
                email: e.currentTarget.value,
                password: user?.password,
              })
            }
          />
          <Input
            placeholder="*****"
            type="password"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setUser({ email: user?.email, password: e.currentTarget.value })
            }
          />
          <Button
            className="login-button"
            type="submit"
            variant="outlined"
            color="primary"
          >
            Login
          </Button>
          <div>
            <span id="forgot">
              Esqueceu sua senha? <Link to="/">Clique aqui</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
