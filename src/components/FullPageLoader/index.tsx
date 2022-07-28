import { Spin } from 'antd';
import MountAnimationContainer from '@/components/MountAnimationContainer';
import { IFullPageLoaderProps } from './types';
import s from './style.module.scss';

function FullPageLoader({ visible, onAnimationFinished }: IFullPageLoaderProps) {
  const animationConfig = {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 1000,
    },
  };

  return (
    <div className={s.loaderContainer}>
      <MountAnimationContainer visible={visible} config={animationConfig} onAnimationFinished={onAnimationFinished}>
        <Spin size="large" />
      </MountAnimationContainer>
    </div>
  );
}

export default FullPageLoader;
