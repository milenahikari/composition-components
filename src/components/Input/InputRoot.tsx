import { ReactNode } from "react";

type InputRootProps = {
  children: ReactNode;
};

export function InputIRoot({ children }: InputRootProps) {
  return <div className="flex flex-col">{children}</div>;
}
