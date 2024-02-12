import React from 'react';
import styled from 'styled-components';
import '../../../css/footer/contact/Contact.css';
import Details from './Details';
import Inputs from './Inputs';
// import Form from './Form';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  max-height: 70vh;
  align-items: center;
  background-color: whitesmoke;
  padding-bottom: 5px;
  width: 30vw;
`;

const PageHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const FormContainer = styled.div`
  width: 95%;
  display: flex;
  position:relative;
  justify-content: flex-start;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  height: auto;
  max-height:90%;
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
