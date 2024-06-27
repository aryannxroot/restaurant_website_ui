import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';


const Intro = () => {


  const vidref = React.useRef();
  const [play, setPlay] = React.useState(false);

  const handleVideo = () => {
    setPlay(!play);
    if(play) {
      vidref.current.pause();
    } else {
      vidref.current.play();
    }
  }

  return (
    <div className='app__video'>
      <video 
        src={meal}
        ref={vidref}
        type='video/mp4'
        loop
        controls={false}
        muted
        />
        <div className='app__video-overlay flex__center'>
          <div 
            className='app__video-overlay_circle flex__center'
            onClick={handleVideo}
          >
          { play 
            ? <BsPauseFill color='#fff' fontSize={44} /> 
            : <BsFillPlayFill color='#fff' fontSize={44} />
          }

          </div>
        </div>
    </div>
  )
};

export default Intro;
