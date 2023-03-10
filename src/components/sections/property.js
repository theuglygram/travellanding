import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import unsplashIt1hg4Hs from "assets/unsplashIt1hg4Hs.png";
import unsplash2d4lAQAlbDA from "assets/unsplash2d4lAQAlbDA.png";
import unsplashT6d96Qrb5MY from "assets/unsplashT6d96Qrb5MY.png";
import unsplashKQgrVfR3r74 from "assets/unsplashKQgrVfR3r74.png";
import unsplashUV81E0oXXWQ from "assets/unsplashUV81E0oXXWQ.png";
import unsplashuDtC1NLEzU from "assets/unsplashuDtC1NLEzU.png";
import abc from "assets/abc.jfif";
import def from "assets/def.jfif";
import ghi from "assets/ghi.jfif";
function Property() {
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
  // LIST OF PROPERTIES ARRAY
  const [listofProperties, setlistofProperties] = useState([
    {
      img: unsplashIt1hg4Hs,
      name: "2578 Folsom Street, San Francisco, CA, 94110",
      price: "$1200/Month",
      rooms: "4",
      shower: "2",
      bed: "2",
    },
    {
      img: unsplash2d4lAQAlbDA,
      name: "2578 Folsom Street, San Francisco, CA, 94110",
      price: "$1200/Month",
      rooms: "4",
      shower: "2",
      bed: "2",
    },
    {
      img: unsplashT6d96Qrb5MY,
      name: "2578 Folsom Street, San Francisco, CA, 94110",
      price: "$1200/Month",
      rooms: "4",
      shower: "2",
      bed: "2",
    },

    {
      img: unsplashKQgrVfR3r74,
      name: "2578 Folsom Street, San Francisco, CA, 94110",
      price: "$1200/Month",
      rooms: "4",
      shower: "2",
      bed: "2",
    },
    {
      img: unsplashUV81E0oXXWQ,
      name: "2578 Folsom Street, San Francisco, CA, 94110",
      price: "$1200/Month",
      rooms: "4",
      shower: "2",
      bed: "2",
    },
    {
      img: unsplashuDtC1NLEzU,
      name: "2578 Folsom Street, San Francisco, CA, 94110",
      price: "$1200/Month",
      rooms: "4",
      shower: "2",
      bed: "2",
    },
    {
      img: unsplashIt1hg4Hs,
      name: "2578 Folsom Street, San Francisco, CA, 94110",
      price: "$1200/Month",
      rooms: "4",
      shower: "2",
      bed: "2",
    },
    {
      img: unsplash2d4lAQAlbDA,
      name: "2578 Folsom Street, San Francisco, CA, 94110",
      price: "$1200/Month",
      rooms: "4",
      shower: "2",
      bed: "2",
    },
    {
      img: unsplashT6d96Qrb5MY,
      name: "2578 Folsom Street, San Francisco, CA, 94110",
      price: "$1200/Month",
      rooms: "4",
      shower: "2",
      bed: "2",
    },
    {
      img: unsplashIt1hg4Hs,
      name: "2578 Folsom Street, San Francisco, CA, 94110",
      price: "$1200/Month",
      rooms: "4",
      shower: "2",
      bed: "2",
    },
    {
      img: unsplash2d4lAQAlbDA,
      name: "2578 Folsom Street, San Francisco, CA, 94110",
      price: "$1200/Month",
      rooms: "4",
      shower: "2",
      bed: "2",
    },
    {
      img: unsplashT6d96Qrb5MY,
      name: "2578 Folsom Street, San Francisco, CA, 94110",
      price: "$1200/Month",
      rooms: "4",
      shower: "2",
      bed: "2",
    },
  ]);

  // PAGINATION STATES
  const [currentpage, setcurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(6);
  const lastPostIndex = currentpage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = listofProperties.slice(firstPostIndex, lastPostIndex);
  const totalposts = listofProperties.length;
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalposts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <Wrapper>
      <HeroWrapper>
        <HeadWrap>
          <Title>list of properties</Title>
          <PropertyBtn>View All Property</PropertyBtn>
        </HeadWrap>

        <ContentWrapper>
          {currentPost.map((items, index) => (
            <CardWrapper
              key={index}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <CardImage src={items.img} alt="property image" />
              <CardContent>
                <Name>{items.name}</Name>
                <RoomType>Private Room</RoomType>
                <Price>{items.price}</Price>
              </CardContent>
              <BottomContent>
                <IconHolder>
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.95859 1.61287H8.99068C9.93103 1.61373 10.7475 2.26078 10.9632 3.17607C10.9812 3.25237 11.0493 3.30631 11.1277 3.30649H14.2417C14.2866 3.30666 14.3297 3.28893 14.3615 3.25723C14.3934 3.22554 14.4112 3.18247 14.4112 3.13756V1.44333C14.4112 1.08398 14.2685 0.739356 14.0143 0.485316C13.7601 0.231277 13.4155 0.0886415 13.0561 0.0888063H2.89317C2.53382 0.0886415 2.18913 0.231277 1.93497 0.485316C1.68082 0.739356 1.53802 1.08398 1.53802 1.44333V3.13756C1.53802 3.18247 1.55591 3.22554 1.58772 3.25723C1.61954 3.28893 1.66266 3.30666 1.70757 3.30649H4.82154C4.90012 3.30677 4.96843 3.25263 4.98612 3.17607C5.20177 2.26078 6.01824 1.61373 6.95859 1.61287Z"
                      fill="black"
                    />
                    <path
                      d="M1.19954 4.32312C1.01979 4.32296 0.847352 4.39429 0.720247 4.52139C0.593142 4.6485 0.521808 4.82094 0.521973 5.00069V8.55747C0.521972 8.8795 0.748624 9.15703 1.06415 9.22138C1.14288 9.23757 1.19943 9.30682 1.19954 9.3872V10.7591C1.19954 11.1333 1.5029 11.4367 1.87711 11.4367C2.25133 11.4367 2.55468 11.1333 2.55468 10.7591V9.40459C2.55452 9.35968 2.57224 9.31655 2.60394 9.28474C2.63564 9.25292 2.6787 9.23504 2.72361 9.23504H13.2256C13.2706 9.23504 13.3136 9.25292 13.3453 9.28474C13.377 9.31655 13.3947 9.35968 13.3946 9.40459V10.7591C13.3946 11.1333 13.6979 11.4367 14.0721 11.4367C14.4464 11.4367 14.7497 11.1333 14.7497 10.7591V9.3872C14.7498 9.30682 14.8064 9.23757 14.8851 9.22138C15.2006 9.15703 15.4273 8.8795 15.4273 8.55747V5.00069C15.4275 4.82094 15.3561 4.6485 15.229 4.52139C15.1019 4.39429 14.9295 4.32296 14.7497 4.32312H1.19954Z"
                      fill="black"
                    />
                  </svg>

                  <Desc>{items.rooms}</Desc>
                </IconHolder>
                <IconHolder>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.0247 10.2949C17.221 10.2963 17.4082 10.3785 17.5421 10.522C17.6764 10.6628 17.7461 10.8531 17.7345 11.0473C17.5212 14.6112 14.5689 17.3923 10.9987 17.3927H7.4356C3.86533 17.3923 0.913099 14.6112 0.699814 11.0473C0.690463 10.8535 0.759541 10.6642 0.891454 10.522C1.02445 10.3767 1.21259 10.2942 1.40959 10.2949H3.97756C4.13406 10.2964 4.27305 10.1952 4.31968 10.0458C4.50504 9.45635 5.05037 9.05452 5.66825 9.05208H9.22068C9.83856 9.05452 10.3839 9.45635 10.5693 10.0458C10.6155 10.1939 10.7526 10.2948 10.9078 10.2949H14.7172C14.9132 10.2949 15.0721 10.136 15.0721 9.94001V2.48736C15.0729 2.20686 14.9084 1.9522 14.6524 1.83756C14.3964 1.72291 14.0969 1.76978 13.8882 1.95715L13.5972 2.24816C13.5025 2.34353 13.4698 2.48421 13.5127 2.61157C13.7602 3.34256 13.5724 4.15066 13.0279 4.6976L12.886 4.84311C12.6088 5.12019 12.1595 5.12019 11.8823 4.84311L10.005 2.96504C9.7279 2.68787 9.7279 2.23858 10.005 1.96141L10.1505 1.81591C10.7039 1.28721 11.503 1.1051 12.2308 1.34178C12.3573 1.38194 12.4955 1.34827 12.5893 1.25448L12.9179 0.925849C13.5389 0.35201 14.4406 0.199975 15.2154 0.538463C15.9903 0.876951 16.4914 1.64182 16.4923 2.48736V9.94001C16.4923 10.136 16.6512 10.2949 16.8472 10.2949H17.0247ZM8.8623 14.731C9.0583 14.731 9.21719 14.5722 9.21719 14.3762V10.8273C9.21719 10.6313 9.0583 10.4724 8.8623 10.4724H6.0232C5.8272 10.4724 5.66831 10.6313 5.66831 10.8273V14.3762C5.66831 14.5722 5.8272 14.731 6.0232 14.731H8.8623Z"
                      fill="black"
                    />
                    <path
                      d="M7.08789 4.67918C7.19037 4.68008 7.29183 4.65877 7.38529 4.61672L8.67424 4.02193C8.90487 3.91606 9.0615 3.69519 9.08513 3.44253C9.10876 3.18986 8.9958 2.94378 8.7888 2.79699C8.5818 2.65019 8.31221 2.62498 8.08158 2.73085L6.79049 3.32493C6.48782 3.46459 6.32311 3.79606 6.39461 4.12165C6.46611 4.44723 6.75455 4.67919 7.08789 4.67918Z"
                      fill="black"
                    />
                    <path
                      d="M10.7233 8.52695C11.0838 8.68072 11.5006 8.51327 11.6545 8.1529L12.2124 6.84691C12.3563 6.48868 12.1875 6.08115 11.8324 5.92959C11.4774 5.77803 11.0663 5.93803 10.9071 6.28974L10.3528 7.59786C10.2 7.95675 10.3655 8.37167 10.7233 8.52695Z"
                      fill="black"
                    />
                    <path
                      d="M8.14258 6.80016C8.41838 7.07862 8.86767 7.08084 9.14621 6.80513L10.1555 5.80718C10.4265 5.53027 10.4254 5.0872 10.153 4.81169C9.88055 4.53617 9.43752 4.53003 9.15756 4.79788L8.14826 5.79653C7.8696 6.07213 7.86706 6.52143 8.14258 6.80016Z"
                      fill="black"
                    />
                  </svg>

                  <Desc>{items.shower}</Desc>
                </IconHolder>
                <IconHolder>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.65201 3.61685C6.04401 3.61685 6.36178 3.29907 6.36178 2.90707V1.13263C6.36178 0.740629 6.04401 0.422852 5.65201 0.422852C5.26001 0.422852 4.94223 0.740629 4.94223 1.13263V2.90707C4.94223 3.29907 5.26001 3.61685 5.65201 3.61685Z"
                      fill="black"
                    />
                    <path
                      d="M3.87759 5.39123C3.87759 4.99924 3.55981 4.68146 3.16781 4.68146H1.39337C1.00137 4.68146 0.683594 4.99924 0.683594 5.39123C0.683594 5.78323 1.00137 6.10101 1.39337 6.10101H3.16781C3.55981 6.10101 3.87759 5.78323 3.87759 5.39123Z"
                      fill="black"
                    />
                    <path
                      d="M3.16781 11.7794H1.39337C1.00137 11.7794 0.683594 12.0971 0.683594 12.4891C0.683594 12.8811 1.00137 13.1989 1.39337 13.1989H3.16781C3.55981 13.1989 3.87759 12.8811 3.87759 12.4891C3.87759 12.0971 3.55981 11.7794 3.16781 11.7794Z"
                      fill="black"
                    />
                    <path
                      d="M12.7498 0.422852C12.3578 0.422852 12.04 0.740629 12.04 1.13263V2.90707C12.04 3.29907 12.3578 3.61685 12.7498 3.61685C13.1418 3.61685 13.4596 3.29907 13.4596 2.90707V1.13263C13.4596 0.740629 13.1418 0.422852 12.7498 0.422852Z"
                      fill="black"
                    />
                    <path
                      d="M5.65201 14.2635C5.26001 14.2635 4.94223 14.5813 4.94223 14.9733V16.7478C4.94223 17.1398 5.26001 17.4575 5.65201 17.4575C6.04401 17.4575 6.36178 17.1398 6.36178 16.7478V14.9733C6.36178 14.5813 6.04401 14.2635 5.65201 14.2635Z"
                      fill="black"
                    />
                    <path
                      d="M12.7498 14.2635C12.3578 14.2635 12.04 14.5813 12.04 14.9733V16.7478C12.04 17.1398 12.3578 17.4575 12.7498 17.4575C13.1418 17.4575 13.4596 17.1398 13.4596 16.7478V14.9733C13.4596 14.5813 13.1418 14.2635 12.7498 14.2635Z"
                      fill="black"
                    />
                    <path
                      d="M15.234 6.10101H17.0085C17.4005 6.10101 17.7183 5.78323 17.7183 5.39123C17.7183 4.99924 17.4005 4.68146 17.0085 4.68146H15.234C14.842 4.68146 14.5243 4.99924 14.5243 5.39123C14.5243 5.78323 14.842 6.10101 15.234 6.10101Z"
                      fill="black"
                    />
                    <path
                      d="M17.0085 11.7794H15.234C14.842 11.7794 14.5243 12.0971 14.5243 12.4891C14.5243 12.8811 14.842 13.1989 15.234 13.1989H17.0085C17.4005 13.1989 17.7183 12.8811 17.7183 12.4891C17.7183 12.0971 17.4005 11.7794 17.0085 11.7794Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.7498 4.68146C13.1418 4.68146 13.4596 4.99924 13.4596 5.39123V12.489C13.4596 12.881 13.1418 13.1988 12.7498 13.1988H5.65201C5.26001 13.1988 4.94223 12.881 4.94223 12.489V5.39123C4.94223 4.99924 5.26001 4.68146 5.65201 4.68146H12.7498ZM11.6851 11.7791C11.8811 11.7791 12.04 11.6202 12.04 11.4242V6.4558C12.04 6.2598 11.8811 6.10091 11.6851 6.10091H6.71663C6.52063 6.10091 6.36174 6.2598 6.36174 6.4558V11.4242C6.36174 11.6202 6.52063 11.7791 6.71663 11.7791H11.6851Z"
                      fill="black"
                    />
                  </svg>

                  <Desc>{items.bed}</Desc>
                </IconHolder>
              </BottomContent>
            </CardWrapper>
          ))}
        </ContentWrapper>
        <ButtonWrapper>
          {pages.map((page, index) => {
            return (
              <>
                <Button
                  key={index}
                  onClick={() => setcurrentPage(page)}
                  style={{
                    background: `${currentpage === page ? "#f4511e" : "#fff"}`,
                    color: `${currentpage === page ? "#fff" : "#f4511e"}`,
                  }}
                >
                  {page}
                </Button>
              </>
            );
          })}
        </ButtonWrapper>
      </HeroWrapper>
    </Wrapper>
  );
}

export default Property;

const Wrapper = styled.div`
  background: #f5f5f5;
  margin-top: 50px;
  padding: 50px 20px;
`;
const HeroWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
const Title = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 64px;
  text-transform: capitalize;
  color: #18191f;
  position: relative;
  ::after {
    content: "";
    width: 30%;
    height: 3px;
    background: #f4511e;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;
const HeadWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  grid-gap: 50px;
  place-items: center;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
const PropertyBtn = styled.button`
  width: 200px;
  height: 65px;
  background: #f4511e;
  box-shadow: 0px 20px 13px rgba(248, 90, 71, 0.035),
    0px 8.14815px 6.51852px rgba(248, 90, 71, 0.0274815),
    0px 1.85185px 3.14815px rgba(248, 90, 71, 0.0168519);
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 23px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  @media only screen and (max-width: 400px) {
    margin-top: 50px;
  }
`;
const CardWrapper = styled.div`
  background: #ffffff;
  border-radius: 26.6166px;
  box-shadow: 0px 34.0693px 36.1986px rgba(0, 0, 0, 0.133714);
  height: auto;
  max-width: 358px;
  width: 100%;
  margin-top: 70px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    transform: scale(0.9);
  }
`;
const CardImage = styled.img`
  width: 100%;
`;
const CardContent = styled.div`
  padding: 20px;
`;
const Name = styled.h4`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  letter-spacing: -0.642075px;
  text-transform: capitalize;
  color: #000000;
`;
const RoomType = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.642075px;
  text-transform: capitalize;

  color: #818181;
`;
const Price = styled.h4`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 25.552px;
  text-transform: capitalize;
  color: #f4511e;
`;
const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e4e4e4;
  padding: 20px;
`;
const IconHolder = styled.div`
  display: flex;
  align-items: center;
`;
const Desc = styled.div`
  margin-left: 10px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18.0993px;
  line-height: 24px;
  color: #000000;
`;
const ButtonWrapper = styled.div`
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
`;
const Button = styled.button`
  width: 87px;
  height: 74px;
  background: #fff;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #f4511e;
`;
