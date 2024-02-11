import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 375px;
  padding-left: 20px;
  padding-right: 20px;

  
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 128px;
    padding-right: 128px;
  }
`;