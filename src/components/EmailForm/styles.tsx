import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

type InputProps = {
  hasError: boolean;
};

export const Form = styled.form`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 32px;
`;

export const Input = styled.input<InputProps>`
  margin-top: 32px;
  padding: 12px 0 12px 24px;
  border-radius: 30px;
  height: 48px;
  width: 90%;
  border: none;
  background: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
  outline: none;
  border: 1px ${COLORS.DESATURATED_RED} solid;
  opacity: 0.5;
  ${({ hasError }) => (hasError ? `border: 2px red solid;` : '')}

  &::placeholder {
    color: ${COLORS.DESATURATED_RED};
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
  }
`;

export const SubmitIcon = styled.img``;

export const SubmitButton = styled.button`
  width: 64px;
  height: 48px;
  border-radius: 30px;
  border: none;
  background: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
  position: absolute;
  top: 32px;
  left: 290px;
`;

export const ErrorIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 43px;
  left: 255px;
`;

export const ErrorMessage = styled.p`
  color: ${COLORS.SOFT_RED};
  font-size: 13px;
  font-weight: 400;
  line-height: 13px;
  margin-left: 24px;
  margin-top: 8px;
`;
