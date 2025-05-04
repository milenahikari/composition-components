import { ElementType } from "react";

type InputIconProps = {
  icon: ElementType;
};

export function InputIcon({ icon: Icon }: InputIconProps) {
  return <Icon color="gray" width={18} height={18} />;
}
