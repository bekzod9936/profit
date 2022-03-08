import { device } from 'utils/style';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  border-bottom-right-radius: 30% 40%;
  border: 1px solid #61656b;
  display: flex;
  flex-direction: column;
  box-shadow: 6px 6px 14px 0 rgba(255, 255, 255, 0.1),
    -6px -6px 14px 0 rgba(255, 255, 255, 0.1);
  justify-content: space-between;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) -1.52%,
    rgba(255, 255, 255, 0.024) 104.35%
  );
  backdrop-filter: blur(120px);
  padding: 40px;
  max-width: 340px;
  max-height: 240px;
  min-height: 240px;
  @media (max-width: ${device.mobile}) {
    padding: 20px;
    max-width: 440px;
    max-height: 315px;
    min-height: 315px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    padding: 20px;
    max-width: 200px;
    max-height: 140px;
    min-height: 140px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    padding: 30px;
    max-width: 260px;
    max-height: 180px;
    min-height: 180px;
  }
`;

export const Title = styled.div`
  color: white;
  width: 100%;
  font-weight: 600;

  font-size: 35px;
  margin-bottom: 30px;

  @media (max-width: ${device.mobile}) {
    font-size: 33px;
    line-height: 54px;
    margin-bottom: 40px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 20px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    font-size: 26px;
    line-height: 31px;
  }
`;

export const containerVariants = {
  hover: {
    scale: 1.05,
  },
};
