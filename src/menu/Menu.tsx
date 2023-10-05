import Button from '../button/Button';
import './Menu.css';
import { buttons } from './buttonProps';

export default function Menu(): JSX.Element {
  return (
    <section className="editor__menu">
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
    </section>
  );
}
