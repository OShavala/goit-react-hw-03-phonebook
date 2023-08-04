import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 0 0 20px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
   
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  p {
    margin: 0;
    padding: 10px 0;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 5px 25px;
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