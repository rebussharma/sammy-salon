import React from 'react';
import styled from 'styled-components';
import '../../../css/footer/contact/Contact.css';
import Details from './Details';
import Inputs from './Inputs';
// import Form from './Form';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const FormContainer = styled.div`
  width: 80%;
  display: flex;
  position:relative;
  justify-content: flex-end;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  height: auto;
  max-height:90%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 97%;
    max-width: 500px;
    min-width: 0px;
    grid-gap: 0px;
  }
  @media (min-width: 1600px) {
    width:60%
  }
  @media (min-width: 1850px) {
    width:50%
  }
`;

const TextOne = styled.b`
  font-size: 30px;
  color: rgb(4, 4, 59);
  text-align: center;
  padding-bottom:10px;
`;

// const TextTwo = styled.p`
//   color: rgb(4, 4, 34);
//   font-size: 15px;
//   text-align: center;
// `;

const Conact: React.FC = () => {
  return (
    <div className='contact'>
      <PageWrapper className='page-wrapper'>
        <PageHeadingWrapper className='page-heading-wrapper'>
          <TextOne className='contact-text'>Contact Us</TextOne>
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
