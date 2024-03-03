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

export const TitelNotLoggedIn = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 80px;
  font-weight: 600;
  line-height: 1.025;
  letter-spacing: -1.6px;
`;

export const LabelDiv = styled.div`
display: flex;
gap: 8px;
flex-direction: column;
`

export const Label = styled.label`
font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
color: var(--black-light-color);
`
export const LabelSelect = styled.select`
 position: relative;
  width: 226px;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: #3470FF;
  border: none;
  border-radius: 14px;
  padding: 14px 18px;
`
export const LabelSelectOp = styled.option`
color: black;
background-color: white;
border-radius: 14px;
border: none;
gap: 8px;
`