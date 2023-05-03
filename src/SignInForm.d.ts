import { ReactElement } from 'react';

interface SignInFormProps {
  onSignIn: (token: string) => void;
}

declare function SignInForm(props: SignInFormProps): ReactElement;

export default SignInForm;
