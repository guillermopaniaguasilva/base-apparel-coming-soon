import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const Section = styled.section`
  @media only screen and (min-width: 600px) {
    /* display: flex; */
  }
`;

export const Container = styled.div`
  @media only screen and (min-width: 600px) {
    width: 404px;
    height: 445px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 15%;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('assets/images/hero-mobile.jpg');

  @media only screen and (min-width: 600px) {
    background-image: url('assets/images/hero-desktop.jpg');
    height: 100vh;
  }
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

  @media only screen and (min-width: 600px) {
    text-align: left;
  }
`;

export const Bold = styled.p`
  margin: 0 32px;
  font-size: 40px;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: 11px;
  color: ${COLORS.DARK_GRAYISH_RED};

  @media only screen and (min-width: 600px) {
    margin-left: 0;
  }
`;

export const Description = styled.p`
  text-align: center;
  margin: 16px 40px 0 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${COLORS.DESATURATED_RED};

  @media only screen and (min-width: 600px) {
    text-align: left;
    margin: 16px 40px 0 30px;
  }
`;
