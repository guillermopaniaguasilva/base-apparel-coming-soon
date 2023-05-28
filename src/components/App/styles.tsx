import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const Image = styled.div`
  width: 100%;
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('assets/images/hero-mobile.jpg');
`;

export const Heading = styled.h1`
  text-align: center;
  margin: 64px 32px 0 32px;
  font-size: 40px;
  font-weight: 300;
  line-height: 42px;
  letter-spacing: 11px;
  text-transform: uppercase;
  color: ${COLORS.DESATURATED_RED};
`;

export const Bold = styled.p`
  margin: 0 32px;
  font-size: 40px;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: 11px;
  color: ${COLORS.DARK_GRAYISH_RED};
`;

export const Description = styled.p`
  text-align: center;
  margin: 16px 40px 0 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${COLORS.DESATURATED_RED};
`;
