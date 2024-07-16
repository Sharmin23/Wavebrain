import ButtonSvg from "../assets/assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classess = `button relative infline-flex items-center justify-center h-11 transition-colors hover:text-color-1 $ {px || "px-7"} ${
    white ? "text-n-*" : "text-n-1"
  } $ {className || ""}`;
  const renderButton = () => (
    <button className={classess}>
      <span>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  return renderButton();
};

export default Button;
