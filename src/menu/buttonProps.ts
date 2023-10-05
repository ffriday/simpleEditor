import imageBack from '../assets/back.svg';
import imageForward from '../assets/forvard.svg';
import imageCaption from '../assets/caption.svg';
import imageParagraph from '../assets/paragraph.svg';
import imageImage from '../assets/image.svg';
import { ButtonAction } from '../constants/variables';

type TMenuProps = {
  name: ButtonAction;
  image: string;
};

export type TButtonActionProps = {
  name: ButtonAction;
  event?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
};

export type TMenuButton = TMenuProps & {
  handler: ({ name, event }: TButtonActionProps) => void;
};

export const buttons: TMenuProps[] = [
  {
    name: ButtonAction.back,
    image: imageBack,
  },
  {
    name: ButtonAction.forvard,
    image: imageForward,
  },
  {
    name: ButtonAction.caption,
    image: imageCaption,
  },
  {
    name: ButtonAction.paragraph,
    image: imageParagraph,
  },
  {
    name: ButtonAction.image,
    image: imageImage,
  },
];
