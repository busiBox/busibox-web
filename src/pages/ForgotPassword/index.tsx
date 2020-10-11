import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import Input from "../../components/Input";
import Button from "../../components/Button";
import "./styles.css";

interface IUser {
  email: string | undefined;
}

const ForgotPassword: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<IUser>();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email) {
      return toast.warn("Preencha todos os campos", {
        position: "bottom-right",
      });
    }

    toast.success('E-mail para troca de senha enviado com sucesso!')
    history.push("/login");

    // const response = await loginRequest(email);

    // if (response) {
    //   localStorage.setItem('login', 'ok')
    // }
  }

  return (
    <div id="container">
      <div className="image"></div>
      <div className="form">
        <form action="" onSubmit={handleSubmit}>
          <img src="/assets/logo/logo_vertical_escuro.png" alt="Logo busiBox" />
          <Input
            label='e-mail'
            placeholder="exemplo@email.com"
            type="email"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setEmail({
                email: e.currentTarget.value,
              })
            }
          />
          <Button 
            type="submit"
            variant="outlined"
            label='recuperar senha'
            /> 
          <div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
