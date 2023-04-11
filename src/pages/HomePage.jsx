import React from "react";
import Container from "../components/container/Container";
import Header from "../layouts/Header/Header";
import SearchFilter from "../layouts/SearchFilter/SearchFilter";
import Crypto from "../layouts/Crypto/Crypto";

const HomePage = () => {
  return (
    <Container>
        <Header/>
        <SearchFilter/>
        <Crypto/>
    </Container>
  );
};

export default HomePage;
