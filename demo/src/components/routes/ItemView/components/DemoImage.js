import React from 'react';
import { Image } from 'src';

import deathlyHallows from '../images/deathlyHallows.svg';
import potterSelfie from '../images/selfie_harrypotter.jpg';


export default function DemoImage() {
  const wrapperStyle = {
    background: `url(${ deathlyHallows }) no-repeat center center rgba(0, 0, 0, 0.2)`,
    backgroundSize: '8rem',
    height: '14.0625rem',
    width: '18.75rem'
  };

  return(
    <div style={ wrapperStyle }>
      <Image
        alt="potter selfie"
        onError=""
        src={ potterSelfie }
      />
    </div>
  );
}
