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
  background-color: rgba(25, 26, 21, 0.6);
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  z-index: 100;
  overflow-y: hidden;

  @media only screen and (min-width: 768px) {
    padding-top: 40px;
  }
  @media only screen and (min-width: 1440px) {
    align-items: center;
  }

  & div[name='scroll-container'] {
    width: auto;
    height: auto;
    overflow-y: hidden;
    overflow-x: hidden;
    scroll-behavior: smooth;
    @media only screen and (min-width: 1440px) {
    }

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
    }

    &::-webkit-scrollbar-thumb {
      background-color: #737272;
      border-radius: 10px;
    }
  }
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
z-index: 6;

  @media (max-width: 768px) {
    padding: 44px 24px;
  }
`

export const RegisterForm = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const RegisterInput = styled.input`
  border: 1px solid rgba(25, 26, 21, 0.1);
  border-radius: 12px;
  padding: 16px 18px 16px 18px;
  
`
export const MakeAppointmentH = styled.h1 `
font-size: 40px;
font-weight: 500;
line-height: 48px;
letter-spacing: -0.02em;
padding-bottom: 20px;
`
export const MakeAppointmentP = styled.p `
font-size: 16px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
color: rgba(25, 26, 21, 0.5);
padding-bottom: 40px;
`
export const MakeAppointmentDivAvatar = styled.div `
display: flex;
gap: 14px;

`


export const RegisterButton = styled.button `
  display: flex;
  margin-top: 40px;
  justify-content: center;
  border: 1px solid;
  border-radius: 30px;
  padding: 14px 40px;
  font-family: Inter;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  background-color: var(--green-color);
  color: #fbfbfb;
  cursor: pointer;
  transition: 0.3s;
`

export const MakeAppointmentDivAvatarYourPsy = styled.div `
display: flex;
flex-direction:column ;
gap:4px;
`

export const MakeAppointmentDivAvatarYourPsyP1 = styled.p `
font-size: 12px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0em;
color: rgba(138, 138, 137, 1);
`

export const MakeAppointmentDivAvatarYourPsyP2 = styled.p `

font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
color: rgba(25, 26, 21, 1);

`

export const MakeAppointmentDivNumberTime = styled.div `
display: flex;
gap : 8px;
`

