import styled from 'styled-components';

export const MapWrapper = styled.div`
  height: 100vh;
  width: ${(props) => (props.isChatOpen ? '70%' : '100%')};
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: ${(props) => (props.isChatOpen ? '60%' : '100%')};
  }

  @media (max-width: 480px) {
    width: ${(props) => (props.isChatOpen ? '50%' : '100%')};
  }
`;
