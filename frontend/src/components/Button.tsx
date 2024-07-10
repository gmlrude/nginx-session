interface ButtonProps {
  onSubmit: () => void;
}

const Button = ({ onSubmit }: ButtonProps) => {
  return (
    <div
      className="flex items-center justify-center w-[50px] h-[30px] rounded-[10px] bg-green-500 text-white hover:scale-110"
      onClick={onSubmit}
    >
      제출
    </div>
  );
};

export default Button;
