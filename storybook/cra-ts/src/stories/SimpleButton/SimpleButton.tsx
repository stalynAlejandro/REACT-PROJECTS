import React, { FC, ReactNode } from "react";

export type TSimpleButton = {
  //Is this the principal call to action on the page?
  primary?: boolean;

  //What background color to use
  backgroundColor?: string;

  //How large should the button be?
  size?: "small" | "medium" | "large";

  //Button contents
  label?: string;

  children: ReactNode;
  // Simple handler
  onClick?: () => void;
};

// The world's most_basic_button
export const SimpleButton: FC<TSimpleButton> = ({
  children,
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  onClick,
  ...props
}: TSimpleButton) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  return (
    <button
      type="button"
      className={["sotrybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
