import styled from '@emotion/styled';

export const EmployeeProjectFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 60px;
  width: 100%;
  max-width: 800px;
  height: calc(100vh - 110px);
  background-color: white;
  border: 2px solid #f9f9fca6;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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