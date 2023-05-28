import { FormEvent, useState } from 'react';
import {
  Form,
  Input,
  SubmitIcon,
  SubmitButton,
  ErrorIcon,
  ErrorMessage,
  InputContainer,
} from './styles';

const EmailForm = () => {
  const [email, setEmail] = useState({ value: '', error: false });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.value) {
      setEmail({ value: email.value, error: true });
      return;
    }
    console.log('Email is:', email);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          hasError={email.error}
          placeholder="Email Address"
          value={email.value}
          onChange={(e) => {
            setEmail({ value: e.target.value, error: false });
          }}
        />
        {email.error && (
          <>
            <ErrorIcon src="assets/images/icon-error.svg" />
            <ErrorMessage>Please provide a valid email</ErrorMessage>{' '}
          </>
        )}
      </InputContainer>

      <SubmitButton>
        <SubmitIcon src="assets/images/icon-arrow.svg" />
      </SubmitButton>
    </Form>
  );
};

export default EmailForm;
