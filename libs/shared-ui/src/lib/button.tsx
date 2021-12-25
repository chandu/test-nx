
interface ButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: ButtonProps) => {
  return <button className="my-8 px-4 py-2 rounded-md bg-primary hover:bg-primaryDark text-white"  onClick={props.onClick}>{props.label}</button>
}

export default Button;
