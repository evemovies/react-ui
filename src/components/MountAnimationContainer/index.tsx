import { useTransition, animated, AnimationResult } from 'react-spring';
import { IMountAnimationContainerProps } from './types';

function MountAnimationContainer({ visible, children, onAnimationFinished, config }: IMountAnimationContainerProps) {
  const transitions = useTransition(visible, {
    ...config,
    onRest: ({ finished }: AnimationResult) => {
      if (finished && onAnimationFinished) onAnimationFinished(finished);
    },
  });

  return <>{transitions((style, item) => (item ? <animated.div style={style as any}>{children}</animated.div> : ''))}</>;
}

export default MountAnimationContainer;
