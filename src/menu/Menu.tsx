import Button from '../button/Button';
import './Menu.css';
import { type TButtonActionProps, buttons } from './buttonProps';

export default function Menu(): JSX.Element {
  const buttonHandler = ({ name, event }: TButtonActionProps): void => {
    console.log(name);
  };

  return (
    <nav className="editor__menu">
      <div className="editor__buttons">
        {buttons.map(({ name, image }) => (
          <Button
            key={name}
            name={name}
            image={image}
            handler={buttonHandler}
          />
        ))}
      </div>
      <button type="button" className="menu__copy">
        Скопировать HTML
      </button>
    </nav>
  );
}
