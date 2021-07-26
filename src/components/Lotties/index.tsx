import Lottie from 'lottie-react-web';
import animationData from '../../assets/lotties/animation.json';
import { Container } from '../../styles/globalStyle';


export const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Container>
      <Lottie 
        options={defaultOptions}
          height={400}
          width={400}
      />
    </Container>
  )
}
