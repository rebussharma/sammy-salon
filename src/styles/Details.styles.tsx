import styled from 'styled-components';

export const DetailsBarWrapper = styled.div`
  background-color: rgb(8, 8, 63);
  margin-right: 50px;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
  max-width: 60%;
  padding: 5px;
  padding-bottom: 40px;
  @media (max-width: 768px) {
    padding-bottom: 80px;
    grid-row: 2;
    margin-right:5px;
  }
  @media (max-width: 1150px) {
    padding-bottom: 80px;
    grid-row: 2;
    margin-right:5px;
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
`;

export const ContactText = styled.div`
  color: #fff;
  font-size: 15px;
  margin-left: 10px;
  @media (max-width: 768px) {
    font-size:.75rem;
  }
`;

// export const SocialsWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   display: flex;
//   height: 10px;
//   justify-content: center;
//   bottom: 30px;
//   position: absolute;
//   cursor: pointer;
// `;

// export const SocialIconWrapper = styled.a`
//   width: 35px;
//   height: 35px;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   &:hover {
//     background-color: rgb(252, 113, 137);
//   }
// `;
