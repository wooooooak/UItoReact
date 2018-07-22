import * as React from 'react';

interface ButtonProps {
  color: string;
}

const Button: React.SFC<ButtonProps> = ({ color, children }) => (
  <button style={{ color }}>{children}</button>
);

export default Button;
