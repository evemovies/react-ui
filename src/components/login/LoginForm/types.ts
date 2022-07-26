interface ILoginFormValues {
  userId: string;
  otpCode: string;
}

export interface ILoginFormProps {
  onSubmit: (values: ILoginFormValues) => void;
}
