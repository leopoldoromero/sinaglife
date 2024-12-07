/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useRef, useState } from 'react';
import { Position } from '../../theme';
import { TooltipWrapper, TooltipTarget, CenterContainer, TooltipBox } from './Tootlip.styles';

interface Props {
  children: React.ReactNode;
  content: string;
  position: Position;
}

const Tooltip: React.FC<Props> = ({ position, content, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef(null);
  const showTooltip = isHovered || isFocused;

  const handleClick = (e: any) => {
    e.preventDefault();
    if (targetRef.current) {
      (targetRef.current as any).blur();
    }
  };

  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={handleClick}
        ref={targetRef}
      >
        {children}
      </TooltipTarget>
      {showTooltip && (
        <CenterContainer $position={position}>
          <TooltipBox $position={position}>{content}</TooltipBox>
        </CenterContainer>
      )}
    </TooltipWrapper>
  );
};

export default Tooltip;
