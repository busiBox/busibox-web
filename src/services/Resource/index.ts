import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

interface IResource {
  name: string;
  brand: string;
  unitPrice: {
    currency: string;
    number: number;
  };
  unitMeasurement: string;
  code?: string;
  expirationDate?: string;
  manufacturingDate?: string;
  batchCode?: string;
}

export async function storeResource(resource: IResource[]): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axios({
      url: `http://localhost:3333/resource`,
      method: "POST",
      data: resource,
    });

    console.log(response);

    toast.success("Recurso cadastrado com sucesso!", {
      position: "bottom-right",
    });

    return true;
  } catch (error) {
    toast.error("Preencha todos os campos!", {
      position: "bottom-right",
    });
    return false;
  }
}
