import React, { Fragment, useState } from "react";
import { storeResource } from "../../services/Resource";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Input/Select";
import "./styles.css";

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
            <div className='form-row'>
              <Input width='30%' label='Nome *' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setResource({ ...resource, name: e.currentTarget.value })} />
              <Input width='30%' label='Marca' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setResource({ ...resource, brand: e.currentTarget.value })} />
              <Input width='30%' label='lote' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setResource({ ...resource, batchCode: e.currentTarget.value })} />
            </div>
            <div className='form-row'>
              <Input width='30%' type='number' step="0.01" label='preço unitário *' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setResource({
                  ...resource, unitPrice: {
                    ...resource.unitPrice,
                    number: parseFloat(e.currentTarget.value),
                  }
                })} />
              <Select width='30%' label='moeda *' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setResource({ ...resource, unitPrice: {
                  ...resource.unitPrice,
                  currency: e.currentTarget.value}})}>
                <option value="R$">R$</option>
                <option value="US$">US$</option>
                <option value="€">€</option>
              </Select>
              <Select width='30%' label='unidade de medida *' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setResource({ ...resource, unitMeasurement: e.currentTarget.value })}>
                <option value="mL">mL</option>
                <option value="L">L</option>
                <option value="g">g</option>
                <option value="kg">kg</option>
              </Select>
            </div>
            <div className='form-row'>
              <Input width='30%' type='date' label='Data de validade' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setResource({ ...resource, expirationDate: e.currentTarget.value })} />

              <Input width='30%' type='date' label='data de fabricação' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setResource({ ...resource, manufacturingDate: e.currentTarget.value })} />

              <Input width='30%' label='código interno' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setResource({ ...resource, code: e.currentTarget.value })} />
            </div>
            <div className='form-button'>
              <Button width='30%' type='submit' label='cadastrar' />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ResourceRegister;
