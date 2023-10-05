import imageBack from '../assets/back.svg';
import imageForward from '../assets/forvard.svg';
import imageCaption from '../assets/caption.svg';
import imageImage from '../assets/image.svg';

type TMenuProps = {
  name: string;
  image: string[];
};

export type TMenuButton = TMenuProps & {
  handler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const buttons: TMenuProps[] = [
  {
    name: 'Back',
    image: [imageBack],
  },
  {
    name: 'Forward',
    image: [imageForward],
  },
  {
    name: 'Caption',
    image: [imageCaption],
  },
  {
    name: 'Paragraph',
    image: [imageCaption, imageCaption],
  },
  {
    name: 'Image',
    image: [imageImage],
  },
];
