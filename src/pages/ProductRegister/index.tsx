import React, { Fragment, useState } from "react";
import { storeResource } from "../../services/Resource";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Input/Select";
import "./styles.css";

interface IProduct {
  name: string;
  description: string;
  resource: {
    resourceId: string,
    quantity: number
  }[]
  unitCost: {
    currency: string;
    number: number;
  };
  unitMeasurement: string;
  code?: string;
  expirationDate?: string;
  manufacturingDate?: string;
  batchCode?: string;
}

const ProductRegister: React.FC = () => {
  // const resource = []
  const [product, setProduct] = useState<IProduct>({
    name: "",
    description: "",
    resource: [{
      resourceId: '',
      quantity: 0
    }],
    unitCost: {
      currency: "",
      number: 0,
    },
    unitMeasurement: "",
    code: "",
    expirationDate: undefined,
    manufacturingDate: undefined,
    batchCode: "",
  });


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // await storeResource([product]);
  }

  function handleAddResource(){
    setProduct({...product, resource:[...product.resource, {
      resourceId: '',
      quantity: 0
    }]})
    
  }

  return (
    <Fragment>
      <Header />
      <div id="resource-register-container">
        <div id="resource-form-box">
          <h3>cadastro de produto</h3>
          <form className="resource-form" action="" onSubmit={handleSubmit}>
            <div className='form-row'>
              <Input width='30%' label='Nome *' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setProduct({ ...product, name: e.currentTarget.value })} />
              <Input width='30%' label='Descrição' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setProduct({ ...product, description: e.currentTarget.value })} />
              <Input width='30%' label='lote' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setProduct({ ...product, batchCode: e.currentTarget.value })} />
            </div>
            {
              product.resource.map((el, index) => {
                return (
                  <div className='form-row' key={index}>
                     <Select width='30%' label='Recurso *' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                        setProduct({...product, resource:[...product.resource, {
                          resourceId: e.currentTarget.value,
                          quantity: product.resource[index].quantity,
                        }]})}>
                      <option value="R$">R$</option>
                      <option value="US$">US$</option>
                      <option value="€">€</option>
                    </Select>
                    <Input width='30%' type='number' step="0.01" label='quantidade *' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                      setProduct({...product, resource:[...product.resource, {
                      resourceId: product.resource[index].resourceId,
                      quantity: parseFloat(e.currentTarget.value) 
                    }]})} />
                    <Button type='button' label='+ Adicionar recurso' width='30%' onClick={() => handleAddResource()}/>
                  </div>
                )
              })
            }
            {/* <div className='form-row'>
            <Select width='30%' label='Recurso *' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setProduct({ ...product, unitCost: {
                  ...product.unitCost,
                  currency: e.currentTarget.value}})}>
                <option value="R$">R$</option>
                <option value="US$">US$</option>
                <option value="€">€</option>
              </Select>
              <Input width='30%' type='number' step="0.01" label='preço unitário *' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setProduct({
                  ...product, unitCost: {
                    ...product.unitCost,
                    number: parseFloat(e.currentTarget.value),
                  }
                })} />
              <Select width='30%' label='unidade de medida *' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setProduct({ ...product, unitMeasurement: e.currentTarget.value })}>
                <option value="mL">mL</option>
                <option value="L">L</option>
                <option value="g">g</option>
                <option value="kg">kg</option>
              </Select>
            </div> */}
            <div className='form-row'>
              <Input width='30%' type='number' step="0.01" label='preço unitário *' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setProduct({
                  ...product, unitCost: {
                    ...product.unitCost,
                    number: parseFloat(e.currentTarget.value),
                  }
                })} />
              <Select width='30%' label='moeda *' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setProduct({ ...product, unitCost: {
                  ...product.unitCost,
                  currency: e.currentTarget.value}})}>
                <option value="R$">R$</option>
                <option value="US$">US$</option>
                <option value="€">€</option>
              </Select>
              <Select width='30%' label='unidade de medida *' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setProduct({ ...product, unitMeasurement: e.currentTarget.value })}>
                <option value="mL">mL</option>
                <option value="L">L</option>
                <option value="g">g</option>
                <option value="kg">kg</option>
              </Select>
            </div>
            <div className='form-row'>
              <Input width='30%' type='date' label='Data de validade' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setProduct({ ...product, expirationDate: e.currentTarget.value })} />

              <Input width='30%' type='date' label='data de fabricação' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setProduct({ ...product, manufacturingDate: e.currentTarget.value })} />

              <Input width='30%' label='código interno' onChange={(e: React.FormEvent<HTMLFormElement>) =>
                setProduct({ ...product, code: e.currentTarget.value })} />
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

export default ProductRegister;
