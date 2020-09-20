import React, { Fragment, useState } from "react";
import { storeResource } from "../../services/Resource";

import Header from "../../components/Header";
import "./styles.css";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@material-ui/core";

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

const ResourceRegister: React.FC = () => {
  const [resource, setResource] = useState<IResource>({
    name: "",
    brand: "",
    unitMeasurement: "",
    unitPrice: {
      currency: "",
      number: 0,
    },
    batchCode: "",
    code: "",
    expirationDate: undefined,
    manufacturingDate: undefined,
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await storeResource([resource]);
  }

  return (
    <Fragment>
      <Header />
      <div id="resource-register-container">
        <div id="resource-form-box">
          <h3>cadastro de recursos</h3>
          <form className="resource-form" action="" onSubmit={handleSubmit}>
            <div className="resource-form-1">
              <div className="resource-form-input">
                <InputLabel>nome</InputLabel>
                <TextField
                  style={{ width: 350 }}
                  type="text"
                  onChange={(e) =>
                    setResource({ ...resource, name: e.target.value })
                  }
                />
              </div>

              <div className="resource-form-input">
                <InputLabel>marca</InputLabel>
                <TextField
                  style={{ width: 350 }}
                  type="text"
                  onChange={(e) =>
                    setResource({ ...resource, brand: e.target.value })
                  }
                />
              </div>
              <div className="resource-form-input">
                <InputLabel>preço unitário</InputLabel>
                <TextField
                  style={{ width: 200 }}
                  type="number"
                  onChange={(e) =>
                    setResource({
                      ...resource,
                      unitPrice: {
                        ...resource.unitPrice,
                        number: parseFloat(e.target.value),
                      },
                    })
                  }
                />
              </div>
              <div className="resource-form-input">
                <InputLabel>moeda</InputLabel>
                <Select
                  style={{ width: 300, backgroundColor: "#FFFFFF" }}
                  onChange={(e) =>
                    setResource({
                      ...resource,
                      unitPrice: {
                        ...resource.unitPrice,
                        currency: e.target.value as string,
                      },
                    })
                  }
                  value={resource.unitPrice.currency}
                >
                  <MenuItem value="R$">R$</MenuItem>
                  <MenuItem value="US$">US$</MenuItem>
                  <MenuItem value="€">€</MenuItem>
                </Select>
              </div>
              <div className="resource-form-input">
                <InputLabel id="teste">unidade de medida</InputLabel>
                <Select
                  labelId="teste"
                  style={{ width: 200, backgroundColor: "#FFFFFF" }}
                  onChange={(e) =>
                    setResource({
                      ...resource,
                      unitMeasurement: e.target.value as string,
                    })
                  }
                  value={resource.unitMeasurement}
                >
                  <MenuItem value="mL">mL</MenuItem>
                  <MenuItem value="L">L</MenuItem>
                  <MenuItem value="g">g</MenuItem>
                  <MenuItem value="kg">kg</MenuItem>
                </Select>
              </div>
              <div className="resource-form-input">
                <InputLabel>data de fabricação</InputLabel>
                <TextField
                  style={{ width: 200 }}
                  type="date"
                  onChange={(e) =>
                    setResource({
                      ...resource,
                      manufacturingDate: e.target.value,
                    })
                  }
                />
              </div>
              <div className="resource-form-input">
                <InputLabel>lote</InputLabel>
                <TextField
                  style={{ width: 300 }}
                  type="text"
                  onChange={(e) =>
                    setResource({ ...resource, batchCode: e.target.value })
                  }
                />
              </div>
              <div className="resource-form-input">
                <InputLabel>data de validade</InputLabel>
                <TextField
                  style={{ width: 200 }}
                  type="date"
                  onChange={(e) =>
                    setResource({ ...resource, expirationDate: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="register-button-container">
              <Button
                type="submit"
                style={{
                  color: "#35b729",
                  fontWeight: "bold",
                  borderColor: "#35b729",
                  width: 200,
                }}
                variant="outlined"
              >
                Cadastrar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ResourceRegister;
