import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import Hero from "../../assets/hero.png";
import "./Banner.css";

const Wrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 100px;
`;

const Banner = () => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col-lg-6 col-12">
          <h1 className="text-light title">Dont Forget About Your Journey</h1>
          <p className="text-light lh-lg mt-3 text-content">
            Remember yourself or your friend about tasks, event, birthday and
            much more in your discord server. Easy to use for everyone
          </p>
          <div className="mt-5 d-lg-block d-flex justify-content-center mt-4 gap-2 flex-lg-row flex-column w-lg-50">
            <Button className="me-0 mb-3 mb-lg-0 me-lg-3 px-4 py-2">
              Get Started
            </Button>
            <Button variant="outline-primary" className="px-4 py-2">
              See Features
            </Button>
          </div>
        </div>
        <div className="col-lg-6 col-12 mt-lg-0 mt-5">
          <img src={Hero} alt="" className="img-fluid w-75" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;
