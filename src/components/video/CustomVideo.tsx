import React from 'react';
import { StyledVideo, Wrapper } from './CustomVideo.styles';

interface Video {
  src: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

const CustomVideo: React.FC<Video> = ({ src }) => {
  return (
    <Wrapper >
      <StyledVideo 
      autoPlay 
      loop 
      muted 
      controls 
      src={src} 
      playsInline  
      />
    </Wrapper>
  );
};

export default CustomVideo;
