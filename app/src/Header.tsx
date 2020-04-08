import React from "react";
import styled from "styled-components";

function Header() {
  return <TopBar>Nearby places search</TopBar>;
}

const TopBar = styled.header`
  background: #2d5be3;
  color: #fff;
  height: 60px;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
`;

export default Header;
