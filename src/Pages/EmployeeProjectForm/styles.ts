import styled from '@emotion/styled';

export const EmployeeProjectFormContainer = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
padding: 50px;
width: 500px;
min-height: 350px;
/* max-height: fit-content; */
background-color: white;
border: 2px solid #020206a6;
border-radius: 4px;

`
export const ImputWrapper = styled.div `
display: flex;
flex-direction: column;
gap: 10px;
`


export const FormContainer = styled.div`
  background: white;
  width: 100%;
  height: 592px;
  border-radius: 4px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background: #1f27f5;
  height: 70px;
  width: 100%;
  color: white;
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 14px;
`;