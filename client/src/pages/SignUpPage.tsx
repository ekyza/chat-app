import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { signUpFn } from "../utils/api";

import AuthLayout from "../components/AuthLayout";
import AuthInputField from "../components/AuthInputField";
import AuthButton from "../components/AuthButton";

export default function SignUpPage() {
  const [signUpForm, setSignUpForm] = useState({
    username: "",
    password: "",
  });
  const { mutate, data, isPending, isError, error } = useMutation({
    mutationKey: ["sign-up"],
    mutationFn: signUpFn,
    onSuccess: (payload) => {
      window.localStorage.setItem("token", JSON.stringify(payload.token));
      window.location.reload();
    },
  });

  const onChangeFn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AuthLayout
      title="Sign Up to Get Started"
      text="Fill out the form below to create a new account"
      linkText="Already have an account?"
      linkPath="/sign-in"
      linkName="Sign in"
    >
      <AuthInputField labelHtmlFor="username" labelText="Username" inputType="text" inputName="username" inputId="username" inputOnChangeFn={onChangeFn} />
      <AuthInputField labelHtmlFor="password" labelText="Password" inputType="password" inputName="password" inputId="password" inputOnChangeFn={onChangeFn} />
      {isError && <p className="bg-red-600 py-2 border border-red-600 rounded-lg text-sm font-medium text-white text-center">{error?.message}</p>}
      <AuthButton
        onClick={() => {
          mutate({
            username: signUpForm.username,
            password: signUpForm.password,
          });
        }}
        disabled={isPending}
      >
        Sign up
      </AuthButton>
    </AuthLayout>
  );
}
