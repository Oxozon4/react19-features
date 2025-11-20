import { useRef } from 'react';

const ForwardRefAfter = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onButtonClick = () => {
    console.log(buttonRef.current);
  };

  return <Button ref={buttonRef} onClick={onButtonClick} />;
};

const Button = ({
  ref,
  onClick,
}: {
  ref: React.Ref<HTMLButtonElement>;
  onClick: () => void;
}) => {
  return <button ref={ref} onClick={onClick} />;
};

export default ForwardRefAfter;
