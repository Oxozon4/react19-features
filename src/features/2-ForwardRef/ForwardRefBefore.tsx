import { forwardRef, useRef } from 'react';

const ForwardRefBefore = () => {
  // 1. Create a ref
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onButtonClick = () => {
    console.log(buttonRef.current);
  };

  // 2. Pass a ref as prop
  return <Button ref={buttonRef} onClick={onButtonClick} />;
};

// 3. use forwardRef
const Button = forwardRef<HTMLButtonElement, { onClick: () => void }>(
  ({ onClick }, ref) => {
    return (
      <button ref={ref} onClick={onClick}>
        Click me
      </button>
    );
  }
);

export default ForwardRefBefore;
