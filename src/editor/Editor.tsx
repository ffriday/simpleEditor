import Menu from '../menu/Menu';
import Text from '../text/Text';
import './Editor.css';

export default function Editor(): JSX.Element {
  return (
    <section className="editor__container">
      <Menu />
      <Text />
    </section>
  );
}
