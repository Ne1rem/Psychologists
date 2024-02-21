import styled from 'styled-components';


export const CloseButtonStyledAppoint = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  transition: all 300ms ease;
  position: absolute;
  top: 20px;
  right: 20px;
  &:hover {
    transform: scale(1.3);
  }
`;

export const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1200;
  overflow: scroll;
`
export const AvatarAppointment = styled.img`
width: 44px;
height: 44px;
border-radius: 15px;
`
export const SvgCloseAp = styled.svg`
    width: 32px;
    height: 32px;
    stroke: var(--black-color);
`

export const ModalWindow = styled.div`
  position: relative;
  width: 600px;
  padding: 64px;
  border-radius: 30px;
  background-color: #ffffff;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 44px 24px;
  }
`

export const RegisterForm = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const RegisterInput = styled.input`
  border: 1px solid rgba(25, 26, 21, 0.1);
  border-radius: 12px;
  padding: 16px 18px 16px 18px;
`

export const RegisterButton = styled.button `
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 64px;
  justify-content: center;
  border: 1px solid;
  border-radius: 30px;
  padding: 14px 40px;
  font-family: Inter;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  background-color: #fc832c;
  color: #fbfbfb;
  cursor: pointer;
  transition: 0.3s;
`