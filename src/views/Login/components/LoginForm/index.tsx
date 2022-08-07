import { Button, Form, Input } from 'antd';
import { useSpring, animated } from 'react-spring';
import MountAnimationContainer from '@/components/MountAnimationContainer';
import { ILoginFormProps, ILoginFormFields } from './types';
import { animations } from './helpers';
import s from './styles.module.scss';

function LoginForm({ otpCodeRequested, onLogin, onRequestOtpCode }: ILoginFormProps) {
  const [form] = Form.useForm<{ userId: string; otpCode: string }>();
  const buttonShiftAnimation = useSpring({
    y: otpCodeRequested ? 50 : 0,
    config: {
      duration: 1000,
    },
  });

  const handleFormSubmit = ({ userId, otpCode }: ILoginFormFields) => {
    if (otpCodeRequested) onLogin({ userId, otpCode });
    else onRequestOtpCode(userId);
  };

  return (
    <MountAnimationContainer visible config={animations.formConfig}>
      <div>
        <Form className={s.form} form={form} onFinish={handleFormSubmit}>
          <Form.Item name="userId">
            <Input placeholder="User ID" />
          </Form.Item>
          <MountAnimationContainer visible={otpCodeRequested} config={animations.otpCodeConfig}>
            <Form.Item className={s.otpFieldWrapper} name="otpCode">
              <Input placeholder="OTP Code" disabled={!otpCodeRequested} />
            </Form.Item>
          </MountAnimationContainer>
          <animated.div style={buttonShiftAnimation}>
            <Form.Item>
              <Button className={s.submitButton} type="primary" htmlType="submit">
                {otpCodeRequested ? 'Login' : 'Request OTP Code'}
              </Button>
            </Form.Item>
          </animated.div>
        </Form>
      </div>
    </MountAnimationContainer>
  );
}

export default LoginForm;
