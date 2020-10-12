import React, { Fragment } from "react";

import Header from "../../components/Header";
import Card from "../../components/Cards";
import "./styles.css";

const Home: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <div id="home-container">
        <div id='dash-row'>
          <Card
            title='Recursos cadastrados'
            data='127'
            width='290px'
            height='230px'
            icon="/assets/icons/resource.svg"
            />

          <Card
            title='Produtos cadastrados'
            data='25'
            width='290px'
            height='230px'
            icon="/assets/icons/product.svg"
            />

          <Card
            title='Gastos nesse mês'
            data='R$ 5.320,00'
            width='290px'
            height='230px'
            icon="/assets/icons/cash.svg"
            />

          <Card
            title='Produtos em estoque'
            data='700'
            width='290px'
            height='230px'
            icon="/assets/icons/box.svg"
            />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
