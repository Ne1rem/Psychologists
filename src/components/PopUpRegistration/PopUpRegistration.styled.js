import styled from 'styled-components';
import { Field } from 'formik';

export const TextRegistration = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    line-height: 1.25;
    color: var(--normal-color);
    margin-bottom: 40px;
`

export const Label = styled.label`
  /* color: var(--black-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px; */
`;

export const StyledField = styled(Field)`
  display: flex;
  padding: 16px 18px;
  align-items: center;
  position: relative;
  width: 100%;
  border-radius: 12px;
  border: 1px solid var(--normal-color);
  color: var(--black-color);
  margin-bottom: 40px;

    &:last-child {
    margin-bottom: 18px;
    }

  &::placeholder {
    color: var(--black-color);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }
  &:focus-visible {
    outline: none;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 16px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  border-radius: 30px;
  background: var(--green-color);
  border: none;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: var(--hover-color);
  }
  &:focus {
    background: var(--hover-color);
  }
`;


export const SvgStyled = styled.svg`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  fill: none;
  stroke: var(--black-color);
`;
export const InputWrapper = styled.div`
  position: relative;
`;
export const ErrorMsg = styled.div`
  font-size: 14px;
  color: red;
`;