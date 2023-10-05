import { type TMenuButton } from '../menu/buttonProps';
import './Button.css';

export default function Button({
  name,
  image,
  handler,
}: TMenuButton): JSX.Element {
  return (
    <button
      key={`${name}-button`}
      type="button"
      className="menu__button"
      onClick={(event) => {
        handler(event);
      }}
    >
      <img src={image} alt={name} />
    </button>
  );
}
