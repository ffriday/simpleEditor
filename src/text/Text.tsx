import { useRef, useState } from 'react';
import ContentEditable, {
  type ContentEditableEvent,
} from 'react-contenteditable';
import './Text.css';

// TODO:
// Handle tab

export default function Text(): JSX.Element {
  const [refresh, setRefresh] = useState(false);
  const content = useRef('');

  const pasteHandler = (event: React.ClipboardEvent<HTMLDivElement>): void => {
    event.preventDefault();
    const text = event.clipboardData
      .getData('text')
      .split('\n')
      .map((el) => `<div>${el}</div>`)
      .join('');
    content.current = `${content.current}${text}`;
    setRefresh(!refresh);
    console.log(content.current, text);
  };

  const handleChange = (event: ContentEditableEvent): void => {
    let input = event.target.value;
    const firstTag = input.indexOf('<');
    if (firstTag === -1) input = `<div>${input}</div>`;
    content.current = input;
    console.log(firstTag, input, content);
  };

  return (
    <ContentEditable
      className="editor__text"
      html={content.current}
      onChange={handleChange}
      onInput={handleChange}
      onPaste={pasteHandler}
    />
  );
}
