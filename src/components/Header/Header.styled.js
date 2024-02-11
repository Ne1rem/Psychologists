import styled from 'styled-components';

export const HeaderWrap = styled.header`
    padding: 0;
    border-bottom: 1px solid rgba(25, 26, 21, 0.10);
    margin-bottom: 64px;
`
export const HeaderContainer = styled.header`
    display: flex;
    padding: 30px 0;
    align-items: center;
`

export const Logo = styled.p`
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.4px;
    margin-right: 130px;
`

export const LogoSpan = styled.span`
    color: var(--green-color);
    font-weight: 700;
`
export const LogoDotSpan = styled.span`
    color: var(--green-color);
    font-weight: 500;
`
export const ButtonLog = styled.button`
    display: flex;
    padding: 14px 39px;
    border-radius: 30px;
    background: var(--white-color);
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(25, 26, 21, 0.2);
    color: var(--black-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.2px;
    
        &:hover,
        &:focus,
        &:active {
            background: var(--hover-color);
        }
`

export const ButtonReg = styled.button`
    display: flex;
    gap: 18px;
    padding: 14px 40px;
    border-radius: 30px;
    background: var(--green-color);
    justify-content: center;
    align-items: center;
    width: 171px;
    color: var(--white-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.2px;
    
        &:hover,
        &:focus,
        &:active {
            background: var(--hover-color);
        }
`

export const UserMenu = styled.div`
    display: flex;
    gap: 8px;
`
