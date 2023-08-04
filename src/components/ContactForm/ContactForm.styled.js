import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const Label = styled.label`
  width: 100%;
  padding: 0;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #fff;
  outline: none;

  &:hover {
    border-color: #2196f3;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  margin: 0px 10px;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  font-weight: 700;
   cursor: pointer;
 
  &:hover,
  &:focus {
    background-color: #2196f3;
    color: #000;
  }
  
`;