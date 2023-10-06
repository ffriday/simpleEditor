import { useState } from 'react';
import './Text.css';

export default function Text(): JSX.Element {
  const [content, setContent] = useState('');
  console.log(content);
  return (
    <section
      className="editor__text"
      contentEditable="true"
      onInput={(event) => {
        setContent(event.currentTarget.innerHTML ?? '');
      }}
    >
      TEST
    </section>
  );
}
