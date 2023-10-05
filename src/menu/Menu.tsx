import Button from '../button/Button';
import './Menu.css';
import { buttons } from './buttonProps';

export default function Menu(): JSX.Element {
  return (
    <nav className="editor__menu">
      <div className="editor__buttons">
        {buttons.map(({ name, image }) => (
          <Button
            key={name}
            name={name}
            image={image}
            handler={(event) => {
              console.log(event);
            }}
          />
        ))}
      </div>
      <button type="button" className="menu__copy">
        Скопировать HTML
      </button>
    </nav>
  );
}
