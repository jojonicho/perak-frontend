import React from "react";
// import PropTypes from 'prop-types';
import styled from "styled-components";
import PersonFormRegistration from "../PersonFormRegistration";

import { FormContainer, Section } from "./style";

const Button = styled.button`
  border-radius: 5px;
  background-color: #a1cdf1;
  color: #fff;
  padding: 10px 15px;
  outline: none;
  border: 2px black solid;
  cursor: pointer;
  background-color: ${props => {
    if (props.type === "tambah") return "#e97318";
    if (props.type === "submit") return "#18d1e9";
    return "#f5f109";
  }};
`;
const Input = styled.input`
height: 32px;
width: ${props => {
  if (props.type === "long") return "100%";
  return "60%";
}}
// padding: 0px 10px;
margin: 0px  auto;
background-color: white;
// border: none;
border: 2px black solid;
opacity: 1;
color: #303030;
font-size: 22px;
font-weight: 400;

-webkit-box-shadow: inset 1px 1px 0px rgba(0,0,0,0.05), 1px 1px 0px rgba(255,255,255,1);
-moz-box-shadow: inset 1px 1px 0px rgba(0,0,0,0.05), 1px 1px 0px rgba(255,255,255,1);
box-shadow: inset 1px 1px 0px rgba(0,0,0,0.05), 1px 1px 0px rgba(255,255,255,1);
`;

const Title = styled.h3`
Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-size: 32px;
font-weight: 800;
`;

class Form extends React.Component {
  render() {
    return (
      <FormContainer>
        <Title>GAMES SOLO REGRISTRATION</Title>
        <Section>
          Nama Tim
          <Input type="long" />
        </Section>
        <Section></Section>

        <PersonFormRegistration />
        <Button />
        <Button type="tambah" />
        <Button type="submit" />
      </FormContainer>
    );
  }
}

Form.propTypes = {};

export default Form;
