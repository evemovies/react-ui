import { UseTransitionProps } from 'react-spring';

export interface IMountAnimationContainerProps {
  visible: boolean;
  children: JSX.Element;
  onAnimationFinished?: (finished: boolean) => void;
  config: UseTransitionProps;
}
