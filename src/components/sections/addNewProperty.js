import React from "react";
import styled from "styled-components";

function NewProperty() {
  return (
    <Wrapper>
      <Title>
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </Title>{" "}
      <div style={{ padding: "0 30px" }}>
        <ContentWrapper>
          <Head>Add A New Property</Head>

          <div style={{ padding: "40px" }}>
            <FormWrapper>
              <FormField>
                <Label>Name</Label>
                <Input placeholder="Enter Name" />
              </FormField>
              <FormField>
                <Label>Address</Label>
                <Input placeholder="Enter Address" />
              </FormField>
              <FormField>
                <Label>Unit</Label>
                <Input placeholder="Enter Unit" />
              </FormField>
            </FormWrapper>
            <FormWrapper>
              <FormField>
                <Label>City</Label>

                <SelectWrapper>
                  <Select>
                    <Options>Warri</Options>
                    <Options>Ughelli</Options>
                    <Options>Ekpan</Options>
                    <Options>Sapele</Options>
                  </Select>
                </SelectWrapper>
              </FormField>
              <FormField>
                <Label>State</Label>
                <SelectWrapper>
                  <Select>
                    <Options>Delta</Options>
                    <Options> Lagos</Options>
                    <Options>Abuja</Options>
                    <Options>Benin</Options>
                  </Select>
                </SelectWrapper>
              </FormField>
              <FormField>
                <Label>Room Type</Label>
                <SelectWrapper>
                  <Select>
                    <Options> Self Contain</Options>
                    <Options>Mini Flat</Options>
                    <Options>Bedsitter</Options>
                    <Options>2 Bedrooms</Options>
                  </Select>
                </SelectWrapper>
              </FormField>
            </FormWrapper>
            <FormWrapper>
              <FormField>
                <Label>Price</Label>
                <Input placeholder="Enter Price" />
              </FormField>
              <FormField>
                <Label>Select Room type</Label>
                <SelectWrapper>
                  <Select>
                    <Options>All Type</Options>
                    <Options>All Type</Options>
                    <Options>All Type</Options>
                    <Options>All Type</Options>
                  </Select>
                </SelectWrapper>
              </FormField>
            </FormWrapper>
            <>
              <TextArea>
                <Label>Description</Label>

                <Textarea placeholder="Enter Description"></Textarea>
              </TextArea>
            </>
            <>
              <TextArea>
                <Label>Upload Photos</Label>

                <UploadDiv>
                  <Drag>
                    Drag your images here, or{" "}
                    <BrowseLabel htmlFor="upload">browse</BrowseLabel>{" "}
                  </Drag>
                  <Input type="file" id="upload" style={{ display: "none" }} />
                  <small
                    style={{ fontWeight: "600", color: " rgba(0, 0, 0, 0.5)" }}
                  >
                    Supported: JPG, JPEG,PNG
                  </small>
                </UploadDiv>
              </TextArea>
            </>

            <BtnWrap>
              <PropertyBtn>Add new Property</PropertyBtn>
            </BtnWrap>
          </div>
        </ContentWrapper>
      </div>
    </Wrapper>
  );
}

export default NewProperty;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 150px auto;
`;

const ContentWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 63px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  width: 100%;
  height: auto;
  margin-top: 40px;
`;
const Title = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  text-transform: capitalize;
  color: #000000;
  text-align: center;
`;

const Head = styled.h4`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #f4511e;
  padding-top: 40px;
  overflow: hidden;
`;
const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 100%;
  grid-gap: 20px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: unset;
  }
`;
const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;
const Label = styled.label`
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 5px;
`;
const Input = styled.input`
  background: #f9f9f9;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  height: 50px;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #737373;
  padding: 0 15px;
  width: auto;

  :focus {
    outline: none;
    border: none;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;
const Textarea = styled.textarea`
  background: #f9f9f9;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  height: 50px;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #737373;
  padding: 0 15px;
  width: auto;
  height: 150px;
  :focus {
    outline: none;
    border: none;
  }
`;

const UploadDiv = styled.div`
  width: 100%;
  height: 120px;
  background: rgba(244, 81, 30, 0.01);
  border: 1px dashed #f4511e;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Drag = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;
const BrowseLabel = styled.label`
  color: #f4511e;
  cursor: pointer;
`;

const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PropertyBtn = styled.button`
  max-width: 513px;
  width: 100%;
  height: 50px;
  background: #f4511e;
  border: none;
  outline: none;
  border-radius: 9.07965px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 21.7911px;
  letter-spacing: 0.181593px;
  margin-top: 50px;
  cursor: pointer;
  color: #ffffff;
  @media only screen and (max-width: 320px) {
    font-size: 14px;
  }
`;
const SelectWrapper = styled.div`
  background: #f9f9f9;
  border: 1px solid #e6e6e6;
  border-radius: 5px 0px 0px 5px;
`;

const Select = styled.select`
  width: 100%;
  height: 58px;
  border: none;
  background: #f9f9f9;
  font-family: "Poppins";
  font-style: normal;
  font-size: 14px;
  line-height: 28px;
  padding: 0 15px;
  :active,
  :focus {
    border: none;
    outline: none;
  }
`;
const Options = styled.option`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
`;
