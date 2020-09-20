import React, { Fragment } from "react";

import Header from "../../components/Header";
import "./styles.css";

const Home: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <div id="home-container"></div>
    </Fragment>
  );
};

export default Home;
