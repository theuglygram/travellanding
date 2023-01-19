import React from "react";
import styled from "styled-components";
import location from "assets/svgs/location.svg";
import call from "assets/svgs/call.svg";
import fax from "assets/svgs/fax.svg";
import fb from "assets/svgs/fb.svg";
import twitter from "assets/svgs/twitter.svg";
import linkedin from "assets/svgs/linkedin.svg";
import youtube from "assets/svgs/youtube.svg";
import ig from "assets/svgs/ig.svg";
import googlePlus from "assets/svgs/googlePlus.svg";

function Footer() {
  return (
    <Wrapper>
      <FooterWrapper>
        <FooterContents>
          <LogoWrapper>
            <Logo>Logo</Logo>
          </LogoWrapper>
          <Contents>
            <Info>
              <Svgs src={location} />
              <Desc>
                345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
              </Desc>
            </Info>
            <Info>
              <Svgs src={call} />
              <Desc>(123) 456-7890</Desc>
            </Info>
            <Info>
              <Svgs src={fax} />
              <Desc>(123) 456-7890</Desc>
            </Info>
            <SocialMedia>
              <SocialTitle>Social Media</SocialTitle>
              <SocialIcons src={fb} />
              <SocialIcons src={twitter} />
              <SocialIcons src={linkedin} />
              <SocialIcons src={youtube} />
              <SocialIcons src={ig} />
              <SocialIcons src={googlePlus} />
            </SocialMedia>
          </Contents>
        </FooterContents>

        <FooterLinkWrapper>
          <FooterLinkHolder>
            <FooterLinks>
              <Links>About us</Links>
              <Links>Contact us</Links>
              <Links>Help</Links>
              <Links>Privacy Policy</Links>
              <Links>Disclaimer</Links>
            </FooterLinks>
            <Copyright>
              Copyright © 2020 Minimumlivingcost. All rights reserved
            </Copyright>
          </FooterLinkHolder>
        </FooterLinkWrapper>
      </FooterWrapper>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div``;
const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 100px auto;
`;
const FooterContents = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
`;
const LogoWrapper = styled.div``;
const Logo = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 70px;
  color: #000000;
`;
const Contents = styled.div``;
const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;
const Desc = styled.div``;
const SocialMedia = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
`;
const SocialTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #0a142f;
`;
const Svgs = styled.img`
  margin-right: 10px;
`;

const SocialIcons = styled.img`
  margin: 15px;
`;

const FooterLinkWrapper = styled.div`
  margin-top: 50px;
  padding: 0 20px;
`;
const FooterLinkHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #7bb9fc;
  padding-top: 20px;
  @media only screen and (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Links = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #0a142f;
  padding-right: 20px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    margin: 10px 0;
  }
`;

const Copyright = styled.p``;
