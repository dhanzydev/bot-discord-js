import React from "react";
import styled from "styled-components";
import "./Login.css";
import LoginImage from "../../assets/login-image.png";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #eeeeee;
  text-align: center;
`;

const Register = styled.p`
  color: #eeeeee;
`;

const Login = () => {
  return (
    <CardWrapper>
      <Card className="w-75 background">
        <Card.Body className="d-flex justify-content-between gap-5">
          <img src={LoginImage} className="w-50 hero-login img-fluid" alt="" />
          <Form className="form justify-content-center py-5 me-4">
            <Title>Login</Title>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Register className="mt-5">
              Dont Have Account? <Link to="/register">Register Here</Link>
            </Register>

            <Button variant="primary" className="w-100 mt-3" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </CardWrapper>
  );
};

export default Login;
