import { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement>;

export function InputField({ ...props }: InputFieldProps) {
  return (
    <input
      {...props}
      className="bg-transparent placeholder:text-gray-500 text-gray-800 focus:outline-none"
    />
  );
}
