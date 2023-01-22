import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vidimage from "assets/vidimage.png";

function Testimonial() {
  var settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <Wrapper>
      <ContentWrapper>
        <LeftSection>
          <div>
            <Slider {...settings}>
              <div>
                <Content>
                  <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam interdum nisl et nunc facilisis, a commodo eros
                    mollis. Nunc vel pellentesque est. Curabitur at odio sit
                    amet libero vulputate efficitur ac nec justo. Nulla vitae
                    mauris quam. Nulla quam massa, faucibus id pretium ac,
                    mattis eu velit. Donec sed risus a lacus fringilla finibus.
                  </Desc>
                  <Details>
                    <Image />
                    <Info>
                      <Name>Harry Wilson</Name>
                      <Role>Property Owner</Role>
                    </Info>
                  </Details>
                </Content>
              </div>
              <div>
                <Content>
                  <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam interdum nisl et nunc facilisis, a commodo eros
                    mollis. Nunc vel pellentesque est. Curabitur at odio sit
                    amet libero vulputate efficitur ac nec justo. Nulla vitae
                    mauris quam. Nulla quam massa, faucibus id pretium ac,
                    mattis eu velit. Donec sed risus a lacus fringilla finibus.
                  </Desc>
                  <Details>
                    <Image />
                    <Info>
                      <Name>Harry Wilson</Name>
                      <Role>Property Owner</Role>
                    </Info>
                  </Details>
                </Content>
              </div>
              <div>
                <Content>
                  <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam interdum nisl et nunc facilisis, a commodo eros
                    mollis. Nunc vel pellentesque est. Curabitur at odio sit
                    amet libero vulputate efficitur ac nec justo. Nulla vitae
                    mauris quam. Nulla quam massa, faucibus id pretium ac,
                    mattis eu velit. Donec sed risus a lacus fringilla finibus.
                  </Desc>
                  <Details>
                    <Image />
                    <Info>
                      <Name>Harry Wilson</Name>
                      <Role>Property Owner</Role>
                    </Info>
                  </Details>
                </Content>
              </div>
            </Slider>
          </div>
        </LeftSection>
        <RightSection>
          <VidMage src={vidimage} />
        </RightSection>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Testimonial;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background: rgba(244, 81, 30, 0.07);
  overflow-x: hidden !important;
`;
const ContentWrapper = styled.div`
  display: flex;
  place-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  @media only screen and (max-width: 560px) {
    flex-wrap: wrap;
  }
`;
const LeftSection = styled.div`
  width: 50%;
  @media only screen and (max-width: 560px) {
    width: 100%;
  }
`;
const RightSection = styled.div`
  @media only screen and (max-width: 560px) {
    margin-top: 50px;
  }
`;
const Content = styled.div`
  max-width: 400px;
`;
const Desc = styled.div``;
const Details = styled.div``;
const Image = styled.div``;
const Info = styled.div``;
const Name = styled.h4`
  font-weight: 700;
  font-size: 18px;
  color: #f4511e;
  margin-top: 10px;
`;
const Role = styled.p`
  font-weight: 400;
  font-size: 16px;
  font-feature-settings: "salt" on, "liga" off;
  color: #18191f;
  margin: unset;
`;

const VidMage = styled.img`
  width: 100%;
`;
