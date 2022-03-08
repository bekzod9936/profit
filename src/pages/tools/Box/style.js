import { device } from 'utils/style';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  border: 2px solid #6e59b6;
  border-radius: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) -1.79%,
    rgba(255, 255, 255, 0.024) 123.08%
  );
  backdrop-filter: blur(120px);
  @media (max-width: ${device.mobile}) {
    border-radius: 40px;

    backdrop-filter: blur(171.148px);
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    backdrop-filter: blur(82.6722px);
    border-radius: 20px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    border-radius: 25px;
    backdrop-filter: blur(96.4509px);
  }
`;

export const Title = styled.div`
  color: white;
  font-size: 25px;
  line-height: 27px;
  max-width: 80%;
  font-weight: 600;
  @media (max-width: ${device.mobile}) {
    font-size: 35.6557px;
    line-height: 39px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    font-size: 17.2234px;
    line-height: 19px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    font-size: 20.0939px;
    line-height: 22px;
  }
`;
export const Img = styled.img`
  position: absolute;
  left: 0;
  top: -20px;
  width: 50px;
  height: 50px;

  @media (max-width: ${device.mobile}) {
    width: 70px;
    height: 70px;
    top: -30px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    width: 35px;
    height: 35px;
    top: -15px;
  }
  @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
    width: 40px;
    height: 40px;
    top: -10px;
  }
`;
export const containerVariants = {
  hover: {
    scale: 1.05,
  },
};
