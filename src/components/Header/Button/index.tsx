import "./Button.css";
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}
export function Button({ children, onClick }: ButtonProps) {
  return (
    <div className="button-container">
      <button onClick={onClick}>{children}</button>
    </div>
  );
}
