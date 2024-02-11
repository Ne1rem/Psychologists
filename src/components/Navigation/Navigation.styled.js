import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const NavigationWrap = styled.div`
    display: flex;
    gap: 40px;
    margin-right: auto;
`

export const NavigationLink = styled(NavLink)`
    display: inline-block;
    font-size: 16px;
    line-height: 1.25; 
    letter-spacing: -0.16px;
    padding: 12px 0;
    position: relative;

    &:hover,
    &:focus,
    &:focus-visible,
    &:active {
        &::after{
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0px;
            width: 8px;
            height: 8px;
            background-color: var(--green-color);
            border-radius: 50%;
        }
        color: inherit;
        outline: none;
  }
`