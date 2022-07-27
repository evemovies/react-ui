import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { useTransition, animated, AnimationResult } from 'react-spring';
import { IFullPageLoaderProps } from './types';
import s from './style.module.scss';

function FullPageLoader({ visible, onAnimationFinished }: IFullPageLoaderProps) {
  const transitions = useTransition(visible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    onRest: ({ finished }: AnimationResult) => {
      if (finished && onAnimationFinished) onAnimationFinished(finished);
    },
  });

  return (
    <div className={s.loaderContainer}>
      {transitions((style, item) =>
        item ? (
          <animated.div style={style}>
            <Spin size="large" />
          </animated.div>
        ) : (
          ''
        )
      )}
    </div>
  );
}

export default FullPageLoader;
