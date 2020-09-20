import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";

import loginRequest from "../../services/Login";
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

  return (
    <div id="container">
      <div className="image"></div>
      <div className="form">
        <form action="" onSubmit={handleSubmit}>
          <img src="/assets/logo/logo_vertical_escuro.png" alt="Logo busiBox" />
          <TextField
            type="email"
            placeholder="digite aqui seu e-mail"
            label="e-mail"
            onChange={(e) =>
              setUser({ email: e.target.value, password: user?.password })
            }
          />
          <TextField
            type="password"
            placeholder="digite aqui sua senha"
            label="senha"
            onChange={(e) =>
              setUser({ email: user?.email, password: e.target.value })
            }
          />
          <Button
            className="login-button"
            type="submit"
            variant="outlined"
            color="primary"
          >
            LOGIN
          </Button>
          <div>
            <Link to="/">Esqueceu sua senha?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
