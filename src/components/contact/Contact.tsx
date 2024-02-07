import React from 'react';
import styled from 'styled-components';
import Details from './Details';
import Inputs from './Inputs';
// import Form from './Form';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-color: whitesmoke;
  padding-bottom: 50px;
`;

const PageHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const FormContainer = styled.div`
  width: 65%;
  min-width: 600px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  height: auto;
  grid-gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
    max-width: 500px;
    min-width: 0px;
    grid-gap: 0px;
  }
`;

const TextOne = styled.b`
  font-size: 30px;
  color: rgb(4, 4, 59);
  text-align: center;
`;

const TextTwo = styled.p`
  color: rgb(4, 4, 34);
  font-size: 15px;
  text-align: center;
`;

const Conact: React.FC = () => {
  return (
    <div className='contact'>
      <PageWrapper className='page-wrapper'>
        <PageHeadingWrapper className='page-heading-wrapper'>
          <TextOne className='contact-text'>Contact Us</TextOne>
          <TextTwo className='contact-subtitle'>Any questions or suggestions? Write to us, we reply within 24 hrs!</TextTwo>
        </PageHeadingWrapper>
        <FormContainer className='form-container'>
          <Details />
          <Inputs />
        </FormContainer>
      </PageWrapper>
    </div>
  );
};

export default Conact;
