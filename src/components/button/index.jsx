
const Button = (props) => {
  return (
    <button
      type="button"
      className={`text-[16px] ${props.textColor} ${props.hoverEffects} leading-[26px] uppercase ${props.border} flex items-center justify-center gap-[18px] rounded-[15px] text-center px-5 md:px-10 h-[80px]`}
    >
      {props.text}
      <img 
        src={props.src}
      />
    </button>
  );
};

export default Button;
