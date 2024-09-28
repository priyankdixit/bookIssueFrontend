import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => (
  <button onClick={onClick} className="action-button">
    {text}
  </button>
);

export default Button;
