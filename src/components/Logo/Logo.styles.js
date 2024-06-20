import styled from 'styled-components';

export const LogoContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1000;
`;

export const LogoImage = styled.img`
  height: 50px;

  @media (max-width: 768px) {
    height: 40px;
  }

  @media (max-width: 480px) {
    height: 30px;
  }
`;
