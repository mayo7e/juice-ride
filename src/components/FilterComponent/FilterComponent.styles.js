import styled from 'styled-components';

export const FilterContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  height: 40%;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;
