import React from "react";
import { Button as AntdButton, ButtonProps as AntdButtonProps } from "antd";

export interface ButtonProps extends Omit<AntdButtonProps, "type" | "size"> {
  asChild?: boolean;
  type?: "primary" | "dashed" | "link" | "text" | "default";
  size?: "medium" | "small" | "large" | "icon";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  type = "default",
  size = "medium",
  disabled = false,
  ...props
}) => {
  return (
    <AntdButton
      type={type}
      size={size === "medium" ? "middle" : size === "icon" ? "small" : size}
      disabled={disabled}
      {...props}
    />
  );
};
