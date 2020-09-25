import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

interface IUser {
  email: string | undefined;
  password: string | undefined;
}

interface IResponse {
  token: string;
}

async function loginRequest(user: IUser): Promise<any> {
  try {
    const response: AxiosResponse<IResponse> = await axios({
      url: `${process.env.REACT_APP_API_URL}/login`,
      method: "POST",
      data: user,
    });

    localStorage.setItem("token", response.data.token);

    return true;
  } catch (error) {
    toast.error("E-mail e/ou senha inválidos!", {
      position: "bottom-right",
    });
    return false;
  }
}

export default loginRequest;
