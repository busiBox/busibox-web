import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import loginRequest from "../../services/Login";
import logo from "../../assets/logo/logo_vertical_escuro.png";
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
          <img src={logo} alt="Logo busiBox" />
          <TextField
            variant="outlined"
            type="email"
            placeholder="digite aqui seu e-mail"
            margin="dense"
            label="e-mail"
            onChange={(e) =>
              setUser({ email: e.target.value, password: user?.password })
            }
          />
          <TextField
            variant="outlined"
            type="password"
            placeholder="digite aqui sua senha"
            margin="dense"
            label="senha"
            onChange={(e) =>
              setUser({ email: user?.email, password: e.target.value })
            }
          />
          <Button type="submit" variant="outlined" color="primary">
            LOGIN
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
