import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import herobackground from "assets/herobackground.png";
import Navbar from "./navigation/navbar";
import map from "assets/map.png";
import unsplashoGmf8o53LeE from "assets/unsplashoGmf8o53LeE.png";
import Property from "./sections/property";
import Flexibility from "./sections/flexibility";
import NewProperty from "./sections/addNewProperty";
import Testimonial from "./sections/testimonial";
import Footer from "./sections/footer";

function Home() {
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
    <>
      <HeroWrapper>
        {/* --------------NAVBAR------------- */}
        <Navbar />
        <HeroBody>
          <TextSection data-aos="fade-right">
            The most affortable place to stay in the san franciso bay area
          </TextSection>
          <ImageSection data-aos="fade-left">
            <MapImage src={map} />
            <SeletionWrapper>
              <SelectWrapper>
                <Select>
                  <Options>All Type</Options>
                  <Options>All Type</Options>
                  <Options>All Type</Options>
                  <Options>All Type</Options>
                </Select>
              </SelectWrapper>
              <SelectWrapper>
                <Select>
                  <Options>Neighborhood</Options>
                  <Options>All Type</Options>
                  <Options>All Type</Options>
                  <Options>All Type</Options>
                </Select>
              </SelectWrapper>
              <SvgHolder>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.9901 10.3188L16.2939 14.6226C16.4452 14.7739 16.5301 14.9792 16.53 15.1932C16.53 15.4072 16.4449 15.6124 16.2935 15.7637C16.1421 15.915 15.9368 15.9999 15.7228 15.9998C15.5088 15.9998 15.3036 15.9147 15.1523 15.7633L10.8485 11.4595C9.56197 12.456 7.9441 12.9249 6.32406 12.7709C4.70401 12.6169 3.20349 11.8515 2.12774 10.6304C1.05199 9.40936 0.481819 7.82433 0.533226 6.19779C0.584633 4.57125 1.25375 3.02539 2.40446 1.87468C3.55517 0.723966 5.10104 0.0548478 6.72757 0.00344105C8.35411 -0.0479657 9.93914 0.522201 11.1602 1.59795C12.3813 2.6737 13.1467 4.17423 13.3007 5.79427C13.4547 7.41432 12.9858 9.03219 11.9893 10.3188H11.9901ZM6.93033 11.1995C8.20331 11.1995 9.42415 10.6938 10.3243 9.7937C11.2244 8.89356 11.7301 7.67272 11.7301 6.39974C11.7301 5.12676 11.2244 3.90592 10.3243 3.00579C9.42415 2.10565 8.20331 1.59997 6.93033 1.59997C5.65735 1.59997 4.43651 2.10565 3.53637 3.00579C2.63624 3.90592 2.13055 5.12676 2.13055 6.39974C2.13055 7.67272 2.63624 8.89356 3.53637 9.7937C4.43651 10.6938 5.65735 11.1995 6.93033 11.1995Z"
                    fill="white"
                  />
                </svg>
              </SvgHolder>
            </SeletionWrapper>
          </ImageSection>
        </HeroBody>
      </HeroWrapper>
      <SecondHeroWrapper>
        <div style={{ padding: "0 20px" }}>
          <Title>minimum living cost takes care of everything</Title>
        </div>
        <SectionWrapper>
          <LeftSection data-aos="fade-up-right">
            <CostImage src={unsplashoGmf8o53LeE} />
          </LeftSection>
          <RightSection>
            <CostContent>
              <SvgImg>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 38.25C9.14439 38.25 0.750015 29.8556 0.750015 19.5C0.750015 9.14437 9.14439 0.75 19.5 0.75C29.8556 0.75 38.25 9.14437 38.25 19.5C38.25 29.8556 29.8556 38.25 19.5 38.25ZM19.5 34.5C23.4783 34.5 27.2936 32.9196 30.1066 30.1066C32.9197 27.2936 34.5 23.4782 34.5 19.5C34.5 15.5218 32.9197 11.7064 30.1066 8.8934C27.2936 6.08035 23.4783 4.5 19.5 4.5C15.5218 4.5 11.7065 6.08035 8.89341 8.8934C6.08037 11.7064 4.50001 15.5218 4.50001 19.5C4.50001 23.4782 6.08037 27.2936 8.89341 30.1066C11.7065 32.9196 15.5218 34.5 19.5 34.5ZM12.9375 23.25H23.25C23.4987 23.25 23.7371 23.1512 23.9129 22.9754C24.0887 22.7996 24.1875 22.5611 24.1875 22.3125C24.1875 22.0639 24.0887 21.8254 23.9129 21.6496C23.7371 21.4738 23.4987 21.375 23.25 21.375H15.75C14.5068 21.375 13.3145 20.8811 12.4355 20.0021C11.5564 19.123 11.0625 17.9307 11.0625 16.6875C11.0625 15.4443 11.5564 14.252 12.4355 13.3729C13.3145 12.4939 14.5068 12 15.75 12H17.625V8.25H21.375V12H26.0625V15.75H15.75C15.5014 15.75 15.2629 15.8488 15.0871 16.0246C14.9113 16.2004 14.8125 16.4389 14.8125 16.6875C14.8125 16.9361 14.9113 17.1746 15.0871 17.3504C15.2629 17.5262 15.5014 17.625 15.75 17.625H23.25C24.4932 17.625 25.6855 18.1189 26.5646 18.9979C27.4437 19.877 27.9375 21.0693 27.9375 22.3125C27.9375 23.5557 27.4437 24.748 26.5646 25.6271C25.6855 26.5061 24.4932 27 23.25 27H21.375V30.75H17.625V27H12.9375V23.25Z"
                    fill="#F4511E"
                  />
                </svg>
              </SvgImg>
              <Description>Pay as Little as possible!</Description>
            </CostContent>
            <CostContent>
              <SvgImg>
                <svg
                  width="40"
                  height="35"
                  viewBox="0 0 40 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.25 34.375H2.74998C2.24165 34.375 1.75414 34.1775 1.39469 33.8258C1.03525 33.4742 0.833313 32.9973 0.833313 32.5V18.4131C0.833283 18.1452 0.891946 17.8804 1.00535 17.6365C1.11875 17.3927 1.28426 17.1754 1.49073 16.9994L8.49998 11.02V2.5C8.49998 2.00272 8.70191 1.52581 9.06136 1.17417C9.4208 0.822544 9.90831 0.625 10.4166 0.625H37.25C37.7583 0.625 38.2458 0.822544 38.6053 1.17417C38.9647 1.52581 39.1666 2.00272 39.1666 2.5V32.5C39.1666 32.9973 38.9647 33.4742 38.6053 33.8258C38.2458 34.1775 37.7583 34.375 37.25 34.375ZM14.25 30.625H20V19.2663L12.3333 12.7263L4.66665 19.2663V30.625H10.4166V23.125H14.25V30.625ZM23.8333 30.625H35.3333V4.375H12.3333V8.36312C12.7818 8.36312 13.2322 8.51688 13.5926 8.82625L23.1759 16.9994C23.3824 17.1754 23.5479 17.3927 23.6613 17.6365C23.7747 17.8804 23.8333 18.1452 23.8333 18.4131V30.625ZM27.6666 15.625H31.5V19.375H27.6666V15.625ZM27.6666 23.125H31.5V26.875H27.6666V23.125ZM27.6666 8.125H31.5V11.875H27.6666V8.125ZM20 8.125H23.8333V11.875H20V8.125Z"
                    fill="#F4511E"
                  />
                </svg>
              </SvgImg>
              <Description>Enjoy wisdom of community!</Description>
            </CostContent>
            <CostContent>
              <SvgImg>
                <svg
                  width="37"
                  height="40"
                  viewBox="0 0 37 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.6556 26.4999L35.9093 27.8518C36.0484 27.935 36.1635 28.0529 36.2434 28.1939C36.3233 28.3348 36.3653 28.4941 36.3653 28.6562C36.3653 28.8182 36.3233 28.9775 36.2434 29.1185C36.1635 29.2595 36.0484 29.3773 35.9093 29.4605L19.4656 39.3268C19.174 39.502 18.8402 39.5946 18.5 39.5946C18.1598 39.5946 17.826 39.502 17.5343 39.3268L1.0906 29.4605C0.951558 29.3773 0.83647 29.2595 0.756559 29.1185C0.676648 28.9775 0.634644 28.8182 0.634644 28.6562C0.634644 28.4941 0.676648 28.3348 0.756559 28.1939C0.83647 28.0529 0.951558 27.935 1.0906 27.8518L3.34435 26.4999L18.5 35.5937L33.6556 26.4999ZM33.6556 17.6874L35.9093 19.0393C36.0484 19.1225 36.1635 19.2404 36.2434 19.3814C36.3233 19.5223 36.3653 19.6816 36.3653 19.8437C36.3653 20.0057 36.3233 20.165 36.2434 20.306C36.1635 20.447 36.0484 20.5648 35.9093 20.648L18.5 31.0937L1.0906 20.648C0.951558 20.5648 0.83647 20.447 0.756559 20.306C0.676648 20.165 0.634644 20.0057 0.634644 19.8437C0.634644 19.6816 0.676648 19.5223 0.756559 19.3814C0.83647 19.2404 0.951558 19.1225 1.0906 19.0393L3.34435 17.6874L18.5 26.7812L33.6556 17.6874ZM19.4637 0.454292L35.9093 10.3205C36.0484 10.4038 36.1635 10.5216 36.2434 10.6626C36.3233 10.8036 36.3653 10.9629 36.3653 11.1249C36.3653 11.287 36.3233 11.4462 36.2434 11.5872C36.1635 11.7282 36.0484 11.8461 35.9093 11.9293L18.5 22.3749L1.0906 11.9293C0.951558 11.8461 0.83647 11.7282 0.756559 11.5872C0.676648 11.4462 0.634644 11.287 0.634644 11.1249C0.634644 10.9629 0.676648 10.8036 0.756559 10.6626C0.83647 10.5216 0.951558 10.4038 1.0906 10.3205L17.5343 0.454292C17.826 0.279085 18.1598 0.186523 18.5 0.186523C18.8402 0.186523 19.174 0.279085 19.4656 0.454292H19.4637ZM18.5 4.24742L7.0381 11.1249L18.5 18.0024L29.9618 11.1249L18.5 4.24742Z"
                    fill="#F4511E"
                  />
                </svg>
              </SvgImg>
              <Description>
                Let's somebody else take care of Landlord!
              </Description>
            </CostContent>
            <CostContent>
              <SvgImg>
                <svg
                  width="37"
                  height="39"
                  viewBox="0 0 37 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25 0.75C13.2937 0.75 17.67 3.59438 19.8694 7.76438C22.0763 4.65563 25.7062 2.625 29.8125 2.625H36.375V7.3125C36.375 14.0437 30.9188 19.5 24.1875 19.5H21.375V21.375H30.75V34.5C30.75 36.5719 29.0719 38.25 27 38.25H12C9.92813 38.25 8.25 36.5719 8.25 34.5V21.375H17.625V17.625H13.875C6.62625 17.625 0.75 11.7487 0.75 4.5V0.75H8.25ZM27 25.125H12V34.5H27V25.125ZM32.625 6.375H29.8125C25.1531 6.375 21.375 10.1531 21.375 14.8125V15.75H24.1875C28.8469 15.75 32.625 11.9719 32.625 7.3125V6.375ZM8.25 4.5H4.5C4.5 9.67688 8.69813 13.875 13.875 13.875H17.625C17.625 8.69813 13.4269 4.5 8.25 4.5Z"
                    fill="#F4511E"
                  />
                </svg>
              </SvgImg>
              <Description>Enjoy peaceful Environment!</Description>
            </CostContent>
            <CostContent>
              <SvgImg>
                <svg
                  width="35"
                  height="43"
                  viewBox="0 0 35 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.375 7.6325V24.8544C4.37502 26.089 4.67983 27.3045 5.26236 28.393C5.8449 29.4816 6.68716 30.4095 7.71438 31.0944L17.5 37.6194L27.2856 31.0944C28.3126 30.4097 29.1547 29.4821 29.7372 28.3939C30.3197 27.3057 30.6247 26.0905 30.625 24.8563V7.6325L17.5 4.71875L4.375 7.6325ZM2.09312 4.29875L17.5 0.875L32.9069 4.29875C33.3232 4.39131 33.6956 4.62306 33.9625 4.95576C34.2294 5.28846 34.3749 5.70222 34.375 6.12875V24.8544C34.3749 26.7064 33.9175 28.5297 33.0435 30.1625C32.1696 31.7953 30.906 33.1871 29.365 34.2144L17.5 42.125L5.635 34.2144C4.09426 33.1873 2.83086 31.7958 1.9569 30.1633C1.08294 28.5309 0.625443 26.7079 0.625 24.8563V6.12875C0.625073 5.70222 0.770571 5.28846 1.03748 4.95576C1.30439 4.62306 1.67676 4.39131 2.09312 4.29875ZM17.5 24.3125L11.9894 27.2094L13.0412 21.0744L8.58437 16.7281L14.7456 15.8319L17.5 10.25L20.2563 15.8319L26.4156 16.7281L21.9587 21.0744L23.0087 27.2094L17.5 24.3125Z"
                    fill="#F4511E"
                  />
                </svg>
              </SvgImg>
              <Description>Stay Safe! Save Money!</Description>
            </CostContent>
            <CostContent>
              <SvgImg>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 0.75C29.8556 0.75 38.25 9.14438 38.25 19.5C38.25 29.8556 29.8556 38.25 19.5 38.25C9.14438 38.25 0.75 29.8556 0.75 19.5C0.75 9.14438 9.14438 0.75 19.5 0.75ZM19.5 4.5C15.5218 4.5 11.7064 6.08035 8.8934 8.8934C6.08035 11.7064 4.5 15.5218 4.5 19.5C4.5 23.4782 6.08035 27.2936 8.8934 30.1066C11.7064 32.9196 15.5218 34.5 19.5 34.5C23.4782 34.5 27.2936 32.9196 30.1066 30.1066C32.9196 27.2936 34.5 23.4782 34.5 19.5C34.5 15.5218 32.9196 11.7064 30.1066 8.8934C27.2936 6.08035 23.4782 4.5 19.5 4.5ZM19.5 10.125C21.4736 10.1257 23.3966 10.7493 24.9951 11.9069C26.5936 13.0644 27.786 14.697 28.4024 16.5718C29.0189 18.4467 29.0279 20.4683 28.4282 22.3485C27.8285 24.2288 26.6508 25.8719 25.0627 27.0437C23.4746 28.2155 21.5572 28.8562 19.5837 28.8746C17.6102 28.893 15.6812 28.2881 14.0716 27.146C12.462 26.004 11.2538 24.3831 10.6193 22.5143C9.98469 20.6455 9.95608 18.6241 10.5375 16.7381C10.9761 17.7182 11.738 18.5179 12.6957 19.0034C13.6534 19.4889 14.7489 19.6308 15.7987 19.4052C16.8484 19.1797 17.7889 18.6004 18.4627 17.7644C19.1365 16.9283 19.5027 15.8862 19.5 14.8125C19.5002 13.9096 19.2397 13.0259 18.7498 12.2675C18.2598 11.5091 17.5613 10.9084 16.7381 10.5375C17.6119 10.2694 18.5381 10.125 19.5 10.125Z"
                    fill="#F4511E"
                  />
                </svg>
              </SvgImg>
              <Description>Pay for what you use !</Description>
            </CostContent>
          </RightSection>
        </SectionWrapper>
      </SecondHeroWrapper>
      <Property />
      <Flexibility />
      <NewProperty />
      <Testimonial />
      <Footer />
    </>
  );
}

export default Home;
// FIRST HERO SECTION CSS------------------------------------------

const HeroWrapper = styled.div`
  background: url(${herobackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    height: auto;
    padding-bottom: 50px;
  }
`;

const HeroBody = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 150px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;
  overflow-x: hidden;
  /* padding: 0 20px; */
  @media only screen and (max-width: 768px) {
    margin: 50px auto;
    grid-template-columns: 1fr;
    height: auto;
    grid-gap: 50px;
  }
`;
const TextSection = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 1.5;
  letter-spacing: -1px;
  text-transform: capitalize;
  color: #ffffff;
  padding: 0 20px;

  @media only screen and (max-width: 550px) {
    font-size: 32px;
  }
`;
const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MapImage = styled.img`
  width: 100%;
`;
const SeletionWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  height: 88px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Select = styled.select`
  width: 150px;
  height: 58px;
  border: none;
  background: #f9f9f9;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
`;
const Options = styled.option`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
`;

const SelectWrapper = styled.div`
  background: #f9f9f9;
  border: 1px solid #e6e6e6;
  border-radius: 5px 0px 0px 5px;
`;
const SvgHolder = styled.div`
  background: #23a6f0;
  border: 1px solid #e6e6e6;
  border-radius: 0px 5px 5px 0px;
  height: 58px;
  width: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

// SECOND HERO SECTION CSS------------------------------------------

const SecondHeroWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
  overflow-x: hidden;
`;
const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
  place-items: center;
  grid-gap: 100px;
  width: 100%;
  margin-top: 50px;
  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
const Title = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 64px;
  color: #18191f;
  text-transform: capitalize;
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
const LeftSection = styled.div``;
const CostImage = styled.img`
  box-shadow: 5px 24px 53px rgba(0, 0, 0, 0.25);
  border-radius: 50px 0px;
  width: 100%;
`;
const RightSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  width: 100%;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
const CostContent = styled.div`
  padding: 0 20px;
`;
const SvgImg = styled.div`
  width: 77px;
  height: 77px;
  background: #ffffff;
  box-shadow: 0px 12px 19px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    transform: scale(0.9);
  }
`;
const Description = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.5;
  text-transform: capitalize;
  color: #18191f;
  margin-top: 20px;
  @media only screen and (max-width: 550px) {
    font-size: 18px;
  }
`;
