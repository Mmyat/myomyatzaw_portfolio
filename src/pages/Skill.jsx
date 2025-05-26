import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../assets/Animation.json';
const Skill = () => {
  return (
    <div>
      <Player
          autoplay
          loop
          src={Animation}
          style={{ height: '300px', width: '300px' }}
        />
    </div>
  )
}

export default Skill;