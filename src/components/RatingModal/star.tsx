import styled from 'styled-components';
import styles from './rating-modal.module.css';

export const Star = ({ rating }: { rating: number }) => {
  return (
    <Container className={styles.container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={50 + 6 * rating}
        height={50 + 6 * rating}
        viewBox="0 0 85 81"
        fill="currentColor"
        role="presentation"
      >
        <path d="M29.4278383,26.4913549 L2.77970363,28.6432143 L2.63541119,28.6580541 C0.066865676,28.979767 -0.941953299,32.2222005 1.05754936,33.9345403 L21.3502824,51.3123553 L15.1650027,77.2797478 L15.1355051,77.4163845 C14.6437005,79.9569202 17.4230421,81.9201545 19.6736611,80.5499671 L42.5,66.6529451 L65.3263389,80.5499671 L65.447392,80.6201968 C67.7156822,81.8722123 70.4448402,79.8400226 69.8349973,77.2797478 L63.6489629,51.3123553 L83.9424506,33.9345403 L84.0504483,33.8378644 C85.9390285,32.0703808 84.8461128,28.855226 82.2202964,28.6432143 L55.571407,26.4913549 L45.2865041,1.85440279 C44.2543406,-0.618134262 40.7456594,-0.618134262 39.7134959,1.85440279 L29.4278383,26.4913549 Z"></path>
      </svg>
      <NumberContainer className={styles.number}>
        {rating || '?'}
      </NumberContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: lightblue;
  position: absolute;
  right: 50%;
  left: 50%;
  bottom: 85%;
`;

const NumberContainer = styled.div`
  position: absolute;
  font-size: 2rem;
  color: #333;
`;
