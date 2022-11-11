import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

const Wrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 100px;
`;

const Banner = () => {
  return (
    <Container>
      <Wrapper>
        <h1>hai</h1>
      </Wrapper>
    </Container>
  );
};

export default Banner;
