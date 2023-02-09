import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

export const FOOTER_ICON_LIST: {
  [key: string]: IconProp;
} = {
  'https://github.com/jokj624': faGithub,
  'https://www.linkedin.com/in/jeong-ah-chae-56a681130/': faLinkedin,
  'https://blog.jobchae.kr': faBlog,
  'https://www.instagram.com/dining.philosopher/': faInstagram,
};
