import React from 'react';

type SignInButtonProps = {
  label: string;
  but: (value: boolean) => void;
}

declare const SignInButton: React.FC<SignInButtonProps>;

export default SignInButton;
