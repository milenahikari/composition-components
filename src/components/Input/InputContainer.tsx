import { ReactNode } from "react";

type InputContainerProps = {
  children: ReactNode;
};

export function InputContainer({ children }: InputContainerProps) {
  return (
    <div className="flex flex-row items-center bg-gray-300 rounded p-2 gap-2">
      {children}
    </div>
  );
}
