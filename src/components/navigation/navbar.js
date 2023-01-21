import React, { useEffect } from "react";
import styled from "styled-components";
import logo from "assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Navbar() {
  useEffect(() => {
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 300, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <NavWrapper>
      <Navcontent data-aos="fade-down">
        <LogoHolder>
          <Logo src={logo} alt="logo" />
        </LogoHolder>
        <LinksHolder>
          <Links>Home</Links>
          <Links>Landlords</Links>
          <Links>Tenants</Links>
          <Links>Contact Us</Links>
        </LinksHolder>

        <HamburgerMenu>
          <Menu></Menu>
          <Menu></Menu>
        </HamburgerMenu>
      </Navcontent>
    </NavWrapper>
  );
}

export default Navbar;

const NavWrapper = styled.div`
  padding: 15px 20px;
`;
const Navcontent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 20px auto;

  display: flex;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HamburgerMenu = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
const Menu = styled.div`
  height: 1px;
  width: 25px;
  margin: 4px;
  background: #fff;
`;
const LogoHolder = styled.div``;
const Logo = styled.img``;
const LinksHolder = styled.ul`
  max-width: 500px;
  width: 100%;
  display: flex;
  align-items: center;
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
