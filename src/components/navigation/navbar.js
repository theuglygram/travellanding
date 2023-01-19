import React from "react";
import styled from "styled-components";
import logo from "assets/logo.png";
function Navbar() {
  return (
    <NavWrapper>
      <NavContnet>
        <LogoHolder>
          <Logo src={logo} />
        </LogoHolder>
        <LinksHolder>
          <Links>Home</Links>
          <Links>Landlords</Links>
          <Links>Tenants</Links>
          <Links>Contact Us</Links>
        </LinksHolder>
      </NavContnet>
    </NavWrapper>
  );
}

export default Navbar;

const NavWrapper = styled.div``;
const NavContnet = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  border-bottom: 1px solid #fff;
`;
const LogoHolder = styled.div``;
const Logo = styled.img``;
const LinksHolder = styled.ul`
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 200px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Links = styled.li`
  list-style: none;
  color: #fff;
  position: relative;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 70.19%;

  color: #ffffff;
  cursor: pointer;
  ::after {
    content: "";
    width: 100%;
    height: 1px;
    background: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: transform 0.25s ease-out;
    transform: scaleX(0);
    margin-top: 15px;
  }
  :hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;
