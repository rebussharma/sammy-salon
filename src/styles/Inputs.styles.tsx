import styled from 'styled-components';

export const InputBoxWrapper = styled.form`
  height: 100%;
  position: absolute;
  padding-bottom: 10px;
  display:flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: stretch;
  padding-right:3px;

`;

export const InputWrapper = styled.div`
  border: 1px solid transparent;
  width: 100%;
  max-height: 15%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding-left:0;
  }
  @media (max-width: 1024px) {
    padding-left:0;
  }
`;

export const Input = styled.input`
  color: #333;
  width: 100%;
  font-size: 15px;
  
  border-bottom: 1px solid rgb(100, 21, 173);
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  outline: 0px transparent !important;
`;

export const MessageInput = styled.textarea`
  width: 95%;
  color: #333;
  font-size: 15px;
  border-bottom: 1px solid rgb(100, 21, 173);
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  outline: 0px transparent !important;
  @media (min-width: 1024px) {
    width:85%;
  }

`;

export const SubMitButton = styled.input`
  position: absolute;
  padding: 5px;
  background-color: rgb(8, 8, 63);
  color: #fff;
  border: none;
  border-radius: 1px;
  cursor: pointer;
`;

// export const LoadingButton = styled.button`
//   position: absolute;
//   bottom: 20px;
//   right: 20px;
//   padding: 10px;
//   background-color: rgb(8, 8, 63);
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   padding: 12px 25px 12px 24px;
//   cursor: pointer;
// `;