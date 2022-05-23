import React from 'react';
import { animated } from 'react-spring';
import useBoop from '../customHook/useBoop';


const DoubleBoop = ({ children, ...boopConfig }) => {
  const [style, trigger] = useBoop(boopConfig);
  return (
    <>
      <animated.span onMouseEnter={trigger} style={style}>
        {children[0]}
      </animated.span>
      <animated.span onMouseEnter={trigger}>
          {children[1]}
      </animated.span>
    </>
  );
};
export default DoubleBoop;