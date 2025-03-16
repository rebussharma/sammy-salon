import styled from 'styled-components';

export const DetailsBarWrapper = styled.div`
  background-color: rgb(8, 8, 63);
  margin-right: 5px;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 55%;
  max-width: 60%;
  padding-bottom: 40px;
  @media (max-width:640px){
    width:54%;
    font-size: .75rem;
    padding: 1px;
    padding-bottom: 40px;
  }
  @media (max-width:430px){
    width:50%;
  }
  @media (max-width:330px){
    width:52%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextOne = styled.p`
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 640px){
    margin-block-end: 0;
  }
`;

export const TextTwo = styled.p`
  text-align: center;
  color: #fff;
  font-size: 12px;
  line-height: 18px;
`;

export const BigCircle = styled.div`
  height: 50px;
  margin-top: 10px;
  width: 50px;
  background-color: rgb(100, 21, 173);
  border-radius: 100%;
  margin-left: 10px;
`;

export const SmallCircle = styled.div`
  position: absolute;
  margin-left: 10px;
  background-color: rgb(252, 113, 137);
  border-radius: 100%;
  height: 30px;
  width: 30px;
`;

export const ContactsWrapper = styled.a`
  display: flex;
  width: 100%;
  height: 10px;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: none;
  @media (max-width: 330px) {
    font-size:.70rem;
    margin-left: 2.5%;
  }
`;

export const ContactText = styled.div`
  color: #fff;
  font-size: 15px;
  margin-left: 10px;
  @media (max-width: 768px) {
    font-size:.75rem;
    margin-left: 2%;
  }
`;
