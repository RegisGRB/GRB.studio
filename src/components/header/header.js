import React from "react";
import "./header.scss";
import StyledTheme from "../StyledComponents/Styled";
import styled from "styled-components";

const StyledHeader = styled(StyledTheme)`
font-size: 16px;
position: fixed;
z-index: 99999;
width: 100%;
font-weight: "700";
`;
const StyledLink = styled(StyledTheme)`
letter-spacing: 1em;
text-decoration: none;
`;
const StyledMenu = styled(StyledTheme)`
margin-right: 2rem;
cursor: pointer;
border-radius: 100%;
border: 1px solid;
height: 80px;
width: 80px;
display: flex;
align-items: center;
justify-content: center;
transition: 0.3s ease-in-out;
`;
const Header = () => {
  return (
    <StyledHeader as="header">
      <div className='container'>
        <div className='row space-between'>
          <div className='logo'>
            <StyledLink Color as="a" to='/'>GRB</StyledLink>
          </div>
          <StyledMenu HoverColor HoverBackgroundColor Color BorderColor>MENU</StyledMenu>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
