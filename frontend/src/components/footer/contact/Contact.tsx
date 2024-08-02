import React from 'react';
import styled from 'styled-components';
import '../../../css/footer/contact/Contact.css';
import Details from './Details';
import Inputs from './Inputs';
// import Form from './Form';

const PageWrapper = styled.div`
  @media (max-width: 640px) {
    width:100% !important;
  }
`;

const PageHeadingWrapper = styled.div`
  height: 45px;
  margin-top: 10px;
  width:80%;
  float:right;

  @media (max-width:640px){
    width:100%;
    float:none;
  }
`;

const FormContainer = styled.div`
  float:right;
  width: 80%;
  display: flex;
  position:relative;
  justify-content: flex-start;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  height: auto;
  max-height:90%;
  @media (max-width: 640px) {
    width:98% !important;
    justify-content: flex-start;
    padding:2px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 97%;
    max-width: 500px;
    min-width: 0px;
    grid-gap: 0px;
    height:80%
  }
  @media (min-width: 1600px) {
    width: 85%
  }

  @media (min-width: 2100px) {
    width: 75%
  }
  @media (min-width: 2300px) {
    width: 70%
  }
`;

const TextOne = styled.b`
  font-size: 30px;
  color: white;
  padding-bottom:10px;
  left:0;
  right:0;
  margin-left:auto;
  margin-right: auto;
  @media (max-width:600px) {
    color: peachpuff !important;
  }
`;

const Conact: React.FC = () => {
  return (
    <div className='contact'>
      <PageWrapper className='page-wrapper'>
        <PageHeadingWrapper className='page-heading-wrapper'>
          <TextOne className='contact-text'>Contact Us</TextOne>
        </PageHeadingWrapper>
        <FormContainer className='form-container'>
          <Details />
          <Inputs editData = {[]}dateTimeStaus={false} bookingMode={false} setBookingSubmit={()=>false} appendInputData = {()=>{}} inputOpen={true} setInputOpen={()=>{}}/>
        </FormContainer>
      </PageWrapper>
    </div>
  );
};

export default Conact;
