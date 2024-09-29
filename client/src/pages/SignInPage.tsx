import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { signInFn } from "../utils/api";

import AuthLayout from "../components/AuthLayout";
import AuthInputField from "../components/AuthInputField";
import AuthButton from "../components/AuthButton";

export default function SignInPage() {
  const [signInForm, setSignInForm] = useState({
    username: "",
    password: "",
  });
  const { mutate, data, isPending, isError, error } = useMutation({
    mutationKey: ["sign-in"],
    mutationFn: signInFn,
    onSuccess: (payload) => {
      window.localStorage.setItem("token", JSON.stringify(payload.token));
      window.location.reload();
    },
  });

  const onChangeFn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInForm({
      ...signInForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AuthLayout
      title="Sign In to Your Account"
      text="Enter your email and password to sign in to your account"
      linkText="Don't have an account yet?"
      linkPath="/sign-up"
      linkName="Sign up"
    >
      <AuthInputField labelHtmlFor="username" labelText="Username" inputType="text" inputName="username" inputId="username" inputOnChangeFn={onChangeFn} />
      <AuthInputField labelHtmlFor="password" labelText="Password" inputType="password" inputName="password" inputId="password" inputOnChangeFn={onChangeFn} />
      {isError && <p className="bg-red-600 py-2 border border-red-600 rounded-lg text-sm font-medium text-white text-center">{error?.message}</p>}
      <AuthButton
        onClick={() => {
          mutate({
            username: signInForm.username,
            password: signInForm.password,
          });
        }}
        disabled={isPending}
      >
        Sign in
      </AuthButton>
    </AuthLayout>
  );
}
