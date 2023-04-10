import React from "react";
import Container from "../components/container/Container";
import Header from "../layouts/Header/Header";
import SearchFilter from "../layouts/SearchFilter/SearchFilter";

const HomePage = () => {
  return (
    <Container>
        <Header/>
        <SearchFilter/>
    </Container>
  );
};

export default HomePage;
