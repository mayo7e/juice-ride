import styled from 'styled-components';

export const TabBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #ffff;
  border-bottom: 1px solid #cccccc;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const TabButton = styled.button`
  flex: 1;
  padding: 10px 0;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &.active {
    background-color: tomato;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 8px 0;
  }
`;
