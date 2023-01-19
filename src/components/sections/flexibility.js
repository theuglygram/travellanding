import React from "react";
import styled from "styled-components";
import leases from "assets/leases.png";
import happiness from "assets/happiness.png";
import house from "assets/house.png";
import roomate from "assets/roomate.png";
function Flexibility() {
  return (
    <Wrapper>
      <HeroWrapper>
        <LeftSection>
          <ImageWrapper>
            <Text>Flexible Leases</Text>
            <Image src={leases} />
          </ImageWrapper>
          <ImageWrapper>
            <Text>7-Day Happiness Guaranteed</Text>
            <Image src={happiness} />
          </ImageWrapper>
          <ImageWrapper>
            <Text>Monthly House Cleaning</Text>
            <Image src={house} />
          </ImageWrapper>
          <ImageWrapper>
            <Text>Choose Your Own Roommate</Text>
            <Image src={roomate} />
          </ImageWrapper>
        </LeftSection>
        <RightSection>
          <Title>Flexibility and options to suit your lifestyle.</Title>
          <Description>
            You need it? We got it. We make finding your next home easy,
            comfortable, and simple. From our happiness guarantee to our
            selective roommate finder option. We provide you the flexibility
            that you most desire.
          </Description>
          <Button>Search Rooms</Button>
        </RightSection>
      </HeroWrapper>
    </Wrapper>
  );
}

export default Flexibility;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 150px auto;
`;
const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;
  place-items: center;
  padding: 0 20px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const LeftSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const RightSection = styled.div``;
const Title = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 54px;
  color: #18191f;
`;
const Description = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #18191f;
`;
const Button = styled.button`
  width: 185px;
  height: 63px;
  background: #f4511e;
  border-radius: 13px;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  :hover {
    transform: scale(0.9);
  }
`;
const Text = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 20px;
  text-align: center;
  color: #fff;
  top: 70px;
  position: relative;
`;
const Image = styled.img`
  :after {
    content: "";
    width: 100%;
    height: 100%;
    background: #000;
    position: absolute;
    left: 0;
    top: 0;
  }
`;