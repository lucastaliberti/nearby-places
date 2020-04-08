import * as React from "react";
import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import mapBg from "./map-bg.jpg";

function SearchInput() {
  return (
    <InputContainer>
      <Input placeholder={'Search a location'}/>
      <Button>
        <FontAwesomeIcon icon={faSearch} size="lg" />
        <ButtonLabel>Search</ButtonLabel>
      </Button>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      rgba(45,91,227,0.65),
      rgba(45,91,227,0.65)
    ),
    url(${mapBg});
  padding: 50px 0;
`;

const Input = styled.input`
  width: 50%;
  border-radius: 3px;
  border: 1px solid transparent;
  color: #333;
  font-family: inherit;
  font-size: 17px;
  height: 20px;
  line-height: 20px;
  outline: none;
  padding: 15px;
`;

const Button = styled.button`
  border: 0;
  border-radius: 3px;
  font: normal 13px/140%;
  letter-spacing: 0;
  background: #73cf42;
  color: #fff;
  height: auto;
  margin-left: 10px;
  padding: 15px 20px;
  top: 9px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ButtonLabel = styled.span`
  font-size: 17px;
  font-weight: 500;
  margin-left: 10px;
`;

export default SearchInput;
